'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavBar = () => {
  const pathname = usePathname()
  return (
    <nav className="w-screen bg-gray-400 p-2">
      <ul className="flex justify-center gap-4">
        <li>
          <Link className={`w-full bg-gray-600 text-gray-100 px-4 py-1 hover:bg-blue-600 duration-125 rounded-sm font-medium ${pathname === "/" ? "bg-green-700" : ""}`} href={"/"}>Main screen</Link>
        </li>
        <li>
          <Link className={`w-full bg-gray-600 text-gray-100 px-4 py-1 hover:bg-blue-600 duration-125 rounded-sm font-medium ${pathname === "/hi-score" ? "bg-green-700" : ""}`} href={"/hi-score"}>Leaderboard</Link>
        </li>
        <li>
          <Link className={`w-full bg-gray-600 text-gray-100 px-4 py-1 hover:bg-blue-600 duration-125 rounded-sm font-medium ${pathname === "/about" ? "bg-green-700" : ""}`} href={"/about"}>About us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
