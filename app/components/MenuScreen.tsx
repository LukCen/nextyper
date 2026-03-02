'use client'

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

interface MenuscreenProps { }

const MenuScreen = () => {
  return (
    <main className="w-fit mx-auto">
      <h1>Welcome to NexTyper! Input your name below and press start to begin.</h1>
      <Field className=" bg-slate-200 shadow-sm p-2 mt-4">
        <FieldLabel htmlFor="input-demo-api-key">Your player name</FieldLabel>
        <Input id="input-demo-api-key" type="text" placeholder="John Doe" />
        <FieldDescription>
          Your selected name will persist through sessions.
        </FieldDescription>
        <button className="px-4 py-1 bg-blue-500 rounded-sm max-w-fit">Start</button>
      </Field>
    </main>

  )
}

export default MenuScreen
