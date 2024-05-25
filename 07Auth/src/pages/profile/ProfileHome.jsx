import React from "react";
import { ScreenContainer, ScreenTitle } from "../../components";
import {
  Box,
  Card,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SideBar } from "./components/SideBar";
import { useSelector } from "react-redux";

export const ProfileHome = () => {
  const { userData } = useSelector((s) => s.auth);

  return (
    <ScreenContainer>
      <ScreenTitle title={"Profile"} />
      <Flex h={"100%"} flexDirection={"row"}>
        <SideBar />
        <Box width={"100%"} p={10}>
          <Card boxShadow={"xl"} mx={"auto"} maxW={"50%"} flexGrow={0}>
            <Stack position={"relative"} alignItems={"center"} mb={50}>
              <Image
                src={userData.coverImage}
                aspectRatio={3 / 1}
                objectFit={"cover"}
              />
              <Image
                position={"absolute"}
                bottom={"-1em"}
                boxShadow={"dark-lg"}
                src={userData.avatarUrl}
                maxWidth={"20%"}
                aspectRatio={1}
                objectFit={"cover"}
                borderRadius={"full"}
              />
            </Stack>
            <SimpleGrid
              mx={"auto"}
              p={4}
              alignItems={"baseline"}
              columns={2}
              spacing={1}
            >
              <Text align={"end"}>Full Name :</Text>
              <Text textStyle={"subTitle"}>{userData.fullName}</Text>
              <Text align={"end"}>Email :</Text>
              <Text textStyle={"subTitle"}>{userData.email}</Text>
              <Text align={"end"}>Username :</Text>
              <Text textStyle={"subTitle"}>{userData.username}</Text>
            </SimpleGrid>
          </Card>
        </Box>
      </Flex>
    </ScreenContainer>
  );
};
