import {
  Button,
  Card,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import { object, string } from "yup";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const emailSchema = object({
  email: string().email("Invalid email").required("Email is required"),
});

export default function ForgotPassword() {
  const onSubmitEmail = (values) => {
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
          {/* back icon */}
          <Link to={"/"}>
            <IoArrowBackSharp fontSize={30} style={{ marginBottom: 10 }} />
          </Link>
          <Text textStyle={"subTitle"}>Forgot Password</Text>
          <Text mb={8} textStyle={"mutedText"}>
            Enter your email address for which account you want to reset your
            password.
          </Text>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={emailSchema}
            onSubmit={onSubmitEmail}
          >
            {() => (
              <Form>
                <Field name="email">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel fontSize={12}>Email</FormLabel>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter email"
                        fontSize={14}
                      />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button mt={6} colorScheme="brand" type="submit">
                  Reset Password
                </Button>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
}
