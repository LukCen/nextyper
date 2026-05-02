'use client'

import { House, Info, Trophy } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links =
  [
    { text: "Main screen", pathName: "/", href: "/", icon: House },
    { text: "Leaderboard", pathName: "/hi-score", href: "/hi-score", icon: Trophy },
    { text: "About us", pathName: "/about", href: "/about", icon: Info }

  ]


const NavBar = () => {
  const pathname = usePathname()
  return (
    <nav className="flex items-center justify-around w-screen border-b-1 border-neon-green p-2">
      <span className="font-black text-4xl">NexTyper</span>
      <ul className="flex justify-center gap-8">
        {links.map(({ text, pathName, href, icon: Icon }) =>
          <li className="flex items-center justify-center">
            <Link className={`flex items-center justify-center gap-2 w-full bg-gray-600 text-gray-100 px-4 py-1 hover:bg-blue-600 duration-125 rounded-sm font-medium ${pathname === pathName ? "bg-green-700" : ""}`} href={href}>
              {text}
              <Icon size={20} />
            </Link>

          </li>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
