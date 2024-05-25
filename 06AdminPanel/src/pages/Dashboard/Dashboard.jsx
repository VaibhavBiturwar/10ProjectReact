import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioBar from "./PortfolioBar";
import PricingCard from "./PricingCard";
import Transactions from "./Transactions";
import InfoCard from "./InfoCard";

export default function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "(1,1fr)",
          xl: "(2,1fr)",
        }}
        gap={6}
      >
        <GridItem colSpan={{ base: 1, xl: 2 }}>
          <PortfolioBar />
        </GridItem>
        <GridItem colSpan={1}>
          <PricingCard />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard inverted />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
}
