import React from "react";
import Sidenav from "../../Components/Sidenav";
import TopNav from "../../Components/TopNav";
import { Flex, Box } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";

const Dashboard = ({ title }) => {
  return (
    <DashboardLayout title="Dashboard">
      <div>How Are You?</div>
    </DashboardLayout>
  );
};

export default Dashboard;
