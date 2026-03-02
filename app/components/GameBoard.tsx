'use client'

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { calculateAccuracy, calculateWPM, getNextSentence } from "@/lib/gameUtils"
import "@/lib/sentences"
import { sentences } from "@/lib/sentences"
import { useEffect, useState } from "react"

interface GameBoardProps {
  playerNameProp: string
}

const GameBoard = ({ playerNameProp }: GameBoardProps) => {

  // states
  const [singleWord, setSingleWord] = useState("")
  // current word, understood as indice inside the wordsToType array
  const [currentWord, setCurrentWord] = useState(0)
  // timer - will count up to 120s in total
  const [timeElapsed, setTimeElapsed] = useState(0)
  // triggers when user starts typing, and activates the timer
  const [isRunning, setIsRunning] = useState(false)
  // triggers when time elapsed - disables the input and triggers a 'reset' button to appear
  const [isFinished, setIsFinished] = useState(false)
  // counts correct characters and total amount of typed characters
  const [correctChars, setCorrectChars] = useState(0)
  const [totalChars, setTotalChars] = useState(0)

  const [currentSentence, setCurrentSentence] = useState(() =>
    getNextSentence(Math.floor(Math.random() * sentences.length), sentences)
  )

  const wordsToType = currentSentence.split(" ")
  const wpm = calculateWPM(currentWord, timeElapsed)
  const accuracy = calculateAccuracy(correctChars, totalChars)
  // typing logic
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsRunning(true)

    const typed = e.target.value
    setSingleWord(typed)

    // increment total char counter
    setTotalChars(prev => prev + 1)

    // check if last typec char match currently tracked - if yes, increment correct counter
    const lastCharIndex = typed.length - 1
    const expectedChar = wordsToType[currentWord][lastCharIndex]

    if (typed[lastCharIndex] === expectedChar) {
      setCorrectChars(prev => prev + 1)
    }
    if (typed === wordsToType[currentWord] + " ") {
      setCurrentWord(prev => prev + 1 >= wordsToType.length ? 0 : prev + 1)
      setSingleWord("")
    }
  }
  const addScore = () => {
    const playerResult = { name: playerNameProp, wpm, accuracy }
    const existingResult = JSON.parse(localStorage.getItem("current-user-score") ?? '[]')
    existingResult.push(playerResult)
    localStorage.setItem("current-user-score", JSON.stringify(existingResult))
  }
  useEffect(() => {
    // end early if the game ends, or hasn't started yet - aka just don't run lol
    if (!isRunning || isFinished) return

    const interval = setInterval(() => {
      setTimeElapsed(prev => {
        if (prev >= 10) {
          // stops the timer when it hits 120 seconds - increments it every second otherwise
          setIsFinished(true)
          setIsRunning(false)
          clearInterval(interval)
          return 10
        }
        return prev + 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [isRunning, isFinished])


  return (
    <main className="flex flex-col gap-2 items-center">
      <Table>
        <TableCaption>You can see your score above.</TableCaption>
        <TableCaption><span className="bg-green-500 px-2 py-1 text-white font-bold">Green</span> - correctly typed</TableCaption>
        <TableCaption><span className="bg-red-500 px-2 py-1 text-white font-bold">Red</span> - incorrectly typed</TableCaption>
        <TableCaption><span className="bg-blue-500 px-2 py-1 text-white font-bold">Blue</span> - next to type</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>username</TableHead>
            <TableHead>Current Words-per-minute</TableHead>
            <TableHead>Current Accuracy</TableHead>
            <TableHead>Time elapsed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{playerNameProp || "John Doe"}</TableCell>
            <TableCell>{wpm}</TableCell>
            <TableCell>{accuracy}%</TableCell>
            <TableCell>{timeElapsed}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <hr />
      <section className="flex flex-col gap-2 items-center">
        <p className="text-center font-medium">
          {wordsToType.map((w, i) => (
            <span key={i}>
              {i === currentWord
                ? w.split("").map((char, j) => (
                  <span
                    key={j}
                    className={j < singleWord.length ? singleWord[j] === char ? "bg-blue-300" : "bg-red-500" : ""}
                  >
                    {char}
                  </span>
                ))
                : i < currentWord
                  ? <span className="bg-green-500">{w}</span> // already typed - greyed out
                  : w // not yet typed - plain
              }
              {" "}
            </span>
          ))}
        </p>
        <input disabled={isFinished} value={singleWord} onChange={handleChange} className="px-4 py-1 border border-solid border-black rounded-md" type="text" placeholder="user types here" />
        <button className={isFinished === true ? "" : "hidden"} onClick={addScore}>Add my score to the high score!</button>
      </section>
    </main>
  )
}

export default GameBoard
