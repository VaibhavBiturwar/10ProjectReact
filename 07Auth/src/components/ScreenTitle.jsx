import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";

export const ScreenTitle = ({ title }) => {
  return (
    <Box p={1} m={10} borderRadius={"full"} bg={"brand.50"}>
      <Center>
        <Text textStyle={"subTitle"}>{title}</Text>
      </Center>
    </Box>
  );
};
