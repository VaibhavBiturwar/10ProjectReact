import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { MdCompareArrows, MdDashboard } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const PAGES = [
  {
    icon: MdDashboard,
    text: "Dashboard",
    url: "/",
  },
  {
    icon: MdCompareArrows,
    text: "Transaction",
    url: "/Transaction",
  },
];

const SideNav = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Stack justify="space-between" w="16rem" h="100vh">
      <Box>
        <Heading fontSize="20px" textAlign="center" mt="1.25rem">
          @AdminPanel
        </Heading>
        <Box alignItems="center" mt="6" mx="3">
          {PAGES.map(({ icon, text, url }) => (
            <Link to={url} key={text}>
              <HStack
                borderRadius="10px"
                px={4}
                py={3}
                mb={4}
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                color="#797e82"
                fontWeight="medium"
                style={{
                  color: pathname == url && "#171717",
                  backgroundColor: pathname == url && "#F3F3F7",
                }}
              >
                <Icon as={icon} />
                <Text fontSize="14px" ml={1}>
                  {text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      {/* -- */}
      <Box alignItems="center" mb="6" mx="3">
        <Link to={"/Support"}>
          <HStack
            href="/support"
            borderRadius="10px"
            px={4}
            py={3}
            mb={4}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            color="#797e82"
            fontWeight="500"
            style={{
              color: pathname == "/Support" && "#171717",
              backgroundColor: pathname == "/Support" && "#F3F3F7",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" ml={1}>
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;

// Stack -> display:flex | flex-direction:column
// HStack -> display:flex | flex-direction:row
