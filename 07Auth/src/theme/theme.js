import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#D4C0ED",
        100: "#BB9AE5",
        200: "#A576E1",
        300: "#9352E4",
        400: "#853AE4",
        500: "#711CDE",
        600: "#5F00D9",
        700: "#5500C2",
        800: "#4900A7",
        900: "#3D0188",
      },
      black: {
        200: "#797E82",
        500: "#171717",
        600: "#171717",
        700: "#171717",
        800: "#171717",
        900: "#171717",
      },
    },

    textStyles: {
      title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "black.900",
      },
      subTitle: {
        fontSize: 28,
        fontWeight: "medium",
        color: "black.900",
      },
      mutedText: {
        fontSize: 14,
        fontWeight: "regular",
        color: "black.200",
      },
      label: {
        fontSize: 12,
        fontWeight: "regular",
        color: "black.500",
      },
    },
  },
  withDefaultColorScheme({ colors: "brand" })
);
