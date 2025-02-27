'use client'
import { useState } from 'react'
import { redirect } from 'next/navigation'
import { useReadContract, useWriteContract, useAccount } from 'wagmi'
import MessagesList from '@/components/messages-list'
import { chatroomAbi } from '@/utils/chatroomAbi'

const CONTRACT_ADDRESS = '0x515Bcc986E17FDbd38FBb3585f12D1D4b53ecE66'

export default function Write() {
  const [message, setMessage] = useState('')
  const { isConnected } = useAccount()
  const { writeContract, isPending: isPendingMessage } = useWriteContract()

  function sendMessage(message: string) {
    writeContract({
      abi: chatroomAbi,
      address: CONTRACT_ADDRESS,
      functionName: 'sendMessage',
      args: [message],
    })
  }

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
        {isConnected ? (
          <button
            onClick={() => sendMessage(message)}
            className="mx-auto max-w-[200px] rounded-lg border border-white/55 px-8 py-2 duration-200 hover:border-white/85 hover:bg-zinc-800/40"
          >
            {isPendingMessage ? 'Sending...' : 'Send Message'}
          </button>
        ) : (
          <button
            onClick={() => redirect('/connect')}
            className="mx-auto max-w-[200px] rounded-lg border border-white/55 px-8 py-2 duration-200 hover:border-white/85 hover:bg-zinc-800/40"
          >
            Connect Wallet
          </button>
        )}
        <MessagesList />
      </div>
    </div>
  )
}
