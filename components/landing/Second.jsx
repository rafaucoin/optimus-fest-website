import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
function Second() {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      height="100vh"
      width="100%"
      mt={{ base: "35vh", md: "40vh" }}
      alignItems="center"
      justifyContent="space-between"
      pl={{ base: 5, md: 18, lg: 20 }}
    >
      <Flex
        height="100%"
        width="43%"
        flexDirection="column"
        justifyContent="center"
        gap="5%"
      >
        <Heading letterSpacing={"wide"} fontSize={{ base: "2xl", md: "5xl" }}>
          Optimus Fest, more than just a competition
        </Heading>
        <Text letterSpacing={1} fontSize={{ base: "md", md: "xl" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
          pulvinar orci ultricies in hac non mi bibendum duis. Luctus vitae
          ipsum nulla tortor tempus gravida. Amet potenti mi eleifend pulvinar
          aliquam. Morbi purus lectus in sed faucibus tempus nibh vestibulum
          sed. Leo amet sollicitudin semper purus quis posuere ornare.
        </Text>
        <Button
          width="50%"
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
        width="50%"
        height="70%"
        justifyContent="flex-end"
      >
        <Image borderRadius="lg" width="100%" height="100%" src="/second.png" />
        <Box position="absolute" right="80%" top="90%">
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
        <Box position="absolute" right="30%" top="95%">
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
        <Box position="absolute" right="5%" top="95%">
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
