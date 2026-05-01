'use client'

import { House, Info, Trophy } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavBar = () => {
  const pathname = usePathname()
  return (
    <nav className="flex items-center justify-around w-screen bg-gray-400 p-2">
      <span className="font-black text-4xl">NexTyper</span>
      <ul className="flex justify-center gap-8">
        <li className="flex items-center justify-center">
          <Link className={`flex items-center justify-center  gap-2 w-full bg-gray-600 text-gray-100 px-4 py-1 hover:bg-blue-600 duration-125 rounded-sm font-medium ${pathname === "/" ? "bg-green-700" : ""}`} href={"/"}>
            Main screen
            <House size={20} />
          </Link>
        </li>
        <li className="flex items-center justify-center">
          <Link className={`flex items-center justify-center  gap-2 w-full bg-gray-600 text-gray-100 px-4 py-1 hover:bg-blue-600 duration-125 rounded-sm font-medium ${pathname === "/hi-score" ? "bg-green-700" : ""}`} href={"/hi-score"}>
            Leaderboard
            <Trophy size={20} />
          </Link >
        </li>
        <li className="flex items-center justify-center">
          <Link className={`flex items-center justify-center  gap-2 w-full bg-gray-600 text-gray-100 px-4 py-1 hover:bg-blue-600 duration-125 rounded-sm font-medium ${pathname === "/about" ? "bg-green-700" : ""}`} href={"/about"}>
            About us
            <Info size={20} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
