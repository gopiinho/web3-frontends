import Messages from '@/components/messages'
import { useReadContract } from 'wagmi'
import { chatroomAbi } from '@/utils/chatroomAbi'

const CONTRACT_ADDRESS = '0x515Bcc986E17FDbd38FBb3585f12D1D4b53ecE66'

export default function MessagesList() {
  const {
    data: allMessages,
    isFetching: isFetchingMessages,
    refetch: refetchMessages,
  } = useReadContract({
    abi: chatroomAbi,
    address: CONTRACT_ADDRESS,
    args: [],
    functionName: 'getAllMessages',
  })
  return (
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
          allMessages
            .toReversed()
            .map((msg, index) => (
              <Messages key={index} sender={msg.sender} message={msg.message} />
            ))
        ) : (
          <div className="text-white/50">No messages yet</div>
        )}
      </div>
    </div>
  )
}
