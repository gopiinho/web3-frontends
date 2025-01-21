'use client'
import { useBalance } from 'wagmi'

const VITALIK_ADDRESS = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'

export default function Read() {
  const result = useBalance({
    address: VITALIK_ADDRESS,
  })
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <h3 className="text-4xl opacity-75">Read from smart contracts</h3>
      <span className="text-xs opacity-50">
        Vitalik Buterin Wallet: {VITALIK_ADDRESS}
      </span>
      <div className="flex flex-col items-center gap-10 rounded-lg border border-white/60 px-10 py-4 lg:min-w-[600px]">
        <div className="flex flex-col gap-4">
          <span className="text-2xl">
            ETH Balance: {Number(result.data?.formatted).toFixed(2)} ETH
          </span>
          <button className="mx-auto max-w-[200px] rounded-lg border border-white/55 px-8 py-2 duration-200 hover:border-white/85 hover:bg-zinc-800/40">
            Get ETH Balance
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-2xl">ERC20 Token Balance: 0.00</span>
          <button className="mx-auto max-w-[300px] rounded-lg border border-white/55 px-8 py-2 duration-200 hover:border-white/85 hover:bg-zinc-800/40">
            Get ERC20 Token Balance
          </button>
        </div>
      </div>
    </div>
  )
}
