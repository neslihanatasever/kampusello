import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Avatar, Flex, IconButton, Text } from "@radix-ui/themes";

export default function HeaderComponent() {
  return (
    <Flex
      direction="row"
      justify="between"
      align="center"
      style={{ margin: 30 }}
    >
      <Flex>
        <Text weight="bold" size="8">
          Boards
        </Text>
      </Flex>


      <Flex gap="5">
        <Flex>
        <IconButton  size="3" color="orange" variant="soft" >
          <MagnifyingGlassIcon width="18" height="18" />
        </IconButton>
        </Flex>

        <Flex>
          <Avatar
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
        </Flex>
      </Flex>


    </Flex>
  );
}
