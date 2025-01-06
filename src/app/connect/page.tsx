import { WalletOptions } from '@/components/wallet-options'
import { WalletInfo } from '@/components/wallet-info'

export default function Connect() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <h3 className="text-4xl opacity-75">Connect Wallets</h3>
      <div className="flex flex-col items-center gap-5">
        <div className="grid grid-flow-row grid-cols-2 gap-4">
          <WalletOptions />
        </div>
        <WalletInfo />
      </div>
    </div>
  )
}
