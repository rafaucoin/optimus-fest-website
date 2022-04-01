import { Box, Flex, VStack, Image, Heading } from "@chakra-ui/react";
// import Image from "next/image";
import Hero from "../components/landing/Hero";
import Img from "../components/landing/Img";
import Second from "../components/landing/Second";
import NavBar from "../components/shared/NavBar";
export default function Home() {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      height="600vh"
      pr={{ base: 5, md: 18, lg: 20 }}
    >
      <NavBar />
      <Hero />
      <Img />
      <Second />
    </Flex>
  );
}
