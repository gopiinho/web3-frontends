import Link from 'next/link'

export default function Tabs() {
  return (
    <div className="flex w-full flex-col gap-4 font-semibold">
      <Link href="/read">
        <div className="bg-zinc-800/40 px-4 py-6 duration-200 hover:bg-zinc-800/60">
          <h3 className="text-4xl">1. Read info from smart contracts.</h3>
        </div>
      </Link>
    </div>
  )
}
