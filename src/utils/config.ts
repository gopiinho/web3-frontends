import { http, createConfig, createStorage, cookieStorage } from 'wagmi'
import { mainnet, sepolia, baseSepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

export function getConfig() {
  return createConfig({
    chains: [baseSepolia],
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
      [baseSepolia.id]: http(),
    },
    connectors: [
      injected(),
      coinbaseWallet(),
      walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID ?? '' }),
    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
  })
}

declare module 'wagmi' {
  interface Register {
    config: ReturnType<typeof getConfig>
  }
}
