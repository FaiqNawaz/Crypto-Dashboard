import React from "react";
import Sidenav from "../../Components/Sidenav";
import TopNav from "../../Components/TopNav";
import { Flex, Box, Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import PortfolioSection from "./PortfolioSection";
import PriceSection from "./PriceSection";
import Transactions from "../../Components/Transactions";

const Dashboard = ({ title }) => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{ base: "repeat (1, 1fr)", md: "repeat (2, 1fr)" }}
        gap="6"
      >
        <GridItem colSpan={2}>
          <PortfolioSection />
        </GridItem>

        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
