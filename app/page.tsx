import Image from "next/image";
import { BookmarkIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";

export default function Home() {


  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      <Container size="1" className="flex-1">
        <Flex direction="column">
          <Text className="font-bold text-[20px]" color="gray">Kampusello'ya Hoş Geldiniz!</Text>
          <Text className="font-extralight text-[18px]"  color="gray" style={{ marginTop: "20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
          </Text>
          <Flex direction="row" gap="5">
            <Button
              style={{ width: "100px",
              height: "30px",
              marginTop: "10px",
              color: "black",
              backgroundColor:"lightgray"}}
            >
              <Link href="log-in">Login</Link>
            </Button>
            <Button
              style={{ width: "100px",
               height: "30px",
               marginTop: "10px",
               color: "black",
               backgroundColor:"lightgray"}}
            >
              <Link href="/sign-in" >Sign in</Link>
            </Button>
          </Flex>
        </Flex>
      </Container>

      <Container size="1" className="flex-1">
        <AspectRatio ratio={10 / 10}>
          <img
            src="https://avatars.githubusercontent.com/u/34745911?s=200&v=4"
            alt="penguin 1"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "250px",
            }}
          />
        </AspectRatio>
      </Container>
    </main>
  );
}
