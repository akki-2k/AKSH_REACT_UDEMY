import React from "react";
import { useState } from "react";
export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing(!isEditing);
  }
  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = `Edit`;
  if (isEditing) {
    editablePlayerName = (
      <input
        required
        type="text"
        value={playerName}
        onChange={handleChange}
      ></input>
    );
    btnCaption = `Save`;
  }
  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{btnCaption}</button>
      </li>
    </>
  );
}
