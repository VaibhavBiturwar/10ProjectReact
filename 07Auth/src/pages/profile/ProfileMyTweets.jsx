import React from "react";
import {
  Loader,
  ScreenContainer,
  ScreenTitle,
  TweetCard,
} from "../../components";
import { Box, Flex } from "@chakra-ui/react";
import { SideBar } from "./components/SideBar";
import { useQuery } from "react-query";
import { myTweetQuery } from "../../config/userQueries";

export const ProfileMyTweets = () => {
  const { isLoading, data, refetch } = useQuery({
    queryKey: "myTweets",
    queryFn: myTweetQuery,
  });

  return (
    <ScreenContainer>
      <ScreenTitle title={"Profile"} />
      <Flex h={"100%"} flexDirection={"row"}>
        <SideBar />
        <Box width={"100%"} p={10}>
          {isLoading ? (
            <Loader />
          ) : (
            <Box m={10} pb={100}>
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
                    isOwner={true}
                  />
                ))}
              </Flex>
            </Box>
          )}
        </Box>
      </Flex>
    </ScreenContainer>
  );
};
