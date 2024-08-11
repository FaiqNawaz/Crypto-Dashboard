import React from "react";
import Sidenav from "../../Components/Sidenav";
import TopNav from "../../Components/TopNav";
import { Flex, Box } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import PortfolioSection from "./PortfolioSection";

const Dashboard = ({ title }) => {
  return (
    <DashboardLayout title="Dashboard">
      <PortfolioSection />
    </DashboardLayout>
  );
};

export default Dashboard;
