import React from "react";
import { Loader, ScreenContainer, ScreenTitle } from "../../components";
import {
  AspectRatio,
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { videoListQuery } from "../../config/userQueries";

export const VideosHome = () => {
  const { isLoading, data } = useQuery({
    queryKey: "allVideos",
    queryFn: videoListQuery,
  });

  return (
    <ScreenContainer>
      <ScreenTitle title={"Videos"} />
      <Box p={10}>
        {isLoading && <Loader />}

        <Flex flexDirection={"row"} gap={10} flexWrap={"wrap"}>
          {data != null &&
            data.data.map((video, idx) => {
              return (
                <Box
                  w={"300px"}
                  minH={"400px"}
                  boxShadow={"lg"}
                  key={video._id}
                  rounded={"lg"}
                >
                  <AspectRatio ratio={1}>
                    <iframe
                      title={video.title}
                      src={video.videoFile}
                      allowFullScreen
                    />
                  </AspectRatio>
                  <Stack px={4} py={2}>
                    <HStack>
                      <Image
                        src={video.thumbnail}
                        height={10}
                        width={10}
                        borderRadius={"full"}
                      />
                      <Text>{video.title}</Text>
                    </HStack>
                    <Text textStyle={"mutedText"}>{video.description}</Text>
                    <Text textStyle={"label"}>{video.views + " Views"}</Text>
                  </Stack>
                </Box>
              );
            })}
        </Flex>
      </Box>
    </ScreenContainer>
  );
};
