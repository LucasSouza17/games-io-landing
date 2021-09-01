import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "../components/Header";

export default function Home() {
  return (
    <Box
      zIndex={-1}
      w="100vw"
      h="100vh"
      bg="brand.bg"
      overflowX="hidden"
      overflowY="hidden"
    >
      <Container position="relative" maxW="1440px" px="8" pt="8">
        <Header />
        <HStack alignItems="center">
          <VStack alignItems="flex-start">
            <Text
              fontSize="5xl"
              fontWeight="bold"
              bg="brand.gradientLogo"
              backgroundClip="text"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              NEW
            </Text>
            <Text
              fontSize="6xl"
              lineHeight="shorter"
              fontWeight="light"
              color="brand.white"
            >
              Virtual Reality Glasses
            </Text>
            <Text
              fontSize="md"
              color="brand.white"
              fontWeight="light"
              pt="2.5"
              pb="10"
            >
              welcome to a new world. Thousands of immersive experiences right
              at your home.
            </Text>
            <Button
              width="60%"
              height="14"
              backgroundColor="transparent"
              borderLeftColor="brand.purple"
              borderTopColor="brand.lightBlue"
              borderBottomColor="brand.purple"
              borderRightColor="brand.lightBlue"
              borderWidth="1px"
              borderRadius="full"
              transition="0.2s all linear"
              _hover={[
                {
                  backgroundColor: "transparent",
                  borderRightColor: "brand.purple",
                  borderBottomColor: "brand.lightBlue",
                  borderTopColor: "brand.purple",
                  borderLeftColor: "brand.lightBlue",
                },
              ]}
            >
              <Text
                bg="brand.gradientLogo"
                backgroundClip="text"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                _hover={[{ bg: "brand.gradientLogoReverse" }]}
              >
                buy now
              </Text>
            </Button>
            <Image src="/assets/arrow.svg" pt="10" />
          </VStack>
          <VStack position="relative">
            <Image zIndex={1} src="/assets/person.png" w="100%" />
          </VStack>
        </HStack>
        <Box
          zIndex={0}
          h="100%"
          w="md"
          position="absolute"
          background="brand.bgFaixa"
          top="0"
          right="48"
        />
      </Container>
      <Container position="relative" maxW="1440px" px="8">
        <Box borderTopRadius="2xl" p="8" bgColor="brand.white">
          <HStack alignItems="flex-start" justifyContent="space-between">
            <VStack alignItems="flex-start">
              <Text
                bg="brand.gradientLogo"
                backgroundClip="text"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                fontWeight="bold"
              >
                NEW PRODUCT
              </Text>
              <Text w="100%" fontWeight="normal" fontSize="md">
                Become Iron Man with the Iron Man VR Bundle from Sony
                PlayStation VR Marvel. This bundle comes with a PlayStation VR
                headset, a PlayStation camera and two PlayStation Move motion
                controllers. Put the included Marvel Iron Man VR game disc into
                your PlayStation 4 console and put on the VR headset to become
                Iron Man.
              </Text>
            </VStack>
            <Box h="lg" w="100%" background="brand.bg" p="16" />
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}
