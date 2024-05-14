import React, { useState } from "react";
import styled from "styled-components";
import ActionButton, { OutlinedBtn } from "./ActionButton";
import Rules from "./Rules";

export default function DiceRoll({ active, onRollDice, onResetGame }) {
  const [showRules, setShowRules] = useState(false);

  return (
    <DiceRollCtr>
      <div>
        <img
          src={`/dice/dice_${active}.png`}
          alt="diceImage"
          onClick={onRollDice}
        />
        <p>Click on Dice to roll</p>
      </div>
      <OutlinedBtn onClick={onResetGame}>Reset Score</OutlinedBtn>
      <ActionButton
        label={`${showRules ? "Hide" : "Show"}  rules`}
        onClick={() => setShowRules((prev) => !prev)}
      />

      {showRules && <Rules />}
    </DiceRollCtr>
  );
}

const DiceRollCtr = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
  gap: 10px;
  p {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }
`;
