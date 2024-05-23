import { Card, Center, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function ResetSent() {
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
              Successfully Sent
            </Text>
            <Text
              fontSize={14}
              fontWeight={"medium"}
              color={"black.200"}
              textAlign={"center"}
              maxW={"80%"}
            >
              We have sent instructions on how to reset your password to
              <Text as="span" color={"black.900"} fontWeight={"bold"}>
                {" "}
                jenny.wilson@gmail.com
              </Text>
              . Please follow the instructions from the email.
            </Text>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
}
