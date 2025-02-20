// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract Chatroom {
    struct Message {
        address sender;
        string  message;
        uint256 timestamp;
    }

    uint public s_totalMessages;
    Message[] public s_messages;

    function sendMessage(string memory message) public {
        s_totalMessages++;
        s_messages.push(Message({sender: msg.sender, message: message, timestamp: block.timestamp}));
    }

    function getAllMessages() public view returns (Message[] memory) {
        return s_messages;
    }
}