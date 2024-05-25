import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme(
  {
    colors: {
      purple: "#5F00D9",
      lightPurple: "#812df0",
      //
      blackText: "#171717",
      grayText: "#535D66",
      grayText2: "#797E82",
      grayBg: "#F3F3F7",
      brand: {
        50: "green",
        100: "#d8c3f5",
        400: "#812df0",
        500: "#5F00D9",
        600: "#5c04cf",
        900: "#46059b",
        //
        green: "#059669",
        yellow: "#F5A50B",
        red: "#DC2626",
        //
      },
    },

    fonts: {
      body: "Ubuntu",
      heading: "Ubuntu",
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);
