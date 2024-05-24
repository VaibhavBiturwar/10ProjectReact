import React from "react";
import { Box, Card, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Loader, ScreenContainer, ScreenTitle } from "../../components";
import { useQuery } from "react-query";
import { tweetListQuery } from "../../config/userQueries";

export const TweetsHome = () => {
  const { isLoading, data } = useQuery({
    queryKey: "allTweets",
    queryFn: tweetListQuery,
  });

  return (
    <ScreenContainer>
      <ScreenTitle title={"Tweets"} />
      {isLoading ? (
        <Loader />
      ) : (
        <Box m={10} pb={100}>
          <Flex gap={10} justifyContent={"center"} flexWrap={"wrap"}>
            {data?.data?.map(({ _id, owner, content }) => (
              <TweetCard key={_id} owner={owner} content={content} />
            ))}
          </Flex>
        </Box>
      )}
    </ScreenContainer>
  );
};

const TweetCard = ({ owner, content }) => (
  <Card w={"calc(100vh/3)"} boxShadow={"lg"} px={4} py={5} rounded={"md"}>
    <OwnerDetails owner={owner} />
    <Text
      textStyle={"body"}
      bg={"brand.50"}
      borderRadius={"md"}
      p={2}
      minH={"180"}
    >
      {content}
    </Text>
  </Card>
);

const OwnerDetails = ({ owner }) => (
  <HStack alignItems={"flex-end"} gap={3} mb={2}>
    <Image
      src={owner.avatar}
      height={10}
      width={10}
      borderRadius={"full"}
      objectFit={"cover"}
    />
    <Stack gap={0}>
      <Text fontSize={14}>{owner.fullName}</Text>
      <Text fontSize={12} color={"black.200"} fontWeight={"600"}>
        {owner.username}
      </Text>
    </Stack>
  </HStack>
);
