import React from "react";
import { Loader, ScreenContainer, ScreenTitle } from "../../components";
import {
  Box,
  Card,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SideBar } from "./components/SideBar";

export const ProfileMyTweets = () => {
  return (
    <ScreenContainer>
      <ScreenTitle title={"Profile"} />
      <Flex h={"100%"} flexDirection={"row"}>
        <SideBar />
        <Box width={"100%"} p={10}></Box>
      </Flex>
    </ScreenContainer>
  );
};
