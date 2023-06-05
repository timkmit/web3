// SPDX-License-Identifier: none

pragma solidity ^0.8.19;

contract Greetings {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }
}
