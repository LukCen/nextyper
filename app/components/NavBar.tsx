'use client'

import { House, Info, Trophy } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const links =
  [
    { text: "Main screen", pathName: "/", href: "/", icon: House, key: 0 },
    { text: "Leaderboard", pathName: "/hi-score", href: "/hi-score", icon: Trophy, key: 1 },
    { text: "About", pathName: "/about", href: "/about", icon: Info, key: 2 }

  ]


const NavBar = () => {
  const pathname = usePathname()
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    // desktop
    <>
      <nav className="hidden lg:flex items-center justify-around w-screen border-b-1 border-neon-green p-2">
        <span className="font-black text-4xl">NexTyper</span>
        <ul className="flex justify-center gap-8">
          {links.map(({ text, pathName, href, icon: Icon, key }) =>
            <li className="flex items-center justify-center" key={key}>
              <Link className={`flex items-center text-background justify-center gap-2 px-4 py-1 rounded-sm font-medium ${pathname === pathName ? "bg-neon-green shadow-[0px_0px_15px_3px_var(--color-neon-green)]" : "color-slide color-slide-blue-blue"}`} href={href}>
                {text}
                <Icon size={20} />
              </Link>
            </li>
          )}
        </ul>
      </nav>
      {/* mobile */}
      <nav className="flex lg:hidden items-center justify-around w-screen border-b-1 border-neon-green p-2 relative">
        <span className="font-black text-4xl">NexTyper</span>
        <button onClick={() => setMenuIsVisible(!menuIsVisible)} className="border-2 border-dark-ice rounded-sm px-4 py-2">Menu</button>
        <ul className={`absolute flex flex-col bg-background justify-center gap-8 py-4 px-2 border-b-1 border-l-1 border-t-1 border-neon-green top-full ${menuIsVisible === true ? "right-0" : "right-100"}`}>
          {links.map(({ text, pathName, href, icon: Icon, key }) =>
            <li className="flex items-center justify-center " key={key}>
              <Link className={`flex items-center text-background justify-center min-w-full gap-2 px-4 py-1 rounded-sm font-medium ${pathname === pathName ? "bg-neon-green shadow-[0px_0px_15px_3px_var(--color-neon-green)]" : "color-slide color-slide-blue-blue"}`} href={href}>
                {text}
                <Icon size={20} />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>


  )
}

export default NavBar
