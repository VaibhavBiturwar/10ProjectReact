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
import { PasswordField } from "../../components/PasswordField";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string, ref } from "yup";

const signupValidationSchema = object({
  fName: string().required("First name is required"),
  lName: string().required("Last name is required"),
  email: string()
    .email("Valid email is required")
    .required("Email is required"),
  password: string()
    .min(6, "Minimum 6 characters required")
    .required("Password is required"),
  cPassword: string()
    .oneOf([ref("password"), null], "Confirm password must match")
    .required("Confirm password is required"),
});

export default function SignUp() {
  const navigate = useNavigate();

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
            Create a free account by filling data below.
          </Text>
          <Formik
            initialValues={{
              fName: "",
              lName: "",
              email: "",
              password: "",
              cPassword: "",
            }}
            validationSchema={signupValidationSchema}
            onSubmit={(values) => {
              console.log(values);
              navigate("/verifyEmail", {
                state: { email: values.email },
              });
            }}
          >
            {() => (
              <Form>
                <Stack>
                  <Stack spacing={6}>
                    <Flex
                      flexDirection={{
                        base: "column",
                        lg: "row",
                      }}
                      gap={6}
                    >
                      <Field name="fName">
                        {({ field, meta }) => (
                          <FormControl
                            spacing={0}
                            flex={1}
                            isInvalid={!!(meta.error && meta.touched)}
                          >
                            <FormLabel htmlFor="fName">First Name</FormLabel>
                            <Input
                              {...field}
                              name="fName"
                              type="text"
                              placeholder="First Name"
                            />
                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="lName">
                        {({ field, meta }) => (
                          <FormControl
                            spacing={0}
                            flex={1}
                            isInvalid={!!(meta.error && meta.touched)}
                          >
                            <FormLabel htmlFor="lName">Last Name</FormLabel>
                            <Input
                              {...field}
                              name="lName"
                              type="text"
                              placeholder="Last Name"
                            />
                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Flex>

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

                    <Field name="cPassword">
                      {({ field, meta }) => (
                        <FormControl
                          spacing={0}
                          flex={1}
                          isInvalid={!!(meta.error && meta.touched)}
                        >
                          <FormLabel htmlFor="cPassword">
                            Confirm Password
                          </FormLabel>
                          <PasswordField
                            {...field}
                            name="cPassword"
                            type="password"
                            placeholder="*******"
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Checkbox colorScheme="brand">
                      I agree with{" "}
                      <Text as="span" color="brand.700">
                        Terms & Conditions.
                      </Text>
                    </Checkbox>
                    <Button colorScheme="brand" type="submit">
                      Create Account
                    </Button>

                    <Text
                      fontSize={12}
                      fontWeight={"medium"}
                      color={"black.200"}
                      align={"center"}
                    >
                      Already have an account?
                      <Link to={"/"}>
                        <Text as="span" color="brand.700">
                          Log In
                        </Text>
                      </Link>
                    </Text>
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
