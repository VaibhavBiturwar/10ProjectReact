import { Button, Card, Center, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IoMdMailUnread } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function VerifySuccess() {
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
              Successfully Registration
            </Text>
            <Text
              fontSize={14}
              fontWeight={"medium"}
              color={"black.200"}
              textAlign={"center"}
              maxW={"80%"}
            >
              Hurray! You have successfully created your account. Enter the app
              to explore all it’s features.
            </Text>
            <Link to={"/"} style={{ width: "100%" }}>
              <Button mt={5} colorScheme="brand" w={"full"}>
                Enter the App
              </Button>
            </Link>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
}
