import { Button, Card, Center, Container, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementBy,
} from "../../store/slice/authSlice.js";

export const Dashboard = () => {
  const [inputValue, setInputValue] = useState(0);
  const { value } = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  return (
    <Container>
      <Center>
        <Card>
          <Text>Dashboard</Text>
          <Text> {value} </Text>
          <Button onClick={() => dispatch(increment())}>INC</Button>
          <Button onClick={() => dispatch(decrement())}>DEC</Button>
          <Input
            type="number"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={() => dispatch(incrementBy(Number(inputValue)))}>
            Add
          </Button>
        </Card>
      </Center>
    </Container>
  );
};
