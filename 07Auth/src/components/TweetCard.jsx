import React from "react";
import {
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Image,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useMutation } from "react-query";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { DeleteMyTweetQuery, likeTweetQuery } from "../config/userQueries.js";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export const TweetCard = ({
  owner,
  content,
  likes,
  _id,
  refetch,
  isLiked,
  isOwner = false,
}) => {
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
      {isOwner && <TweetActions id={_id} refetch={refetch} />}
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

const TweetActions = ({ id, refetch }) => {
  const toast = useToast();

  const { isLoading, mutate } = useMutation({
    mutationKey: "deleteTweet",
    mutationFn: DeleteMyTweetQuery,
    onError: (e) => {
      toast({
        description: e,
        title: "An error occurred!",
        status: "error",
        colorScheme: "brand",
        position: "top-left",
      });
    },
    onSuccess: (data) => {
      if (data.success) {
        toast({
          description: data.message,
          title: "Success!",
          status: "success",
          colorScheme: "brand",
          position: "top-left",
        });
      } else {
        toast({
          description: data.message,
          title: "An error occurred!",
          status: "error",
          colorScheme: "brand",
          position: "top-left",
        });
      }

      refetch();
    },
  });

  const onDeleteTweet = () => {
    mutate(id);
  };

  return (
    <Flex gap={5} pt={3}>
      <Button size={"sm"} colorScheme="brand" leftIcon={<MdEdit />}>
        Edit
      </Button>
      <Button
        size={"sm"}
        colorScheme="red"
        leftIcon={<FaTrash />}
        onClick={onDeleteTweet}
        isLoading={isLoading}
      >
        Delete
      </Button>
    </Flex>
  );
};
