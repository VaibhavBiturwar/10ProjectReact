import React from "react";
import styled from "styled-components";

export default function ActionButton({ label, ...props }) {
  return <BtnContainer {...props}>{label}</BtnContainer>;
}

const BtnContainer = styled.button`
  background-color: black;
  color: white;
  width: 220px;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid black;
  transition: 0.4s background ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in-out;
  }
`;

export const OutlinedBtn = styled(BtnContainer)`
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: 0.4s background ease-in-out;
  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s background ease-in-out;
  }
`;
