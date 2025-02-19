import Messages from '@/components/messages'

export default function Write() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <h3 className="text-4xl opacity-75">Write to smart contracts</h3>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-start gap-10 rounded-lg border border-white/10 bg-[#2d2d2d] px-4 py-4 lg:min-w-[600px]">
          <input className="w-full bg-transparent text-xl focus:outline-none"></input>
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
            <Messages sender="Vitalik" message="Hello my first message" />
            <Messages sender="Vitalik" message="Hello" />
          </div>
        </div>
      </div>
    </div>
  )
}
