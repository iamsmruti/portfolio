import React from 'react'
import GameRenderer from "./components/GameRenderer"
import { config as mainConfig } from "./phaser/main"

const App = () => {
  return (
    <div>
      <GameRenderer config={mainConfig} />
    </div>
  )
}

export default App