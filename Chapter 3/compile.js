const path = require('path');
const greetingsPath = path.resolve(__dirname, 'contracts', 'Greetings.sol');

const fs = require('fs');
const solc = require('solc');

const source = fs.readFileSync(greetingsPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'Greetings.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

console.log(output);
