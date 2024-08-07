import React from "react";
import Sidenav from "../../Components/Sidenav";
import TopNav from "../../Components/TopNav";
import { Flex, Box } from "@chakra-ui/react";
const Dashboard = () => {
  return (
    <div>
      <Flex>
        <Sidenav />

        <Box flexGrow={1}>
          <TopNav />
        </Box>
      </Flex>
    </div>
  );
};

export default Dashboard;
