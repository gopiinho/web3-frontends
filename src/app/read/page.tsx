export default function Read() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <h3 className="text-4xl opacity-75">Read from smart contracts</h3>
      <div className="flex flex-col items-center gap-5">
        <span className="text-2xl">USDT balance</span>
        <div className="flex gap-4">
          <div className="h-12 min-w-[300px] rounded-lg border border-white/55 p-2"></div>
          <button className="rounded-lg border border-white/55 px-4 py-1 duration-200 hover:border-white/85 hover:bg-zinc-800/40">
            Get
          </button>
        </div>
      </div>
    </div>
  )
}
