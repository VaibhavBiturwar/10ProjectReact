import { Box, Button, FormLabel, Image, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { updateCoverImageQuery } from "../config/userQueries";
import { useMutation } from "react-query";
import { updateCoverImage } from "../store/slice/authSlice";

const MOCK_COVER =
  "https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png";

export const CoverSelector = ({ cover, onCoverChange, isEdit }) => {
  const coverRef = React.useRef(null);
  const dispatch = useDispatch();
  const toast = useToast();

  const { isLoading, mutate } = useMutation({
    mutationKey: "coverImageUpdate",
    mutationFn: updateCoverImageQuery,
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
        !dispatch(updateCoverImage(data));
        toast({
          description: data.message,
          title: "Success",
          status: "success",
          colorScheme: "green",
          position: "top-left",
        });
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

  const onUpdateCoverImageClicked = () => {
    const newFormData = new FormData();
    newFormData.append("coverImage", cover);
    mutate(newFormData);
  };

  return (
    <Box
      flex={1}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"column"}
      gap={1}
    >
      <input
        type="file"
        accept="image/*"
        onChange={onCoverChange}
        ref={coverRef}
        style={{
          position: "absolute",
          display: "none",
        }}
      />
      <Image
        onClick={() => coverRef?.current?.click()}
        src={
          cover
            ? typeof cover === "string"
              ? cover
              : URL.createObjectURL(cover)
            : MOCK_COVER
        }
        objectFit={"fill"}
        borderWidth={2}
        borderColor={"black.200"}
        aspectRatio={2 / 1}
        height={40}
      />
      <FormLabel>Cover Image</FormLabel>
      <Button
        isLoading={isLoading}
        colorScheme="brand"
        onClick={onUpdateCoverImageClicked}
        isDisabled={isEdit && typeof cover == "string"}
      >
        Update
      </Button>
    </Box>
  );
};
