export default function Connect() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <h3 className="text-4xl opacity-75">Connect Wallets</h3>
      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-4">
          <button className="rounded-lg border border-white/55 px-8 py-2 duration-200 hover:border-white/85 hover:bg-zinc-800/40">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  )
}
