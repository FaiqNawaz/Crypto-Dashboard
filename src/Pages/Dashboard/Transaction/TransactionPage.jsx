import React from "react";
import DashboardLayout from "../../../Components/DashboardLayout";
import { Button, Card, Flex, Icon } from "@chakra-ui/react";
import { MdOutlineFileDownload } from "react-icons/md";

const TransactionPage = () => {
  return (
    <DashboardLayout>
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={MdOutlineFileDownload} />}>
          Export CSV
        </Button>
      </Flex>

      <Card>Transaction Page</Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
