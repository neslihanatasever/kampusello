import Image from "next/image";
import { Flex, Text, Button } from "@radix-ui/themes";
import { BookmarkIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
      </Flex>
      <Button>
        <BookmarkIcon width="16" height="16" /> Bookmark
      </Button> 
    </main>
  );
}
