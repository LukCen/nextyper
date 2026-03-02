'use client'

import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="w-screen bg-gray-400 p-2">
      <ul className="flex justify-center gap-4">
        <li>
          <Link className="w-full bg-gray-600 text-gray-100 px-4 py-1" href={"/"}>Main screen</Link>
        </li>
        <li>
          <Link className="w-full bg-gray-600 text-gray-100 px-4 py-1" href={"/hi-score"}>Leaderboard</Link>
        </li>
        <li>
          <Link className="w-full bg-gray-600 text-gray-100 px-4 py-1" href={"/about"}>About us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
