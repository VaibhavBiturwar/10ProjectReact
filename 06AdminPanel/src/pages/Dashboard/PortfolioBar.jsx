import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import {
  MdKeyboardDoubleArrowUp,
  MdOutlineKeyboardDoubleArrowDown,
  MdInfo,
} from "react-icons/md";

export default function PortfolioBar() {
  return (
    <HStack
      bg={"white"}
      justify={"space-between"}
      borderRadius={"0.5rem"}
      p={6}
      my={6}
      whiteSpace={"nowrap"}
      flexWrap={{
        base: "wrap",
        xl: "nowrap",
      }}
      flexDirection={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack gap={1}>
        <HStack alignItems={"center"}>
          <Text color="grayText" fontSize="14px" fontWeight={"medium"}>
            Total Portfolio Value
          </Text>
          <MdInfo color="grayText" />
        </HStack>
        <Text fontSize="24px" fontWeight={"medium"} color={"#171717"}>
          ₹ 112,312.24
        </Text>
      </Stack>
      <Stack gap={1}>
        <Text color="grayText" fontSize="14px" fontWeight={"medium"}>
          Wallet Balances
        </Text>
        <HStack columnGap={8} alignItems={"center"}>
          <HStack>
            <Text fontSize="22px" fontWeight={"medium"} color={"blackText"}>
              22.39401000
            </Text>
            <Text
              fontSize="12px"
              fontWeight={"medium"}
              color={"#797E82"}
              bg={"#F3F3F7"}
              borderRadius={"20px"}
              py={"4px"}
              px={"8px"}
            >
              BTC
            </Text>
          </HStack>
          <HStack>
            <Text fontSize="22px" fontWeight={"medium"} color={"blackText"}>
              ₹ 1,300.00
            </Text>
            <Text
              fontSize="12px"
              fontWeight={"medium"}
              color={"#797E82"}
              bg={"#F3F3F7"}
              borderRadius={"20px"}
              py={"4px"}
              px={"8px"}
            >
              INR
            </Text>
          </HStack>
        </HStack>
      </Stack>
      <HStack columnGap={2}>
        <Button
          leftIcon={<MdOutlineKeyboardDoubleArrowDown fontSize={"20px"} />}
          bg={"purple"}
          color={"white"}
          fontSize={"14px"}
          fontWeight={"medium"}
          borderRadius={"10px"}
          _hover={{
            bg: "lightPurple",
          }}
        >
          Deposit
        </Button>
        <Button
          leftIcon={<MdKeyboardDoubleArrowUp fontSize={"20px"} />}
          bg={"purple"}
          color={"white"}
          fontSize={"14px"}
          fontWeight={"medium"}
          borderRadius={"10px"}
          _hover={{
            bg: "lightPurple",
          }}
        >
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
}
