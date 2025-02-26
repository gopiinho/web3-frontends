import { Address } from 'viem'

type Props = {
  sender: Address
  message: string
}

export default function Messages({ sender, message }: Props) {
  return (
    <div className="flex flex-col gap-1 border-t border-white/10 px-1 py-3">
      <span className="font-bold opacity-90">
        Sender:{' '}
        <span className="opacity-60">{`${sender.slice(0, 6)}...${sender.slice(-4)}`}</span>
      </span>
      <span className="font-bold opacity-90">
        Message: <span className="opacity-60">{message}</span>
      </span>
    </div>
  )
}
