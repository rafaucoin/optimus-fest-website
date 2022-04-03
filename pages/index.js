import {
  Box,
  Flex,
  VStack,
  Image,
  Heading,
  HStack,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import Fifth from "../components/landing/Fifth";
import Fourth from "../components/landing/fourth";
import Hero from "../components/landing/Hero";
import Img from "../components/landing/Img";
import Second from "../components/landing/Second";
import Third from "../components/landing/third";
import NavBar from "../components/shared/NavBar";
export default function Home() {
  return (
    <Flex width="100%" flexDirection="column" height="600vh">
      <NavBar />
      <Hero />
      <Img />
      <Second />
      <Third />
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        height="100vh"
        width="100%"
        alignItems="center"
        pl={{ base: 5, md: 18, lg: 20 }}
        pr={{ base: 5, md: 18, lg: 20 }}
        bgColor="white"
        gap={{ base: 10, md: 10 }}
        pt={{ base: "20%", md: 0 }}
      >
        <Flex
          height={{ base: "45%", md: "50%" }}
          border="13px solid"
          borderColor="#222222"
          bgColor="#111111"
          justifyContent="center"
          width={{ base: "100%", md: "50%" }}
          alignItems="flex-end"
          position="relative"
          boxShadow="dark-lg"
        >
          <VStack height="95%" width={{ base: "100%", md: "70%" }}>
            <Heading color="#B5E8BAB2">* 일 수 *</Heading>
            <Heading variant="countdown">Number of days</Heading>
            <Heading
              pl={7}
              fontFamily="VCR"
              color="#B5E8BAB2"
              fontSize={{ base: "150px", md: "180px" }}
              letterSpacing={9}
              display="flex"
            >
              064
              <Heading mt="35%" color="#B5E8BAB2">
                일
              </Heading>
            </Heading>
          </VStack>
        </Flex>
        <Flex
          height="50%"
          width={{ base: "100%", md: "50%" }}
          justifyContent={{ base: "", md: "space-around" }}
          gap={{ base: 5, md: 0 }}
          flexDirection="column"
        >
          <Heading
            color="black"
            fontWeight="extrabold"
            letterSpacing={""}
            fontSize={{ base: "3xl", md: "5xl" }}
            LineHeight="80px"
          >
            Tick Tock – Clock is ticking, don’t miss this!
          </Heading>
          <Text
            fontWeight="semi-bold"
            color="black"
            fontSize={{ base: "md", md: "xl" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in in at
            donec bibendum cras. Vitae diam mauris nisi lectus dis.
          </Text>
          <HStack width={{ base: "100%", md: "70%" }}>
            <Input p={6} placeholder="Enter your email" />
            <Button px={10} py={6} variant="register">
              Subscribe
            </Button>
          </HStack>
        </Flex>
      </Flex>
      <Fifth />
    </Flex>
  );
}
