import {
  Button,
  Card,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import { object, ref, string } from "yup";
import { PasswordField } from "../components/PasswordField";

const emailSchema = object({
  password: string()
    .min(6, "Minimum 6 characters required")
    .required("Password is required"),
  cPassword: string()
    .oneOf([ref("password"), null], "Password must match.")
    .required("Confirm password is required"),
});

export default function ResetPassword() {
  const onSubmitPassword = (values) => {
    console.log({ values });
  };

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
          <Text textStyle={"subTitle"}>Reset Password</Text>
          <Text mb={8} textStyle={"mutedText"}>
            Enter your new password
          </Text>
          <Formik
            initialValues={{
              password: "",
              cPassword: "",
            }}
            validationSchema={emailSchema}
            onSubmit={onSubmitPassword}
          >
            {() => (
              <Form>
                <Stack gap={5}>
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel fontSize={12}>Password</FormLabel>
                        <PasswordField
                          {...field}
                          fontSize={14}
                          placeholder={"*******"}
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="cPassword">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel fontSize={12}>Confirm Password</FormLabel>
                        <PasswordField
                          {...field}
                          fontSize={14}
                          placeholder={"*******"}
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button mt={6} colorScheme="brand" type="submit">
                    Reset Password
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
}
