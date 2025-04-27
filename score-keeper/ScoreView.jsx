import React from "react";
import "./ScoreView.css";

const ScoreView = (props) => {
  return (
    <div className={`score-view-wrapper-leading-${props.leading ? "true" : "false"}`}>
      <h2>Team {props.teamName}: {props.score}</h2>
    </div>
  )
};

export default ScoreView;