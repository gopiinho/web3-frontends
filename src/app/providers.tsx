'use client'
import { ReactNode, useState } from 'react'
import { WagmiProvider, State } from 'wagmi'
import { getConfig } from '@/utils/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export function Providers(props: {
  children: ReactNode
  initialState?: State
}) {
  const [config] = useState(() => getConfig())
  const [queryClient] = useState(() => new QueryClient())

  return (
    <WagmiProvider config={config} initialState={props.initialState}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
