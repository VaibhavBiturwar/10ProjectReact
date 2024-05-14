import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import DiceRoll from "./DiceRoll";

const MAX = 7;
const MIN = 1;
export default function GamePage() {
  const [activeSelection, setActiveSelection] = useState(undefined);
  const [dice, setDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(" ");

  const onRollDice = () => {
    if (!activeSelection) {
      setError("Please select guess before rolling the dice.");
      return;
    }
    setDice(Math.floor(Math.random() * (MAX - MIN) + MIN));
    calculateScore();
  };

  const calculateScore = () => {
    activeSelection == dice
      ? setScore((prev) => prev + dice)
      : setScore((prev) => prev - dice);

    setActiveSelection(undefined);
  };

  const onGuessSelected = (val) => {
    setActiveSelection(val);
    setError(" ");
  };

  const onResetGame = () => {
    setActiveSelection(undefined);
    setScore(0);
  };

  return (
    <GamePageCtr>
      <TopCtr>
        <TotalScore score={score} />
        <NumberSelector
          active={activeSelection}
          setActive={(val) => onGuessSelected(val)}
          onRollDice={onRollDice}
          error={error}
          setError={setError}
        />
      </TopCtr>
      <BottomCtr>
        <DiceRoll
          active={dice}
          setActive={setDice}
          onRollDice={onRollDice}
          onResetGame={onResetGame}
        />
      </BottomCtr>
    </GamePageCtr>
  );
}

const GamePageCtr = styled.div``;

const TopCtr = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  max-width: 1440px;
  margin: 0 auto;
`;

const BottomCtr = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
`;
