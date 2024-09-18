// import React from "react";
import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { BiSolidDashboard } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const navLinks = [
    {
      icon: BiSolidDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transaction",
    },
  ];

  return (
    <Stack
      justifyContent="space-between"
      boxShadow={{ base: "none", lg: "lg" }}
      w={{ base: "full", lg: "256px" }}
      height="100vh"
      bg="white"
    >
      <Box>
        <Heading fontSize="20px" as="h1" pt="56px" textAlign="center">
          Crypto App
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link}>
              <HStack
                borderRadius="10px"
                mx="3"
                key={nav.text}
                py="3"
                px="4"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                color="#797E82"
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            mx="3"
            py="3"
            px="4"
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            color="#797E82"
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
