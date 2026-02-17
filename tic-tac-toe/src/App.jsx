import { useState } from "react";
import React from "react";
import Player from "./components/Player";
function App() {
  return (
    <main>
      <div id="game-container">
        <span id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </span>
      </div>
    </main>
  );
}

export default App;
