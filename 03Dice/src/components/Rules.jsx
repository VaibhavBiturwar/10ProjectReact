import React from "react";
import styled from "styled-components";

export default function Rules() {
  return (
    <RulesCtr>
      <p className="heading">How to play dice game</p>
      <p>Select any number</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice
      </p>
      <p>if you get wrong guess then 2 point will be deducted </p>
    </RulesCtr>
  );
}

const RulesCtr = styled.div`
  background-color: #fbf1f1;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  margin-top: 34px;

  p {
    margin: 0px;
    font-size: 14px;
    font-weight: 400;
  }

  .heading {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;
