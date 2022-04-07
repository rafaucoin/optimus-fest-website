import { Flex, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
function Img() {
  const [md] = useMediaQuery("(min-width: 68em)");
  const [sm] = useMediaQuery("(max-width: 68em) and (min-width: 48em)");
  const [base] = useMediaQuery("(max-width: 48em)");

  return (
    <>
      {
        <Image
          position="absolute"
          width="88%"
          display={{ base: "none", lg: "flex" }}
          height="100vh"
          top="50vh"
          right="5%"
          userSelect="none"
          src="/people.png"
        />
      }
      {
        <Image
          position="absolute"
          display={{ base: "none", sm: "flex", lg: "none" }}
          width="70%"
          top="50vh"
          right="0%"
          src="/peoplemd.png"
        />
      }
      {
        <Image
          position="absolute"
          // width="70%"
          height="100vh"
          display={{ base: "flex", sm: "none" }}
          top="35vh"
          right="5%"
          src="/peoplesm.png"
        />
      }
    </>
  );
}

export default Img;
