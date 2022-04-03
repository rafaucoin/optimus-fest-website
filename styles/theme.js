import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    base: "Play",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    secondary: "#EE1A77",
    dark: "#0D0D0D",
    accent: "#AAE5B0",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        color: "white",
      },
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      variants: {
        register: {
          fontFamily: "Play",
          bg: "secondary",
          boxShadow: "none",
          borderRadius: "md",
          px: 8,
          py: 4,
        },
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "red.300" : "red.500",
        }),
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "Play",
        color: "white",
      },
    },
    Input: {
      baseStyle: {
        fontFamily: "Play",
        _placeholder: { fontFamily: "Play", color: "gray.500" },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "Play",

        color: "white",
      },
      variants: {
        countdown: {
          fontFamily: "VCR",
          color: "#B5E8BAB2",
          textTransform: "uppercase",
          fontSize: 30,
          fontWeight: "normal",
        },
        squid: {
          fontFamily: "GAME",
        },
        title: {
          fontFamily: "Play",
          color: "#AAE5B0",
          fontweight: "bold",
        },
      },
    },
  },
});

export default theme;
