import {
  Button,
  Box,
  Heading,
  HStack,
  Icon,
  Text,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import { Logo, MobileLogo } from "./Logo";
function NavBar() {
  return (
    <HStack
      // justifyContent="space-around"
      align="center"
      width="100%"
      height="9vh"
      pl={{ base: 5, md: 18, lg: 20 }}
      pr={{ base: 5, md: 18, lg: 20 }}
      as="nav"
    >
      <Box display={{ base: "none", sm: "flex" }}>
        <Logo />
      </Box>
      <Box display={{ base: "flex", sm: "none" }}>
        <MobileLogo />
      </Box>
      <Spacer />
      <HStack
        display={{ base: "none", md: "flex" }}
        width="40%"
        justifyContent="space-around"
        fontWeight="bold"
      >
        <Link href="/#Home">
          <Text variant="register" color="white">
            Home
          </Text>
        </Link>
        <Link href="/#about">
          <Text variant="register" color="white">
            About
          </Text>
        </Link>
        <Link href="/#about">
          <Text variant="register" color="white">
            How to join
          </Text>
        </Link>
        <Link href="/#about">
          <Text cursor="pointer" variant="register" color="white">
            Sponsors
          </Text>
        </Link>
      </HStack>
      <Button variant="register">Register Now</Button>
    </HStack>
  );
}

export default NavBar;
