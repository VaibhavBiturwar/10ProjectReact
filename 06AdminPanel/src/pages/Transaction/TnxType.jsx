import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tag,
  HStack,
  Input,
  Box,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import TnxTable from "./TnxTable";
import { LuSearch } from "react-icons/lu";

const TYPES = [
  {
    id: 0,
    name: "All",
    count: 124,
  },
  {
    id: 1,
    name: "Deposit",
    count: 234,
  },
  {
    id: 2,
    name: "Withdraw",
    count: 43,
  },
  {
    id: 3,
    name: "Trade",
    count: 62,
  },
];

export default function TnxType() {
  return (
    <Tabs colorScheme="brand">
      <Flex justify={"space-between"} py={2} px={3}>
        <TabList flexGrow={1}>
          {TYPES.map((type) => (
            <Tab key={type.id}>
              {type.name}{" "}
              <Tag
                bg={"grayBg"}
                ml={2}
                fontSize={12}
                px={2}
                py={0}
                borderRadius={"50%"}
                color={"GrayText"}
                fontWeight={"semiBold"}
              >
                {type.count}
              </Tag>
            </Tab>
          ))}
        </TabList>
        <HStack
          borderWidth={2}
          borderRadius={4}
          spacing={0}
          borderColor={"#E28F0"}
        >
          <Box
            as={IconButton}
            icon={<LuSearch />}
            bg={"transparent"}
            color={"blackText"}
            _hover={{
              bg: "transparent",
            }}
            p={0}
          />
          <Input
            borderWidth={0}
            _focusVisible={{
              borderColor: "transparent",
              outline: "none",
            }}
            px={0}
          />
        </HStack>
      </Flex>
      <TabPanels>
        {TYPES.map((type) => (
          <TabPanel key={type.id}>
            <h2>{type.name}</h2>
            <TnxTable />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
