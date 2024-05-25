import { chakra } from "@chakra-ui/react";

export const CustomCard = chakra("div", {
  baseStyle: {
    bg: "white",
    borderRadius: "0.5rem",
    p: "6",
    w: "100%",
    mx: "auto",
    my: "6",
    alignItems: "flex-start",
    whiteSpace: "nowrap",
  },
});
