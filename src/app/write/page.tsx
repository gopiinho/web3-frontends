'use client'
import { useState } from 'react'
import { useReadContract } from 'wagmi'
import Messages from '@/components/messages'
import { chatroomAbi } from '@/utils/chatroomAbi'

const CONTRACT_ADDRESS = '0x515Bcc986E17FDbd38FBb3585f12D1D4b53ecE66'

export default function Write() {
  const [message, setMessage] = useState('')

  const {
    data: allMessages,
    isFetching: isFetchingMessages,
    refetch: refetchMessages,
    error,
  } = useReadContract({
    abi: chatroomAbi,
    address: CONTRACT_ADDRESS,
    args: [],
    functionName: 'getAllMessages',
  })

  console.log('Messages:', allMessages)
  console.log('Is fetching:', isFetchingMessages)
  console.log('Error:', error)
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <h3 className="text-4xl opacity-75">Write to smart contracts</h3>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-start gap-10 rounded-lg border border-white/10 bg-[#2d2d2d] px-4 py-4 lg:min-w-[600px]">
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="w-full bg-transparent text-xl focus:outline-none"
            placeholder="Type your message..."
          />
        </div>
        <button className="mx-auto max-w-[200px] rounded-lg border border-white/55 px-8 py-2 duration-200 hover:border-white/85 hover:bg-zinc-800/40">
          Send Message
        </button>
        <div className="mt-8 flex w-full flex-col gap-2">
          <div className="flex w-full flex-col gap-2">
            <span className="w-full text-start text-lg font-bold opacity-60">
              Messages
            </span>
          </div>
          <div className="flex flex-col">
            {isFetchingMessages ? (
              'Loading...'
            ) : allMessages ? (
              allMessages.map((msg, index) => (
                <Messages
                  key={index}
                  sender={msg.sender}
                  message={msg.message}
                />
              ))
            ) : (
              <div className="text-white/50">No messages yet</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
