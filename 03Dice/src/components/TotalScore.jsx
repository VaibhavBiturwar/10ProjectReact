import React from "react";
import styled from "styled-components";

export default function TotalScore({ score }) {
  return (
    <ScoreCtr>
      <p className="scoreValue">{score}</p>
      <p className="scoreLabel">Total Score</p>
    </ScoreCtr>
  );
}

const ScoreCtr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .scoreValue {
    font-size: 100px;
    font-weight: 600;
    margin: 0px;
    padding: 0px;
  }
  .scoreLabel {
    font-size: 20px;
    margin: 0px;
  }
`;
