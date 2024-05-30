import { Box, FormLabel, Image } from "@chakra-ui/react";
import React from "react";

const MOCK_COVER =
  "https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png";

export const CoverSelector = ({ cover, onCoverChange }) => {
  const coverRef = React.useRef(null);

  return (
    <Box
      flex={1}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      onClick={() => coverRef?.current?.click()}
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
        src={cover ? URL.createObjectURL(cover) : MOCK_COVER}
        objectFit={"fill"}
        borderWidth={2}
        borderColor={"black.200"}
        aspectRatio={2 / 1}
        height={40}
      />
      <FormLabel>Cover Image</FormLabel>
    </Box>
  );
};
