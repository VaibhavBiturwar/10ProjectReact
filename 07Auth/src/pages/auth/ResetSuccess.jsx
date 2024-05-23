import { Button, Card, Center, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ResetSuccess() {
  return (
    <Container h="100vh" minW="300px">
      <Center h="100%">
        <Card
          w="100%"
          p="6"
          boxShadow={{
            base: "sm",
            md: "lg",
          }}
        >
          <Stack alignItems={"center"}>
            <FaCheckCircle fontSize={40} color="green" />
            <Text fontSize={20} fontWeight={"medium"}>
              Password Reset Done
            </Text>
            <Text
              fontSize={14}
              fontWeight={"medium"}
              color={"black.200"}
              textAlign={"center"}
              maxW={"80%"}
            >
              Now you can access you account.
            </Text>
            <Link to="/" style={{ width: "100%" }}>
              <Button colorScheme="brand" w="full">
                Sign In
              </Button>
            </Link>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
}
