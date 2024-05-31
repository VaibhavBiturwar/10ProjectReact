import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const OPTIONS = [
  {
    id: 0,
    path: "/profileHome",
    name: "Details",
  },
  {
    id: 1,
    path: "/profileHome/profileEdit",
    name: "Edit Details",
  },
  {
    id: 2,
    path: "/profileHome/profileMyTweets",
    name: "My Tweets",
  },
  {
    id: 3,
    path: "",
    name: "My Videos",
  },
  {
    id: 4,
    path: "",
    name: "My Playlists",
  },
  {
    id: 5,
    path: "/profileHome/profileChangePassword",
    name: "Change Password",
  },
  {
    id: 6,
    path: "",
    name: "Delete Account",
  },
];

export const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <Box as="aside" w={"300px"} boxShadow={"xl"} py={20} px={5}>
      <Stack gap={10}>
        {OPTIONS.map(({ name, path, id }) => (
          <SideBarBtn key={id} to={path} active={pathname == path}>
            {name}
          </SideBarBtn>
        ))}
      </Stack>
    </Box>
  );
};

const SideBarBtn = ({ to, active, children, ...rest }) => (
  <Link to={to}>
    <Button
      bg={active ? "brand.50" : "white"}
      _hover={{
        bg: "brand.50",
      }}
      {...rest}
    >
      {children}
    </Button>
  </Link>
);
