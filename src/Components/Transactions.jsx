import React, { Fragment } from "react";
import { CustomCard } from "../assets/Chakra/CustomCard";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaBtc } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa6";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: FaRupeeSign,
      text: "PKR Deposit",
      amount: "+ Rs81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: FaRupeeSign,
      text: "PKR Deposit",
      amount: "+ Rs81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];

  return (
    <CustomCard h="full">
      <Text fontSize="sm" color="black.80" mb="6">
        Recent Transaction
      </Text>

      <Stack spacing={4}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i != 0 && <Divider />}
            <Flex gap="4">
              <Grid
                placeItems="center"
                bg="black.5"
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={transaction.icon} />
              </Grid>

              <Flex justifyContent="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{transaction.text}</Text>
                  <Text fontSize="sm" color="black.80">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h6">{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>

      <Button w="full" colorScheme="gray" mt="6">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
