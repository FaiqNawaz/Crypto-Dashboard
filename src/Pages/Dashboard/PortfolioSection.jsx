import React from "react";
import { HStack, Stack, Icon, Text, Tag, Button } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const PortfolioSection = () => {
  return (
    <HStack
      bg="white"
      borderRadius="xl"
      p="6"
      justify="space-between"
      flexDir={{ base: "column", xl: "row" }}
      align={{ base: "flex-start", xl: "center" }}
    >
      <HStack
        spacing={{ base: "0", xl: "16" }}
        flexDir={{ base: "column", xl: "row" }}
        align={{ base: "flex-start", xl: "center" }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            Rs 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack
            spacing={4}
            flexDir={{ base: "column", sm: "row" }}
            align={{ base: "flex-start", sm: "center" }}
          >
            <Text textStyle="h2" fontWeight="medium">
              22.39401000
            </Text>{" "}
            <Tag colorScheme="gray">BTC</Tag>
            <Text textStyle="h2" fontWeight="medium">
              Rs 1,300.00
            </Text>{" "}
            <Tag colorScheme="gray">PKR</Tag>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
        <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
