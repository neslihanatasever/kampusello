import { DashboardIcon, ExitIcon, GearIcon, MagicWandIcon } from "@radix-ui/react-icons";
import { Avatar, Container, Flex, IconButton } from "@radix-ui/themes";

export default function NavbarComponent() {
  return (
    <Container style={{ maxHeight: "100vh"}}>
        <Flex direction="column" gap="9" justify="between">
      <Flex gap="2">
        <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
      </Flex>

      <Flex direction="column" gap="9" >
        <Flex>
        <IconButton size="3" color="blue" variant="soft">
          <DashboardIcon width="18" height="18" />
        </IconButton>
        </Flex>
        <Flex>
        <IconButton size="3" color="red" variant="soft">
          <GearIcon width="18" height="18" />
        </IconButton>
        </Flex>
        <Flex>
        <IconButton size="3" color="orange" variant="soft">
          <ExitIcon width="18" height="18" />
        </IconButton>
        </Flex>
      </Flex>
    </Flex>
    </Container>
  );
}
