import { Box, HStack, Image, Text } from "@chakra-ui/react";

export default function Header () {
  return (
    <HStack justifyContent="space-between">
          <HStack spacing="16">
            <Text
              display="flex"
              fontSize="5xl"
              fontWeight="bold"
              color="brand.white"
            >
              games
              <Text
                bg="brand.gradientLogo"
                backgroundClip="text"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                .io
              </Text>
            </Text>
            <HStack spacing="10">
              <Box position="relative">
                <Text
                  cursor="pointer"
                  color="brand.white"
                  fontWeight="light"
                  fontSize="sm"
                  transition="0.2s all linear"
                  _hover={[
                    {
                      bg: "brand.gradientLogo",
                      backgroundClip: "text",
                      style: {
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      },
                    },
                  ]}
                >
                  Product
                </Text>
              </Box>
              <Text
                cursor="pointer"
                color="brand.white"
                fontWeight="light"
                fontSize="sm"
                transition="0.2s all linear"
                _hover={[
                  {
                    bg: "brand.gradientLogo",
                    backgroundClip: "text",
                    style: {
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    },
                  },
                ]}
              >
                New Collection
              </Text>
              <Text
                cursor="pointer"
                color="brand.white"
                fontWeight="light"
                fontSize="sm"
                transition="0.2s all linear"
                _hover={[
                  {
                    bg: "brand.gradientLogo",
                    backgroundClip: "text",
                    style: {
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    },
                  },
                ]}
              >
                Contact
              </Text>
            </HStack>
          </HStack>
          <Image src="/assets/perfil.svg" cursor="pointer" />
        </HStack>
  )
}