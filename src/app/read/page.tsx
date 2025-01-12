'use client'
import { useAccount } from 'wagmi'

export default function Read() {
  const { address } = useAccount()
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <h3 className="text-4xl opacity-75">Read from smart contracts</h3>
      <span className="text-xs opacity-50">Wallet: {address}</span>
      <div className="flex flex-col items-center gap-10 rounded-lg border border-white/60 px-10 py-4">
        <div className="flex flex-col gap-4">
          <span className="text-2xl">ETH balance: 0.00 ETH</span>
          <button className="mx-auto max-w-[200px] rounded-lg border border-white/55 px-8 py-2 duration-200 hover:border-white/85 hover:bg-zinc-800/40">
            Get ETH Balance
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-2xl">USDT balance: 0.00 USDT</span>
          <button className="mx-auto max-w-[300px] rounded-lg border border-white/55 px-8 py-2 duration-200 hover:border-white/85 hover:bg-zinc-800/40">
            Get USDT Balance
          </button>
        </div>
      </div>
    </div>
  )
}
