import { UserButton } from "@clerk/nextjs";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Flex, IconButton, Separator, Text } from "@radix-ui/themes";

export default function HeaderComponent() {
  return (
    <Box>
      <Flex direction="row" justify="between" align="center" m="5">
        <Flex>
          <Text weight="bold" size="8">
            Boards
          </Text>
        </Flex>

        <Flex gap="5" align="center">
          <IconButton size="3" color="orange" variant="soft">
            <MagnifyingGlassIcon width="18" height="18" />
          </IconButton>
          <UserButton afterSignOutUrl="/" />
        </Flex>
      </Flex>
      <Flex>
        <Separator orientation="horizontal" size="4" />
      </Flex>
    </Box>
  );
}
