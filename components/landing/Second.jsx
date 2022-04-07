import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
function Second() {
  return (
    <Flex
      id="about"
      flexDirection={{ base: "column", lg: "row" }}
      height="100vh"
      width="100%"
      mt={{ base: "50vw", lg: "40vh" }}
      alignItems="center"
      justifyContent={{ base: "", lg: "space-between" }}
      pl={{ base: 5, lg: 10 }}
      pr={{ base: 5, lg: 10 }}
      position="relative"
    >
      <Box right="0" top="-50px" position={"absolute"} zIndex={-10}>
        <svg
          width="600"
          height="317"
          viewBox="0 0 600 317"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.04">
            <circle
              cx="71.2294"
              cy="158.287"
              r="66.2294"
              transform="rotate(-90 71.2294 158.287)"
              stroke="white"
              stroke-width="10"
            />
            <circle
              cx="575.771"
              cy="158.287"
              r="66.2294"
              transform="rotate(-90 575.771 158.287)"
              stroke="white"
              stroke-width="10"
            />
            <path
              d="M275.96 286.708L53.5291 158.287L275.96 29.8667V286.708Z"
              stroke="white"
              stroke-width="10"
            />
            <rect
              x="319.596"
              y="289.81"
              width="259.089"
              height="259.089"
              transform="rotate(-90 319.596 289.81)"
              stroke="white"
              stroke-width="10"
            />
          </g>
        </svg>
      </Box>

      <Flex
        height={{ base: "80%", lg: "100%" }}
        width={{ base: "100%", lg: "43%" }}
        flexDirection="column"
        justifyContent="center"
        gap="5%"
      >
        <Heading letterSpacing={"wide"} fontSize={{ base: "2xl", lg: "5xl" }}>
          Optimus Fest, more than just a competition
        </Heading>
        <Text letterSpacing={1} fontSize={{ base: "lg", lg: "xl" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
          pulvinar orci ultricies in hac non mi bibendum duis. Luctus vitae
          ipsum nulla tortor tempus gravida. Amet potenti mi eleifend pulvinar
          aliquam. Morbi purus lectus in sed faucibus tempus nibh vestibulum
          sed. Leo amet sollicitudin semper purus quis posuere ornare.
        </Text>
        <Button
          width={{ base: "100%", lg: "50%" }}
          px={10}
          py={6}
          rightIcon={<BsArrowRight />}
          variant="register"
        >
          Join the challenge
        </Button>
      </Flex>
      <Flex
        position="relative"
        width={{ base: "100%", lg: "50%" }}
        height={{ base: "60%", lg: "70%" }}
        justifyContent="flex-end"
      >
        <Image borderRadius="lg" width="100%" height="100%" src="/second.png" />
        <Box
          display={{ base: "none", sm: "flex" }}
          position="absolute"
          right="80%"
          top="90%"
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="46" stroke="white" stroke-width="8" />
          </svg>
        </Box>
        <Box
          display={{ base: "none", sm: "flex" }}
          position="absolute"
          right="30%"
          top="95%"
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="3"
              width="58"
              height="58"
              stroke="white"
              stroke-width="6"
            />
          </svg>
        </Box>
        <Box
          display={{ base: "none", sm: "flex" }}
          position="absolute"
          right="5%"
          top="95%"
        >
          <svg
            width="42"
            height="36"
            viewBox="0 0 42 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.67949 34L21 4L38.3205 34H3.67949Z"
              fill="#EE1A77"
              stroke="white"
              stroke-width="4"
            />
          </svg>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Second;
