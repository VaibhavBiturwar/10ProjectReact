import {
  Avatar,
  Box,
  Button,
  Card,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { PasswordField } from "../../components/PasswordField";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string, ref } from "yup";
import { useState } from "react";
import { useMutation } from "react-query";
import { signupQuery } from "../../config/userQueries";
import { AvatarSelector, CoverSelector } from "../../components";

const signupValidationSchema = object({
  fullName: string().required("Full name is required"),
  username: string()
    .min(6, "Minimum 6 characters required.")
    .required("Username is required"),
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
  const toast = useToast();
  const [avatar, setAvatar] = useState(null);
  const [cover, setCover] = useState(null);

  const onAvatarChange = (event) => setAvatar(event.target.files[0]);

  const onCoverChange = (event) => setCover(event.target.files[0]);

  const { isLoading, mutate } = useMutation({
    mutationKey: "signup",
    mutationFn: signupQuery,
    onError: (e) => {
      toast({
        description: e,
        title: "An error occurred!",
        status: "error",
        colorScheme: "red",
        position: "top-left",
      });
    },
    onSuccess: (data) => {
      if (data.success) {
        toast({
          description: data.message,
          title: "Success",
          status: "success",
          colorScheme: "green",
          position: "top-left",
        });
        navigate("/signin");
      } else {
        toast({
          description: data.message,
          title: "An error occurred!",
          status: "error",
          colorScheme: "red",
          position: "top-left",
        });
      }
    },
  });

  const onSubmitValues = (values) => {
    if (avatar == null) {
      toast({
        description: "Error!",
        title: "Avatar Image is required!",
        status: "error",
        colorScheme: "brand",
        position: "top-left",
      });
      return;
    }
    if (cover == null) {
      toast({
        description: "Error!",
        title: "Cover Image is required!",
        status: "error",
        colorScheme: "brand",
        position: "top-left",
      });
      return;
    }

    const newFormData = new FormData();
    newFormData.append("fullName", values.fullName);
    newFormData.append("email", values.email);
    newFormData.append("username", values.username);
    newFormData.append("password", values.password);
    newFormData.append("avatar", avatar);
    newFormData.append("coverImage", cover);
    mutate(newFormData);
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

          <Flex
            flexDirection={{
              base: "column",
              lg: "row",
            }}
            gap={6}
            pb={5}
            align={"center"}
          >
            <AvatarSelector avatar={avatar} onAvatarChange={onAvatarChange} />
            <CoverSelector cover={cover} onCoverChange={onCoverChange} />
          </Flex>

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              username: "",
              password: "",
              cPassword: "",
            }}
            validationSchema={signupValidationSchema}
            onSubmit={onSubmitValues}
          >
            {() => (
              <Form>
                <Stack>
                  <Stack spacing={6}>
                    <Field name="fullName">
                      {({ field, meta }) => (
                        <FormControl
                          spacing={0}
                          flex={1}
                          isInvalid={!!(meta.error && meta.touched)}
                        >
                          <FormLabel htmlFor="fullName">Full Name</FormLabel>
                          <Input
                            {...field}
                            name="fullName"
                            type="text"
                            placeholder="Full Name"
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

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
                    <Field name="username">
                      {({ field, meta }) => (
                        <FormControl
                          spacing={0}
                          flex={1}
                          isInvalid={!!(meta.error && meta.touched)}
                        >
                          <FormLabel htmlFor="username">Username</FormLabel>
                          <Input
                            {...field}
                            name="username"
                            type="text"
                            placeholder="Username"
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
                    <Button
                      isLoading={isLoading}
                      colorScheme="brand"
                      type="submit"
                    >
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
