import {
  Avatar,
  Button,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      gap="3"
      style={{ height: "calc(100vh - 110px)" }}
    >
      <Avatar
        fallback={"a"}
        size="8"
        src="https://avatars.githubusercontent.com/u/34745911?s=200&v=4"
      ></Avatar>
      <Heading size="9" as="h1" align="center" style={{ lineHeight: 1.2 }}>
        Kampuselloya ile <br /> işlerinizi organize edin.
      </Heading>
      <Text size="3" align="center">
        Kampusello ile odaklan, organize ol ve sakin ol. <br /> Dünyanın 1
        numaralı görev yöneticisi ve yapılacaklar listesi uygulaması.
      </Text>
      <Button size="3" variant="soft" color="orange">
        <Link href="/sign-in">Hemen Başla</Link>
      </Button>
      <UserButton afterSignOutUrl="/"/>
    </Flex>
  );
}
