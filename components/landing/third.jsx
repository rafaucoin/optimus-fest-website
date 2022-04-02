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
      alignItems="center"
      justifyContent="space-between"
      pl={{ base: 5, md: 18, lg: 20 }}
    >
      <Flex
        height="80%"
        width="40%"
        flexDirection="column"
        justifyContent="flex-start"
        gap="5%"
      >
        <Heading letterSpacing={"wide"} fontSize={{ base: "2xl", md: "5xl" }}>
          A worthy experience, want to know why?{" "}
        </Heading>
        <Text letterSpacing={1} fontSize={{ base: "md", md: "xl" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
          pulvinar orci ultricies in hac non mi bibendum.
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        width="60%"
        height="90%"
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        <HStack width="80%">
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
        <HStack width="80%" justifyContent="flex-end">
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
        <HStack width="80%">
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
