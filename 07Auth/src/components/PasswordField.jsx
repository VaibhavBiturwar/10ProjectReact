import { Box, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export const PasswordField = ({ ...props }) => {
  const [visible, setVisible] = useState(false);

  const onToggle = () => setVisible((prev) => !prev);

  return (
    <Box position={"relative"}>
      <Input {...props} type={visible ? "text" : "password"} pr={9} />
      <Box
        position={"absolute"}
        top={0}
        right={0}
        bottom={0}
        display={"flex"}
        justifyItems={"center"}
        alignItems={"center"}
        onClick={onToggle}
        zIndex={2}
        cursor={"pointer"}
      >
        {visible ? (
          <FaEye style={IconStyle} />
        ) : (
          <FaEyeSlash style={IconStyle} />
        )}
      </Box>
    </Box>
  );
};

const IconStyle = {
  fontSize: 22,
  margin: 4,
  marginRight: 8,
};
