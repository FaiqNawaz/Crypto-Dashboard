import React from "react";
import { CustomCard } from "../../assets/Chakra/CustomCard";
import {
  Stack,
  HStack,
  Tag,
  Text,
  Icon,
  Button,
  Flex,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { CgArrowTopRight } from "react-icons/cg";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const PriceSection = () => {
  const timestamps = ["7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM", "11:55 PM"];

  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack
            spacing={2}
            flexDir={{ base: "column", sm: "row" }}
            align={{ base: "flex-start", sm: "center" }}
          >
            <Text textStyle="h2" fontWeight="medium">
              22.39401000
            </Text>{" "}
            <HStack fontWeight="medium" color="green.500">
              <Icon as={CgArrowTopRight} />
              <Text fontSize="sm" fontWeight="medium">
                22%
              </Text>{" "}
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={FaPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={FaMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>

      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4px"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel>
            <Image src="\Graph.png" mt="48px" />

            <HStack justify="space-between">
              {timestamps.map((timestamps) => (
                <Text key={timestamps} fontSize="sm" color="black.80">
                  {timestamps}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
