import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  HStack,
  Stack,
  Textarea,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { useMemo, useState } from "react";
export default function SupportForm() {
  const [messageDisabled, setMessageDisabled] = useState(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useMemo(() => {
    if (fName && lName && email && message) {
      setMessageDisabled(false);
    } else {
      setMessageDisabled(true);
    }
  }, [fName, lName, email, message]);

  const onSubmitForm = () => {
    console.log({
      fName,
      lName,
      email,
      message,
    });
  };

  return (
    <Box bg={"white"} borderRadius={12} p={6}>
      <Text fontSize={14} fontWeight={"medium"} color={"blackText"} mb={19}>
        You will receive response within 24 hours of time of submit.
      </Text>

      <FormControl>
        <Stack gap={10}>
          <HStack>
            <Stack gap={0}>
              <FormLabel m={0} htmlFor="fName">
                First Name
              </FormLabel>
              <Input
                type="text"
                placeholder="John"
                id="fName"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </Stack>
            <Stack gap={0}>
              <FormLabel m={0} htmlFor="lName">
                Last Name
              </FormLabel>
              <Input
                type="text"
                placeholder="Doe"
                id="lName"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </Stack>
          </HStack>
          <Stack gap={0}>
            <FormLabel m={0} htmlFor="email">
              Email Address
            </FormLabel>
            <Input
              type="email"
              placeholder="johnDoe@example.com"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Stack>
          <Stack gap={0}>
            <FormLabel m={0} htmlFor="message">
              Your Message
            </FormLabel>
            <Textarea
              placeholder="Type your message here..."
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Stack>
        </Stack>
      </FormControl>
      <Flex mt={6}>
        <Checkbox colorScheme="brand" fontSize={12} fontWeight={"regular"}>
          I agree with{" "}
          <Text as="span" color={"purple"}>
            Terms & Conditions.
          </Text>
        </Checkbox>
      </Flex>

      <Stack mt={6} spacing={3}>
        <Button
          colorScheme="gray"
          isDisabled={messageDisabled}
          onClick={onSubmitForm}
        >
          Send a Message
        </Button>
        <Button colorScheme="gray">Book a meeting</Button>
      </Stack>
    </Box>
  );
}
