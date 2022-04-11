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
import Head from "next/head";
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
      <Head>
        <title>Optimus Fest</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Hero />
      <Img />
      <Second />
      <Third />
      <Fourth/>
      <Fifth />
    </Flex>
  );
}
