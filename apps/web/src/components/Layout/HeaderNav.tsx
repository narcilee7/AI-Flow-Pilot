import Link from "next/link"



const HeaderNav = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-2xl font-bold">JobPilot</div>
      <div className="flex items-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  )
}

export default HeaderNav