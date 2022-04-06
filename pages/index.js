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
          <VStack
            position="relative"
            height="95%"
            width={{ base: "100%", md: "70%" }}
          >
            <Heading color="#B5E8BAB2">* 일 수 *</Heading>
            <Heading variant="countdown">Number of days</Heading>
            <Flex
              position="absolute"
              top="38%"
              marginTop={0}
              width="350px"
              justifyContent="space-around"
            >
              <Element top={0} />
              <Element top={0} />
              <Element top={0} />
            </Flex>
            <Heading
              pl="13%"
              fontFamily="VCR"
              color="#B5E8BAB2"
              fontSize={"175px"}
              letterSpacing={9}
              display="flex"
              mt={0}
            >
              000
              <Heading mt="37%" color="#B5E8BAB2">
                일
              </Heading>
            </Heading>
            <Flex
              position="absolute"
              top="92%"
              marginTop={0}
              width="350px"
              justifyContent="space-around"
            >
              <Element />
              <Element />
              <Element />
            </Flex>
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
function Element({ top }) {
  const basicBoxStyles = {
    boxShadow: "0px 13px 20px 10px  black",
  };
  const basicBoxStyless = {
    boxShadow: "0px -13px 20px 10px black",
  };
  return (
    <Box sx={top == 0 ? basicBoxStyles : basicBoxStyless}>
      <svg
        width="93"
        height="6"
        viewBox="0 0 93 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="92.8125"
          height="5.16129"
          fill="#B5E8BA"
          fill-opacity="0.7"
        />
      </svg>
    </Box>
  );
}
