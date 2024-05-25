import { Stack, Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../chakra/CustomCard";

export default function InfoCard({ inverted }) {
  return (
    <CustomCard
      bgImg={inverted ? "/boxed.svg" : "/dotted.svg"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bg={inverted ? "purple" : "white"}
      maxW={"50%"}
    >
      <Stack>
        <Tag
          alignSelf={"flex-start"}
          bg={inverted ? "white" : "purple"}
          color={!inverted ? "white" : "purple"}
        >
          {inverted ? "Contact" : "Loans"}
        </Tag>
        <Text
          fontSize={18}
          fontWeight={"medium"}
          color={inverted ? "white" : "blackText"}
        >
          {inverted ? TEXT2 : TEXT1}
        </Text>
      </Stack>
    </CustomCard>
  );
}

const TEXT1 =
  "Learn more about Loans – Keep your Bitcoin, access it’s value without selling it,";
const TEXT2 =
  "Learn more about our real estate, mortgage, and  corporate account services";
