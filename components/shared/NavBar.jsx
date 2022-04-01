import {
  Button,
  Box,
  Heading,
  HStack,
  Icon,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { Logo, MobileLogo } from "./Logo";
function NavBar() {
  return (
    <HStack
      // justifyContent="space-around"
      align="center"
      width="100%"
      height="9vh"
      pl={{ base: 5, md: 18, lg: 20 }}
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
        <Text variant="register" color="white">
          Home
        </Text>
        <Text variant="register" color="white">
          About
        </Text>
        <Text variant="register" color="white">
          How to join
        </Text>
        <Text variant="register" color="white">
          Sponsors
        </Text>
      </HStack>
      <Button variant="register">Register Now</Button>
    </HStack>
  );
}

export default NavBar;
