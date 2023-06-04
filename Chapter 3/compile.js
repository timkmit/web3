const path = require('path');
greetingsPath = path.resolve(__dirname, 'contracts', 'Greetings.sol');

const fs = require('fs');
const solc = require('solc');

const source = fs.readFileSync(greetingsPath, 'utf8');

