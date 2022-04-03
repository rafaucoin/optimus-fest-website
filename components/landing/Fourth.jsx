import {
  VStack,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  Box,
  Input,
} from "@chakra-ui/react";

export default function Fourth() {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      height="100vh"
      width="100%"
      alignItems="center"
      pl={{ base: 5, md: 10 }}
      pr={{ base: 5, md: 10 }}
      bgColor="white"
      gap={{ base: 0, md: 10 }}
      pt={{ base: "20%", md: 0 }}
    >
      <Flex
        height="50%"
        border="13px solid"
        borderColor="#222222"
        bgColor="#111111"
        justifyContent="center"
        width={{ base: "100%", md: "50%" }}
        position="relative"
        boxShadow="dark-lg"
      >
        <VStack width={{ base: "100%", md: "70%" }}>
          <Heading color="#B5E8BAB2">* 일 수 *</Heading>
          <Heading variant="countdown">Number of days</Heading>
          <Heading
            fontFamily="VCR"
            color="#B5E8BAB2"
            fontSize={{ base: "150px", md: "200px" }}
            letterSpacing={9}
          >
            064
          </Heading>
        </VStack>
        <Heading mt="35vh" color="#B5E8BAB2">
          일
        </Heading>
      </Flex>
      <Flex
        height="50%"
        width={{ base: "100%", md: "50%" }}
        justifyContent="space-around"
        flexDirection="column"
      >
        <Heading
          color="black"
          fontWeight="extrabold"
          letterSpacing={""}
          fontSize={{ base: "5xl", md: "5xl" }}
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
  );
}
