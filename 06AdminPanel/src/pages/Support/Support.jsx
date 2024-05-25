import { Flex, Stack, Text } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { IoMdMail } from "react-icons/io";
import SupportForm from "./SupportForm";
import InfoCard from "../Dashboard/InfoCard";

export default function Support() {
  return (
    <DashboardLayout title={"Support"}>
      <Stack py={8} maxH={"calc(100vh - 100px)"}>
        <Flex
          gap={20}
          flexDirection={{
            base: "column",
            xl: "row",
          }}
        >
          <Stack>
            <IoMdMail fontSize={22} color="#5F00D9" />
            <Text fontSize={32} fontWeight={"medium"} color={"blackText"}>
              Contact Us
            </Text>
            <Text fontSize={12} fontWeight={"normal"} color={"grayText"}>
              Have a question or just want to know more? Feel free to reach out
              to us.
            </Text>
          </Stack>
          <SupportForm />
        </Flex>

        <Flex
          gap={{ base: 0, xl: 20 }}
          flexDirection={{
            base: "column",
            xl: "row",
          }}
        >
          <InfoCard />
          <InfoCard inverted />
        </Flex>
      </Stack>
    </DashboardLayout>
  );
}
