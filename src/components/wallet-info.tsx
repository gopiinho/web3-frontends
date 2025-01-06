'use client'
import { useAccount, useDisconnect } from 'wagmi'

export function WalletInfo() {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()

  return isConnected ? (
    <div className="my-4 flex flex-col gap-2 text-center">
      <button
        onClick={() => disconnect()}
        className="mx-auto max-w-[200px] rounded-lg border border-white/55 px-8 py-2 duration-200 hover:border-white/85 hover:bg-zinc-800/40"
      >
        Disconnect
      </button>
      <span className="text-2xl opacity-75">Wallet Address</span>
      <span className="text-xl">{address}</span>
    </div>
  ) : null
}
