'use client'

import { useState } from "react";
import GameBoard from "./components/GameBoard";
import MenuScreen from "./components/MenuScreen";

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false)
  const [playerName, setPlayerName] = useState("")
  return (
    <>
      {gameStarted ? <GameBoard /> : <MenuScreen />}
    </>
  );
}
