import { Button, Card, Center, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IoMdMailUnread } from "react-icons/io";
import { useLocation } from "react-router-dom";

export default function VerifyEmail() {
  const location = useLocation();
  const { email } = location.state;

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
            <IoMdMailUnread fontSize={40} color="#5F00D9" />
            <Text fontSize={20} fontWeight={"medium"}>
              Email Verification
            </Text>
            <Text
              fontSize={14}
              fontWeight={"medium"}
              color={"black.200"}
              textAlign={"center"}
              maxW={"80%"}
            >
              We have sent you an email verification to{" "}
              <Text as="span" color={"black.900"} fontWeight={"bold"}>
                {email}
              </Text>
              {". "}If you didn’t receive it, click the button below.
            </Text>

            <Button mt={5} colorScheme="brand" w={"full"}>
              Re-Send Email
            </Button>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
}
