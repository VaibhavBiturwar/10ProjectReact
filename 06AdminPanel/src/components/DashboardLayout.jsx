import { Box, Container, Flex } from "@chakra-ui/react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { useVisibility } from "../hooks/useVisibility";
import SideDrawer from "./SideDrawer";

export default function DashboardLayout({ title, children }) {
  const { isOpen, onClose, onOpen } = useVisibility();

  return (
    <div>
      <Flex>
        <Box
          boxShadow="lg"
          display={{
            base: "none",
            xl: "flex",
          }}
        >
          <SideNav />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        <Box flexGrow={1} backgroundColor="#F3F3F7">
          <TopNav title={title} onOpen={onOpen} />
          <Container
            mx={"auto"}
            maxW={"90%"}
            overflowX={"hidden"}
            overflowY={"auto"}
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </div>
  );
}
