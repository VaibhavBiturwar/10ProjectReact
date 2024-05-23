import { Button, Card, Container, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { setLogoutUser } from "../../store/slice/authSlice";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const onLogoutUser = () => {
    dispatch(setLogoutUser());
  };

  return (
    <Container
      h={"100vh"}
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Card p={10}>
        <Text>Dashboard</Text>
        <Button onClick={onLogoutUser} colorScheme="brand">
          Logout
        </Button>
      </Card>
    </Container>
  );
};
