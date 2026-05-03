'use client'

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

interface MenuScreenProps {
  onStart: () => void
  onNameSet: (name: string) => void
}

const MenuScreen = ({ onStart, onNameSet }: MenuScreenProps) => {
  const [name, setName] = useState("")
  return (
    <main className="w-fit mx-auto">
      <h1 className="text-2xl font-bold text-center">Welcome to NexTyper!<br /> Input your name below and press start to begin.</h1>
      <Field className="shadow-sm p-2 mt-4">
        <FieldLabel htmlFor="input-demo-api-key">Your player name</FieldLabel>
        <Input value={name} onChange={(e) => setName(e.target.value)} id="username" type="text" placeholder="John Doe" />
        <FieldDescription>
          Your selected name will persist through sessions.
        </FieldDescription>
        <button onClick={() => { onNameSet(name), onStart() }} className="flex justify-center items-center px-4 py-1 color-slide rounded-sm max-w-fit">Start <ArrowRight size={16} /> </button>
      </Field>
    </main >

  )
}

export default MenuScreen
