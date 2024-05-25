import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";

export const SideBar = () => {
  return (
    <Box as="aside" w={"300px"} boxShadow={"xl"} py={20} px={5}>
      <Stack gap={10}>
        <SideBarBtn>Details</SideBarBtn>
        <SideBarBtn>Edit Details</SideBarBtn>
        <SideBarBtn>My Tweets</SideBarBtn>
        <SideBarBtn>My Videos</SideBarBtn>
        <SideBarBtn>My Playlists</SideBarBtn>
        <SideBarBtn>Delete Account</SideBarBtn>
      </Stack>
    </Box>
  );
};

const SideBarBtn = ({ children, ...rest }) => (
  <Button
    bg={"white"}
    _hover={{
      bg: "brand.50",
    }}
    {...rest}
  >
    {children}
  </Button>
);
