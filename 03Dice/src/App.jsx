import styled from "styled-components";
import { useState } from "react";
import "./App.css";
import StartPage from "./components/StartPage";
import GamePage from "./components/GamePage";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);

  const onGameStart = () => {
    setIsGameOn((prev) => !prev);
  };

  return (
    <MainContainer>
      {isGameOn ? <GamePage /> : <StartPage onToggle={onGameStart} />}
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div``;
