import { Box, Spinner, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const Loader = () => {
  return (
    <Box>
      <Stack alignItems={"center"} gap={5}>
        <Spinner size={"xl"} color="brand.600" speed="1s" thickness={4} />
        <Text>Loading</Text>
      </Stack>
    </Box>
  );
};
