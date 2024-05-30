import { Avatar, Box, FormLabel } from "@chakra-ui/react";
import React from "react";
const MOCK_AVATAR =
  "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg";

export const AvatarSelector = ({ avatar, onAvatarChange }) => {
  const avatarRef = React.useRef(null);
  return (
    <Box
      flex={1}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      onClick={() => avatarRef?.current?.click()}
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
        name="avatar"
        src={avatar ? URL.createObjectURL(avatar) : MOCK_AVATAR}
        objectFit={"fill"}
        borderWidth={2}
        borderColor={"black.500"}
        width={40}
        height={40}
      />
      <FormLabel>Avatar</FormLabel>
    </Box>
  );
};
