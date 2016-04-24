#! /usr/bin/env node
'use strict'

const   fileSys = require('fs'),
        generator = require('../generator.js');

class cliWrapper {

    constructor() {
        this.params = [[],1,1];
        this.loadData();
    }

    loadData() {

        let dataString = process.argv[2];

        //if it's not comma separated list, assume it's a file containing the list
        if (dataString.indexOf(',') === -1) {
            dataString = fileSys.readFileSync(dataString, 'utf8', (err, stats) => { });
        }

        this.setDataParam(dataString);
        this.setLengthParams();
        this.runGenerator();

    }

    setDataParam(dataString) {
        let list = dataString.split(',');

        list.map((val, index) => {
            if (val.length !== 1) {
                //error and kill process
                console.error('Param 1 :: List item ' + val + ' (index: ' + index + ') is more than 1 character in length');
                process.exit(1);
            }
            this.params[0].push(String(val));
        });
    }

    setLengthParams() {

        //make sure param 2 is a number
        if (typeof parseInt(process.argv[3]) === 'number') {
            this.params[1] = parseInt(process.argv[3]);
        } else {
            //error and kill process
            console.log('param 2 expected number, got ' + typeof parseInt(process.argv[3]));
            process.exit(1);
        }

        //make sure param 3 is bigger than param 2 and is a number
        if (typeof parseInt(process.argv[4]) === 'number' && this.params[1] <= parseInt(process.argv[4])) {
            this.params[2] = parseInt(process.argv[4]);
        } else {
            //error and kill process
            console.log('param 3 expected number, got ' + typeof parseInt(process.argv[4]));
            process.exit(1);
        }

    }

    runGenerator() {
        //console.time('Running generator');
        let listOutput = generator(this.params[0],this.params[1],this.params[2]);

        //stringify for output so we can do " >> file.json"
        listOutput = JSON.stringify(listOutput);
        //console.timeEnd('Running generator');
        console.log(listOutput);
    }

}

new cliWrapper();




