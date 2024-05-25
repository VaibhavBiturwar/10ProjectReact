import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from "../../chakra/CustomCard";
import { SiBitcoinsv } from "react-icons/si";

export default function Transactions() {
  return (
    <CustomCard>
      <Text fontSize={14} fontWeight={"medium"} color={"grayText"}>
        Recent Transactions
      </Text>

      <Stack>
        {TnxList.map(({ id, title, time, amt }, index) => {
          return (
            <HStack
              key={id}
              justify={"space-between"}
              borderBottomWidth={index != TnxList.length - 1 ? 1 : 0}
              borderBottomColor="#e6e3e3"
            >
              <HStack>
                <Box p={2} bg={"#e2dfdf"} borderRadius={"100%"} m={2}>
                  <SiBitcoinsv fontSize={30} />
                </Box>
                <Stack justify={"flex-start"} spacing={0}>
                  <Text fontSize={16} color={"blackText"}>
                    {title}
                  </Text>
                  <Text fontSize={14} color={"grayText"}>
                    {time}
                  </Text>
                </Stack>
              </HStack>
              <Text fontSize={16} color={"blackText"} fontWeight={"medium"}>
                {amt}
              </Text>
            </HStack>
          );
        })}
      </Stack>

      <Button
        bg={"#EEEEF4"}
        fontSize={14}
        color={"blackText"}
        alignSelf={"stretch"}
        mt={5}
        w={"100%"}
      >
        View All
      </Button>
    </CustomCard>
  );
}

const TnxList = [
  {
    id: 0,
    title: "INR Deposit",
    time: "2022-06-09 7:06 PM",
    amt: "+ ₹81,123.10",
  },
  {
    id: 1,
    title: "BTC Sell",
    time: "2022-05-27 12:32 PM",
    amt: "- 12.48513391 BTC",
  },
  {
    id: 2,
    title: "INR Deposit",
    time: "2022-06-09 7:06 PM",
    amt: "+ ₹81,123.10",
  },
];
