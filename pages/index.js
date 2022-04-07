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
import Fourth from "../components/landing/Fourth";
import Hero from "../components/landing/Hero";
import Img from "../components/landing/Img";
import Second from "../components/landing/Second";
import Third from "../components/landing/third";
import NavBar from "../components/shared/NavBar";
export default function Home() {
  return (
    <Flex width="100%" flexDirection="column" height="600vh">
      {/* <NavBar /> */}
      <Hero />
      <Img />
      <Second />
      <Third />
      <Fourth/>
      <Fifth />
    </Flex>
  );
}
