import {
  VStack,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineMicrophone } from "react-icons/hi";
import { BsStars } from "react-icons/bs";

function Third() {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      height="100vh"
      width="100%"
      // alignItems="center"
      justifyContent="space-between"
      pl={{ base: 5, md: 10 }}
      pr={{ base: 5, md: 10 }}
    >
      <Flex
        height="100%"
        width={{ base: "100%", md: "40%" }}
        flexDirection="column"
        justifyContent="flex-start"
        gap="5%"
        mt={10}
        pt={{ base: "10%", md: 0 }}
      >
        <Heading letterSpacing={"wide"} fontSize={{ base: "3xl", md: "5xl" }}>
          A worthy experience, want to know why?{" "}
        </Heading>
        <Text letterSpacing={1} fontSize={{ base: "md", md: "xl" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
          pulvinar orci ultricies in hac non mi bibendum.
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        width={{ base: "100%", md: "50%" }}
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        <HStack width={{ base: "100%", md: "80%" }}>
          <IoPeopleOutline size={190} color="#EE1A77" />
          <VStack>
            <Heading
              alignSelf="flex-start"
              letterSpacing={"wide"}
              fontSize={{ base: "2xl", md: "4xl" }}
            >
              Networking
            </Heading>
            <Text letterSpacing={1} fontSize={{ base: "md", md: "lg" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              tortor commodo amet.
            </Text>
          </VStack>
        </HStack>
        <HStack width={{ base: "100%", md: "80%" }} justifyContent="flex-end">
          <HiOutlineMicrophone size={180} color="#EE1A77" />

          <VStack>
            <Heading
              alignSelf="flex-start"
              letterSpacing={"wide"}
              fontSize={{ base: "2xl", md: "4xl" }}
            >
              Great Speakers
            </Heading>
            <Text letterSpacing={1} fontSize={{ base: "md", md: "xl" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              tortor commodo amet.
            </Text>
          </VStack>
        </HStack>
        <HStack width={{ base: "100%", md: "80%" }}>
          <BsStars size={190} color="#EE1A77" />
          <VStack gap={2}>
            <Heading
              alignSelf="flex-start"
              letterSpacing={"wide"}
              fontSize={{ base: "2xl", md: "4xl" }}
            >
              Have Fun
            </Heading>
            <Text letterSpacing={1} fontSize={{ base: "md", md: "xl" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              tortor commodo amet.
            </Text>
          </VStack>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default Third;
