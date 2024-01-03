import Image from "next/image";
import { BookmarkIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Container, Flex, Heading, Text } from "@radix-ui/themes";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24" >
        <Container size="1">
            <Flex direction="column">
              <Heading>Kampusello</Heading>
              <Text color="gray">Kampusello'ya Hoş Geldiniz!</Text>
            </Flex>

            
        </Container>
    </main>
    
  );
}
