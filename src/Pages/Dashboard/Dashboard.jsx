import React from "react";
import Sidenav from "../../Components/Sidenav";
import TopNav from "../../Components/TopNav";
import { Flex, Box, Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import PortfolioSection from "./PortfolioSection";
import PriceSection from "./PriceSection";
import Transactions from "../../Components/Transactions";
import InfoCCustomCard from "../../Components/InfoCard";
import InfoCard from "../../Components/InfoCard";

const Dashboard = ({ title }) => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{ base: "repeat (1, 1fr)", xl: "repeat (2, 1fr)" }}
        gap="6"
      >
        <GridItem colSpan={{ base: 1, xl: 2 }}>
          <PortfolioSection />
        </GridItem>

        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            inverted={false}
            imgUrl="\Visual.png"
            tagText="Loan"
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            inverted={true}
            imgUrl="\Visualdark.png"
            tagText="Contact"
            text="Learn more about our real estate, mortgage, and  corporate account services"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
