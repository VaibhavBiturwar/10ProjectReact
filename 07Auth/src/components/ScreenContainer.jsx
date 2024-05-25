import React from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
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
  return (
    <Box bg={"white"} boxShadow={"md"}>
      <Flex
        justifyContent={"space-between"}
        px={20}
        py={5}
        alignItems={"center"}
      >
        <Text textStyle={"title"}>SocialClub</Text>
        <HStack>
          {PAGES.map(({ path, title, id }) => (
            <Link key={id} to={path}>
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
          <ProfileIcon />
        </HStack>
      </Flex>
    </Box>
  );
};

const ProfileIcon = () => {
  const { userData } = useSelector((s) => s.auth);
  const dispatch = useDispatch();
  const onLogoutUser = () => {
    dispatch(setLogoutUser());
  };

  return (
    <Menu>
      <MenuButton>
        <Image
          src={userData.avatarUrl}
          height={10}
          width={10}
          borderRadius={"full"}
          objectFit={"cover"}
        />
      </MenuButton>
      <MenuList>
        <MenuItem as={Link} to={"/profileHome"}>
          Profile
        </MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Help</MenuItem>
        <MenuItem color={"red.500"} onClick={onLogoutUser}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
