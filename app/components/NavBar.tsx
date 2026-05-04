'use client'

import { House, Info, Trophy } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links =
  [
    { text: "Main screen", pathName: "/", href: "/", icon: House, key: 0 },
    { text: "Leaderboard", pathName: "/hi-score", href: "/hi-score", icon: Trophy, key: 1 },
    { text: "About us", pathName: "/about", href: "/about", icon: Info, key: 2 }

  ]


const NavBar = () => {
  const pathname = usePathname()
  return (
    <nav className="flex items-center justify-around w-screen border-b-1 border-neon-green p-2">
      <span className="font-black text-4xl">NexTyper</span>
      <ul className="flex justify-center gap-8">
        {links.map(({ text, pathName, href, icon: Icon, key }) =>
          <li className="flex items-center justify-center" key={key}>
            <Link className={`flex items-center text-background justify-center gap-2 px-4 py-1 rounded-sm font-medium ${pathname === pathName ? "bg-neon-green shadow-[0px_0px_15px_3px_var(--color-neon-green)]" : "color-slide"}`} href={href}>
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
