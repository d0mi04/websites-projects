import React, { useState } from "react";
import ScoreView from "./ScoreView";

const ScoreKeeper = () => {
  const [teamOneScore, setTeamOneScore] = useState(0);
  const [teamTwoScore, setTeamTwoScore] = useState(0);
  return (
    <div>
      <h1>Score Keeper</h1>
      <ScoreView teamName="Team One" score={teamOneScore}/>
      <button onClick={() => setTeamOneScore(teamOneScore + 1)}>+1 Team One</button>
      <ScoreView teamName="Team Two" score={teamTwoScore}/>
      <button onClick={() => setTeamTwoScore(teamTwoScore + 1)}>+1 Team Two</button>
    </div>
  )
};

export default ScoreKeeper;