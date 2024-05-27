import React from "react";
import {
  Box,
  Card,
  HStack,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useMutation } from "react-query";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { likeTweetQuery } from "../config/userQueries.js";

export const TweetCard = ({ owner, content, likes, _id, refetch, isLiked }) => {
  const { isLoading, mutate } = useMutation({
    mutationKey: "toggleTweetLike",
    mutationFn: likeTweetQuery,
    onSuccess: () => refetch(),
  });

  const onToggleLike = (_id) => mutate(_id);
  return (
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
      <HStack pt={2}>
        <Box cursor={"pointer"}>
          {isLoading ? (
            <Spinner size={"sm"} />
          ) : isLiked ? (
            <IoIosHeart
              onClick={() => onToggleLike(_id)}
              color={"red"}
              fontSize={18}
            />
          ) : (
            <IoIosHeartEmpty
              onClick={() => onToggleLike(_id)}
              color={"black"}
              fontSize={18}
            />
          )}
        </Box>
        <Text>{likes}</Text>
      </HStack>
    </Card>
  );
};

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
