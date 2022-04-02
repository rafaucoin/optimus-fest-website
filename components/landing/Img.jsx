import { Flex, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
function Img() {
  const [md] = useMediaQuery("(min-width: 48em)");
  const [sm] = useMediaQuery("(max-width: 48em) and (min-width: 30em)");
  const [base] = useMediaQuery("(max-width: 30em)");

  return (
    <>
      {md && (
        <Image
          position="absolute"
          width="88%"
          height="100vh"
          top="50vh"
          right="5%"
          src="/people.png"
        />
      )}
      {sm && (
        <Flex w="100%" h="10%" position="relative">
          <Image
            position="absolute"
            width="80%"
            height="88vh"
            top="-120%"
            right="0%"
            src="/peoplemd.png"
          />
        </Flex>
      )}
      {base && (
        <Image
          position="absolute"
          width="70%"
          height="100vh"
          top="35vh"
          right="5%"
          src="/peoplesm.png"
        />
      )}
    </>
  );
}

export default Img;
