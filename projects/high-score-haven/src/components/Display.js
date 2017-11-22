import React from "react";

export default function Display(props) {
  return (
    <div>
      <h1>Score: {props.score.highScore}</h1>
      <h2>Name: {props.score.name}</h2>
      <h3>Game: {props.score.game}</h3>
      <small>Date: {props.score.date}</small>
      <h4>{props.score.isChecked}</h4>
      <p>{props.score.trashTalk}</p>
    </div>
  )
}
