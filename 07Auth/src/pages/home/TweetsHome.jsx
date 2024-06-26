import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import {
  Loader,
  NewTweetModal,
  ScreenContainer,
  ScreenTitle,
  TweetCard,
} from "../../components";
import { useQuery } from "react-query";
import { tweetListQuery } from "../../config/tweetQueries";

export const TweetsHome = () => {
  const { isLoading, data, refetch } = useQuery({
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
          <Flex justifyContent={"flex-end"} maxW={"95%"} mb={5}>
            <NewTweetModal refetch={refetch} />
          </Flex>
          <Flex gap={10} justifyContent={"center"} flexWrap={"wrap"}>
            {data?.data?.map(({ _id, owner, content, likes, isLiked }) => (
              <TweetCard
                key={_id}
                owner={owner}
                content={content}
                likes={likes}
                _id={_id}
                refetch={refetch}
                isLiked={isLiked}
              />
            ))}
          </Flex>
        </Box>
      )}
    </ScreenContainer>
  );
};
