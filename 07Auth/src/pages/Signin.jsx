import {
  Button,
  Card,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PasswordField } from "../components/PasswordField";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { Link } from "react-router-dom";

const signupValidationSchema = object({
  email: string()
    .email("Valid email is required")
    .required("Email is required"),
  password: string()
    .min(6, "Minimum 6 characters required")
    .required("Password is required"),
});

export default function SignIn() {
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
          <Text
            textStyle={"title"}
            fontSize={{
              base: 24,
              lg: 32,
            }}
          >
            Welcome to Crypto App
          </Text>
          <Text textStyle={"mutedText"} mb={10}>
            Enter your credentials to access the account.
          </Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={signupValidationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
              <Form>
                <Stack>
                  <Stack spacing={6}>
                    <Field name="email">
                      {({ field, meta }) => (
                        <FormControl
                          spacing={0}
                          flex={1}
                          isInvalid={!!(meta.error && meta.touched)}
                        >
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input
                            {...field}
                            name="email"
                            type="email"
                            placeholder="Email"
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="password">
                      {({ field, meta }) => (
                        <FormControl
                          spacing={0}
                          flex={1}
                          isInvalid={!!(meta.error && meta.touched)}
                        >
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <PasswordField
                            {...field}
                            name={"password"}
                            type="password"
                            placeholder="*******"
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Checkbox colorScheme="brand">
                        <Text as="span" fontSize={12}>
                          Remember me
                        </Text>
                      </Checkbox>

                      <Link to="/forgotPassword">
                        <Text fontSize={12} color={"brand.600"}>
                          Forgot Password?
                        </Text>
                      </Link>
                    </Flex>

                    <Button colorScheme="brand" type="submit">
                      Login
                    </Button>
                    <Link to="/signup">
                      <Button variant="outline" colorScheme="brand" w="full">
                        Create New Account
                      </Button>
                    </Link>
                  </Stack>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
}
