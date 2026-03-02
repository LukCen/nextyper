'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const dummyPlayers = [
  { name: "SpeedDemon42", wpm: 87, accuracy: 94 },
  { name: "KeyboardNinja", wpm: 112, accuracy: 98 },
  { name: "TypingGremlin", wpm: 64, accuracy: 89 },
  { name: "CaffeineTypist", wpm: 95, accuracy: 96 },
  { name: "SlowButSteady", wpm: 43, accuracy: 71 },
  { name: "RageQuitter99", wpm: 78, accuracy: 66 },
  { name: "MechanicalMenace", wpm: 134, accuracy: 93 },
  { name: "PeckerTyper", wpm: 31, accuracy: 95 },
  { name: "FingerBreaker", wpm: 101, accuracy: 90 },
  { name: "TouchTypeTerry", wpm: 58, accuracy: 90 },
]



const Leaderboard = () => {
  return (
    <main className="flex flex-col gap-4 items-center">
      <h1>Below you will find a leaderboard with scores from other players. Can you beat them?</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Words Per Minute</TableHead>
            <TableHead>Accuracy %</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyPlayers.map((p, i) => (
            <TableRow key={i}>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.wpm}</TableCell>
              <TableCell>{p.accuracy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  )
}

export default Leaderboard
