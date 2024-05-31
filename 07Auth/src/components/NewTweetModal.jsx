import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useMutation } from "react-query";
import { object, string } from "yup";
import { createTweetQuery, updateTweetQuery } from "../config/tweetQueries.js";
import { MdEdit } from "react-icons/md";

const tweetValidationSchema = object({
  content: string()
    .min(10, "Minimum 10 characters required")
    .required("Content is required"),
});

export const NewTweetModal = ({ refetch, isEdit = false, content, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const { isLoading: isLoadingCreate, mutate: mutateCreate } = useMutation({
    mutationKey: "createTweet",
    mutationFn: createTweetQuery,
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
      onClose();
      if (data.success) {
        refetch();
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
  const { isLoading: isLoadingEdit, mutate: mutateEdit } = useMutation({
    mutationKey: "createTweet",
    mutationFn: updateTweetQuery,
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
      onClose();
      if (data.success) {
        refetch();
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
    <>
      {isEdit ? (
        <Button
          size={"sm"}
          colorScheme="brand"
          leftIcon={<MdEdit />}
          onClick={onOpen}
        >
          Edit
        </Button>
      ) : (
        <Button variant={"outline"} colorScheme="brand" onClick={onOpen}>
          Create New
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isEdit ? "Edit Tweet" : "Post New Tweet"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Formik
              initialValues={{ content: isEdit ? content : "" }}
              validationSchema={tweetValidationSchema}
              onSubmit={(val) =>
                isEdit
                  ? mutateEdit({
                      content: val.content,
                      id: id,
                    })
                  : mutateCreate(val)
              }
            >
              {() => (
                <Form>
                  <Field name="content">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="content">Content</FormLabel>
                        <Textarea
                          size={"md"}
                          minH={"12rem"}
                          {...field}
                          name="content"
                          placeholder="What do you want to write..."
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <FormControl>
                    <Button
                      isLoading={isLoadingEdit || isLoadingCreate}
                      colorScheme="brand"
                      type="submit"
                      ml={1}
                      mt={2}
                    >
                      {isEdit ? "Update Tweet" : "Save"}
                    </Button>
                  </FormControl>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
