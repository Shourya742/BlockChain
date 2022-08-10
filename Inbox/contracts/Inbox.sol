// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity  ^0.4.17;

contract Inbox{
    string public message;
    

    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}