import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from "../../chakra/CustomCard";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";

export default function PricingCard() {
  return (
    <CustomCard>
      <HStack justify={"space-between"} align={"flex-start"}>
        <Stack gap={1}>
          <Text color="grayText" fontSize="14px" fontWeight={"medium"}>
            Current Price
          </Text>
          <HStack>
            <Text fontSize="24px" fontWeight={"medium"} color={"#171717"}>
              ₹26,670.25
            </Text>
            <HStack>
              <FaArrowTrendUp color="green" />
              <Text fontSize="14px" fontWeight={"medium"} color={"green"}>
                0.04%
              </Text>
            </HStack>
          </HStack>
        </Stack>
        <HStack columnGap={2}>
          <Button
            leftIcon={<IoAddCircle fontSize={"20px"} />}
            bg={"purple"}
            color={"white"}
            fontSize={"14px"}
            fontWeight={"medium"}
            borderRadius={"10px"}
            _hover={{
              bg: "lightPurple",
            }}
          >
            Buy
          </Button>
          <Button
            leftIcon={<IoRemoveCircle fontSize={"20px"} />}
            bg={"purple"}
            color={"white"}
            fontSize={"14px"}
            fontWeight={"medium"}
            borderRadius={"10px"}
            _hover={{
              bg: "lightPurple",
            }}
          >
            Sell
          </Button>
        </HStack>
      </HStack>
      <Stack spacing={5}>
        <TimeLine />
        <Image src="/graph.svg" w={"100%"} />
        <Readings />
      </Stack>
    </CustomCard>
  );
}

const TimeLine = () => {
  return (
    <HStack
      bg={"grayBg"}
      borderRadius={4}
      p={1}
      justify={"flex-end"}
      ml={"auto"}
    >
      <Text
        color={"grayText2"}
        fontSize={12}
        fontWeight={"medium"}
        px={1}
        py={0.5}
      >
        1H
      </Text>
      <Text
        color={"grayText2"}
        fontSize={12}
        fontWeight={"medium"}
        bg={"white"}
        px={1}
        py={0.5}
      >
        1D
      </Text>
      <Text
        color={"grayText2"}
        fontSize={12}
        fontWeight={"medium"}
        px={1}
        py={0.5}
      >
        1W
      </Text>
      <Text
        color={"grayText2"}
        fontSize={12}
        fontWeight={"medium"}
        px={1}
        py={0.5}
      >
        1M
      </Text>
    </HStack>
  );
};

const Readings = () => {
  return (
    <HStack justify={"space-between"} fontSize={12} color={"grayText2"}>
      <Text>7:15 PM</Text>
      <Text>12:55 AM</Text>
      <Text>06:35 AM</Text>
      <Text>12:15 PM</Text>
      <Text>05:55 PM</Text>
    </HStack>
  );
};
