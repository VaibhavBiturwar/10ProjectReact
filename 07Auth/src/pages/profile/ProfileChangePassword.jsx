import React from "react";
import { PasswordField, ScreenContainer, ScreenTitle } from "../../components";
import {
  Box,
  Button,
  Card,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { SideBar } from "./components/SideBar";
import { Field, Formik, Form } from "formik";
import { object, ref, string } from "yup";
import { useMutation } from "react-query";
import { changePasswordQuery } from "../../config/userQueries";

const passwordValidationSchema = object({
  oldPassword: string()
    .min(6, "Minimum 6 characters required")
    .required("Old password is required"),
  newPassword: string()
    .min(6, "Minimum 6 characters required")
    .notOneOf([ref("oldPassword")], "New password must be different")
    .required("Old password is required"),
  cPassword: string()
    .min(6, "Minimum 6 characters required")
    .oneOf([ref("newPassword"), null], "Confirm password must match")
    .required("Confirm password is required"),
});

export const ProfileChangePassword = () => {
  const toast = useToast();

  const { mutate, isLoading } = useMutation({
    mutationKey: "changePassword",
    mutationFn: changePasswordQuery,
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
              Change Password
            </Text>

            <Formik
              initialValues={{
                oldPassword: "",
                newPassword: "",
                cPassword: "",
              }}
              validationSchema={passwordValidationSchema}
              onSubmit={(values, actions) => {
                delete values.cPassword;
                mutate(values);
                actions.resetForm();
              }}
            >
              {() => (
                <Form>
                  <Stack spacing={6}>
                    <Field name="oldPassword">
                      {({ field, meta }) => (
                        <FormControl
                          spacing={0}
                          flex={1}
                          isInvalid={!!(meta.error && meta.touched)}
                        >
                          <FormLabel htmlFor="oldPassword">
                            Old Password
                          </FormLabel>
                          <PasswordField
                            {...field}
                            name="oldPassword"
                            type="text"
                            placeholder="**********"
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="newPassword">
                      {({ field, meta }) => (
                        <FormControl
                          spacing={0}
                          flex={1}
                          isInvalid={!!(meta.error && meta.touched)}
                        >
                          <FormLabel htmlFor="newPassword">
                            New Password
                          </FormLabel>
                          <PasswordField
                            {...field}
                            name="newPassword"
                            type="text"
                            placeholder="**********"
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
                            type="text"
                            placeholder="**********"
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Button
                      isLoading={isLoading}
                      colorScheme="brand"
                      type="submit"
                    >
                      Change Password
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
