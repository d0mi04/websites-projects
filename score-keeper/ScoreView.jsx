import React from "react";

const ScoreView = (props) => {
  return (
    <div>
      <h2>Team {props.teamName}: {props.score}</h2>
    </div>
  )
};

export default ScoreView;