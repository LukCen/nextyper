import { Heart } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className='border-t-1 border-neon-green flex justify-center items-center p-2'>
      <span className="flex gap-2">Made with&nbsp;<Heart size={20} />by</span>
      &nbsp;
      <a className='text-neon-green underline underline-offset-5' href="https://lcena.me">Łukasz Cena</a>
    </footer>
  )
}

export default Footer
