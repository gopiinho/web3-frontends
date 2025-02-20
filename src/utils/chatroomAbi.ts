export const chatroomAbi = [
  {
    inputs: [],
    name: 'getAllMessages',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'string', name: 'message', type: 'string' },
          { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
        ],
        internalType: 'struct Chatroom.Message[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 's_messages',
    outputs: [
      { internalType: 'address', name: 'sender', type: 'address' },
      { internalType: 'string', name: 'message', type: 'string' },
      { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 's_totalMessages',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string', name: 'message', type: 'string' }],
    name: 'sendMessage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
