# Web3 Frontends

Short tutorial series where you can learn to get started with dApp development.

### [1. Connecting wallets to react applications.](https://www.youtube.com/watch?v=GAJTkFWx3V8)

Nextjs application setup for another 2 parts and configured and installed viem and wagmi and the use of `useConnect` hook from wagmi. Teaches the basic steps of setting up wallet connectors on react applications.

#### Setup

###### Nextjs

```bash
npx create-next-app@latest

or

yarn create next-app
```

###### Viem & Wagmi

```bash
npm install wagmi viem@2.x @tanstack/react-query

or

yarn add wagmi viem@2.x @tanstack/react-query
```

### [2. Reading data from smart contracts.](https://www.youtube.com/watch?v=V4lmN-NZVO0)

##### Hooks Used:

- [useBalance](https://wagmi.sh/react/api/hooks/useBalance#usebalance)
- [useReadContract](https://wagmi.sh/react/api/hooks/useReadContract)

### [3. Sending transactions / writing to smart contracts.](https://www.youtube.com/watch?v=OGOWmT1JRYM)

##### Hooks Used:

- [useWriteContract](https://wagmi.sh/react/api/hooks/useWriteContract)
