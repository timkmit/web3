const path = require('path');
const fs = require('fs');
const solc = require('solc');

const greetingsPath = path.resolve(__dirname, 'contracts', 'Greetings.sol');
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
                '*': ['abi', 'evm.bytecode'],
            },
        },
    },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
const contract = output.contracts['Greetings.sol'].Greetings;

const interface = contract.abi;
const bytecode = contract.evm.bytecode.object;

module.exports = {
    interface,
    bytecode,
};
