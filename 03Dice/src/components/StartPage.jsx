import styled from "styled-components";
import ActionButton from "./ActionButton";

export default function StartPage({ onToggle }) {
  return (
    <StartPageContainer>
      <div className="imgCtr">
        <img src="/dices.png" alt="dicesImage" />
      </div>
      <div className="dataCtr">
        <h1>Dice Game</h1>
        <ActionButton label="Play Now" onClick={onToggle} />
      </div>
    </StartPageContainer>
  );
}

const StartPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  .imgCtr {
    display: flex;
    align-items: center;
  }
  .dataCtr {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    h1 {
      font-weight: 700;
      font-size: 96px;
      margin: 10px;
      padding: 0px;
      line-height: 96px;
    }
  }
`;
