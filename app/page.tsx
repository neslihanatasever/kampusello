import Image from "next/image";
import { BookmarkIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";

export default function Home() {
  return (
    <Grid align="start" p="9">
      <Flex direction="column" justify="between" align="start" gap="5">
        <Text weight="bold" size="5" color="gray">
          Kampusello'ya &apos; Hoş Geldiniz!
        </Text>
        <Text weight="medium" size="4" color="gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Flex>

      <Flex direction="row" gap="2" className="mt-8">
        <Button color="orange" variant="soft">
          <Link href="login">Login</Link>
        </Button>
        <Button color="orange" variant="soft">
          <Link href="/signin">Sign in</Link>
        </Button>
      </Flex>
    </Grid>
  );
}
