# String Generator
An NPM package that will allow you to provide a list of characters and a min/max length of output string to generate a list of all possible combinations (or non-unique permutations) of those characters. This is useful for getting a list of characters for brute-forcing things.

### Installation
`npm install -g string-generator`
*NB: Global installation is required for CLI commands to work correctly*

### Usage

#### Expected input
The input is expected to be an array of characters expected to be used i.e.
```javascript
var myCharacterList = ['a','0','R','3','#','f','P','x'];
```

#### Code
Using that array we can pass it through as the first parameter, and then specify the minimum and maximum length of the combinations to be generated
```javascript
var generator = require('node_modules/generator.js'),
	myCombinations = generator(myCharacterList, 1, 2); //1 is the shorted a combo will be, 2 is the longest
	
console.log(myCombinations);
```

#### Output
This will output a JSON string containing all possible combinations like so:
```javascript
["a","0","R","3","#","f","P","x","aa","a0","aR","a3","a#","af","aP","ax","0a","00","0R","03","0#","0f","0P","0x","Ra","R0","RR","R3","R#","Rf","RP","Rx","3a","30","3R","33","3#","3f","3P","3x","#a","#0","#R","#3","##","#f","#P","#x","fa","f0","fR","f3","f#","ff","fP","fx","Pa","P0","PR","P3","P#","Pf","PP","Px","xa","x0","xR","x3","x#","xf","xP","xx"]
```

### Using as CLI (Runtime)

You can use the command in 2 a few different ways using an input file, or an inline comma-separated list i.e.
`generate-combos a,0,R,3,#,f,P,x 1 2`

You can pipe the output in to a file like so:
`generate-combos a,0,R,3,#,f,P,x 1 2 >> my-list-of-character-combinations.json`

You can also specify an input file, the file must contain the same expected input i.e.
*my-input-list.json*
`a,0,R,3,#,f,P,x 1 2`

Then run the command:
`generate-combos my-input-list.json 1 2`

or use the same command and pipe in to a JSON file for further usage:
`generate-combos my-input-list.json 1 2 >> my-list-of-character-combinations.json`

