import React from "react";
import DashboardLayout from "../../../Components/DashboardLayout";
import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import { MdOutlineFileDownload } from "react-icons/md";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { IoSearchSharp } from "react-icons/io5";

const tabs = [
  {
    name: "All",
    count: 349,
  },
  {
    name: "Deposit",
    count: 114,
  },
  {
    name: "Withdraw",
    count: 55,
  },
  {
    name: "Trade",
    count: 50,
  },
];

const TransactionPage = () => {
  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={MdOutlineFileDownload} />}>
          Export CSV
        </Button>
      </Flex>

      <Card>
        <Tabs>
          <TabList
            pt="4"
            w="full"
            display="flex"
            justifyContent="space-between"
          >
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} gap="2" display="flex" pb="4">
                  {tab.name}{" "}
                  <Tag borderRadius="full" colorScheme="gray">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxWidth="200px" mr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={IoSearchSharp} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search By ID" />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
