import React from "react";
import { ScreenContainer, ScreenTitle } from "../../components";
import {
  Box,
  Button,
  Card,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { SideBar } from "./components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { Field, Formik } from "formik";
import { Form } from "react-router-dom";
import { object, string } from "yup";
import { useMutation } from "react-query";
import { editProfileQuery } from "../../config/userQueries";
import { setUserData } from "../../store/slice/authSlice";

const editValidationSchema = object({
  fullName: string().required("Full name is required"),

  email: string()
    .email("Valid email is required")
    .required("Email is required"),
  username: string()
    .min(6, "Minimum 6 characters required")
    .required("Username is required"),
});

export const ProfileEdit = () => {
  const { userData } = useSelector((s) => s.auth);
  const dispatch = useDispatch();
  const toast = useToast();

  const { mutate, isLoading } = useMutation({
    mutationKey: "editProfile",
    mutationFn: editProfileQuery,
    onError: (e) => {
      toast({
        description: e,
        title: "An error occurred!",
        status: "error",
        colorScheme: "brand",
        position: "top-left",
      });
    },
    onSuccess: (data) => {
      if (data.success) {
        dispatch(setUserData(data.data));
        toast({
          description: data.message,
          title: "Success!",
          status: "success",
          colorScheme: "brand",
          position: "top-left",
        });
      } else {
        toast({
          description: data.message,
          title: "An error occurred!",
          status: "error",
          colorScheme: "brand",
          position: "top-left",
        });
      }
    },
  });

  return (
    <ScreenContainer>
      <ScreenTitle title={"Profile"} />
      <Flex h={"100%"} flexDirection={"row"}>
        <SideBar />
        <Box width={"100%"} p={10}>
          <Card
            boxShadow={"xl"}
            mx={"auto"}
            maxW={"fit-content"}
            minW={"40%"}
            flexGrow={0}
            px={20}
            py={10}
          >
            <Text textStyle={"title"} textAlign={"center"} mb={2}>
              Edit Profile
            </Text>
            <Formik
              initialValues={{
                fullName: userData.fullName,
                email: userData.email,
                username: userData.username,
              }}
              validationSchema={editValidationSchema}
              onSubmit={(values) => {
                console.log("values");
                mutate(values);
              }}
            >
              {() => (
                <Form>
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

                    <Button
                      isLoading={isLoading}
                      colorScheme="brand"
                      type="reset"
                    >
                      Update Details
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Card>
        </Box>
      </Flex>
    </ScreenContainer>
  );
};
