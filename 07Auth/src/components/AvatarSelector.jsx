import { Avatar, Box, Button, FormLabel, useToast } from "@chakra-ui/react";
import React from "react";
import { useMutation } from "react-query";
import { updateAvatarQuery } from "../config/userQueries";
import { useDispatch } from "react-redux";
import { updateAvatar } from "../store/slice/authSlice";
const MOCK_AVATAR =
  "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg";

export const AvatarSelector = ({ avatar, onAvatarChange, isEdit = false }) => {
  const avatarRef = React.useRef(null);
  const toast = useToast();
  const dispatch = useDispatch();

  const { isLoading, mutate } = useMutation({
    mutationKey: "avatarUpdate",
    mutationFn: updateAvatarQuery,
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
        dispatch(updateAvatar(data));
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

  const onUpdateAvatarClicked = () => {
    const newFormData = new FormData();
    newFormData.append("avatar", avatar);
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
        onChange={onAvatarChange}
        ref={avatarRef}
        style={{
          position: "absolute",
          display: "none",
        }}
      />
      <Avatar
        onClick={() => avatarRef?.current?.click()}
        name="avatar"
        src={
          avatar
            ? typeof avatar === "string"
              ? avatar
              : URL.createObjectURL(avatar)
            : MOCK_AVATAR
        }
        objectFit={"fill"}
        borderWidth={2}
        borderColor={"black.500"}
        width={40}
        height={40}
      />
      <FormLabel>Avatar</FormLabel>
      <Button
        isLoading={isLoading}
        colorScheme="brand"
        onClick={onUpdateAvatarClicked}
        isDisabled={isEdit && typeof avatar == "string"}
      >
        Update
      </Button>
    </Box>
  );
};
