import { DashboardIcon, ExitIcon, GearIcon } from "@radix-ui/react-icons";
import { Avatar, Box, Flex, IconButton, Text } from "@radix-ui/themes";

export default function NavbarComponent() {
  return (
    <Box>
      <Flex
        direction="column"
        gap="5"
        justify="between"
        mt="5"
        ml="8"
        style={{ height: "calc(100vh - 130px)" }}
      >
        <Flex gap="5" direction="column">
          <Avatar
            fallback={"a"}
            size="4"
            src="https://avatars.githubusercontent.com/u/34745911?s=200&v=4"
          ></Avatar>

          <Flex align="center" gap="3">
            <IconButton size="3" color="blue" variant="soft">
              <DashboardIcon width="18" height="18" />
            </IconButton>
            <Text weight="bold" color="gray">
              Dashboard
            </Text>
          </Flex>
          <Flex align="center" gap="3">
            <IconButton size="3" color="blue" variant="soft">
              <DashboardIcon width="18" height="18" />
            </IconButton>
            <Text weight="bold" color="gray">
              Dashboard
            </Text>
          </Flex>
          <Flex align="center" gap="3">
            <IconButton size="3" color="blue" variant="soft">
              <DashboardIcon width="18" height="18" />
            </IconButton>
            <Text weight="bold" color="gray">
              Dashboard
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" gap="5">
          <Flex align="center" gap="3">
            <IconButton size="3" color="red" variant="soft">
              <GearIcon width="18" height="18" />
            </IconButton>
            <Text weight="bold" color="gray">
              Settings
            </Text>
          </Flex>

          <Flex align="center" gap="3">
            <IconButton size="3" color="orange" variant="soft">
              <ExitIcon width="18" height="18" />
            </IconButton>
            <Text weight="bold" color="gray">
              SignOut
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
