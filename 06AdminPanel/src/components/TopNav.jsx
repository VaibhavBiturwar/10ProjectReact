import {
  Box,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaRegCircleUser, FaBarsStaggered } from "react-icons/fa6";

export default function TopNav({ title, onOpen }) {
  return (
    <Box boxShadow="xl" position={"relative"}>
      <Box
        onClick={onOpen}
        alignSelf={"center"}
        position={"absolute"}
        left={"1rem"}
        top={0}
        bottom={0}
        fontSize={20}
        display={{
          base: "flex",
          lg: "none",
        }}
      >
        <FaBarsStaggered />
      </Box>
      <HStack
        justify="space-between"
        h={16}
        maxW="80%"
        mx="auto"
        position={"relative"}
      >
        <Heading fontSize="2rem" fontWeight="medium">
          {title}
        </Heading>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<FaRegCircleUser />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Security</MenuItem>
            <MenuItem>Help</MenuItem>
            <MenuItem color="red">Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}
