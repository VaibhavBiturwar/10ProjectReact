import React from "react";
import { Box, Flex, Text, HStack, Button, Tag } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setLogoutUser } from "../store/slice/authSlice";
import { Link, useLocation } from "react-router-dom";

export const ScreenContainer = ({ children }) => {
  return (
    <Box height={"100vh"}>
      <TopHeader />
      {children}
    </Box>
  );
};

const PAGES = [
  {
    id: 0,
    path: "/",
    title: "Dashboard",
  },
  {
    id: 1,
    path: "/videosHome",
    title: "Videos",
  },
  {
    id: 2,
    path: "/tweetsHome",
    title: "Tweets",
  },
];

const TopHeader = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const onLogoutUser = () => {
    dispatch(setLogoutUser());
  };
  return (
    <Box bg={"white"} boxShadow={"md"}>
      <Flex
        justifyContent={"space-between"}
        px={20}
        py={5}
        alignItems={"center"}
      >
        <Text textStyle={"title"}>Dashboard</Text>
        <HStack>
          {PAGES.map(({ path, title }) => (
            <Link to={path}>
              <Button
                size={"sm"}
                colorScheme="purple"
                isActive={pathname == path}
                variant={"ghost"}
              >
                {title}
              </Button>
            </Link>
          ))}

          <Button
            size={"sm"}
            onClick={onLogoutUser}
            variant={"outline"}
            colorScheme="red"
          >
            Logout
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};
