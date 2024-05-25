import { Button, Flex, Stack } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { IoMdDownload } from "react-icons/io";
import TnxType from "./TnxType";

export default function Transaction() {
  return (
    <DashboardLayout title={"Transaction"}>
      <Stack py={8} maxH={"calc(100vh - 100px)"}>
        <Flex justify={"flex-end"}>
          <Button leftIcon={<IoMdDownload fontSize={20} />}>Export CSV</Button>
        </Flex>

        <Stack bg={"white"}>
          <TnxType />
        </Stack>
      </Stack>
    </DashboardLayout>
  );
}
