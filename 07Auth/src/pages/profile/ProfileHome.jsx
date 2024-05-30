import React from "react";
import { ScreenContainer, ScreenTitle } from "../../components";
import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SideBar } from "./components/SideBar";
import { useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiText } from "react-icons/ci";

export const ProfileHome = () => {
  const { userData } = useSelector((s) => s.auth);

  return (
    <ScreenContainer>
      <ScreenTitle title={"Profile"} />
      <Flex h={"100%"} flexDirection={"row"}>
        <SideBar />
        <Box width={"100%"} p={10}>
          <Card boxShadow={"xl"} mx={"auto"} maxW={"50%"} flexGrow={0}>
            <Stack position={"relative"} alignItems={"center"}>
              <Image
                src={userData.coverImage}
                aspectRatio={10 / 2.5}
                width={"100%"}
                objectFit={"cover"}
              />
              <Image
                position={"absolute"}
                bottom={{
                  base: "-1rem",
                  md: "-2rem",
                  lg: "-3rem",
                  xl: "-4rem",
                }}
                boxShadow={"dark-lg"}
                src={userData.avatar}
                maxWidth={"20%"}
                aspectRatio={1}
                objectFit={"cover"}
                borderRadius={"full"}
              />
            </Stack>

            <CardBody mx={"auto"} pt={50} mt={10}>
              <HStack>
                <FaRegUser fontSize={20} />
                <Text textStyle={"subTitle"}>{userData.fullName}</Text>
              </HStack>
              <HStack>
                <MdOutlineAlternateEmail fontSize={20} />
                <Text textStyle={"subTitle"}>{userData.email}</Text>
              </HStack>
              <HStack>
                <CiText fontSize={20} />
                <Text textStyle={"subTitle"}>{userData.username}</Text>
              </HStack>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </ScreenContainer>
  );
};
