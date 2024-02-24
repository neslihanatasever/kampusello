import HeaderComponent from "@/app/components/headercomp/page";
import NavbarComponent from "@/app/components/navbarcomp/page";
import {
  Button,
  Container,
  Flex,
  ScrollArea,
  Separator,
  Text,
} from "@radix-ui/themes";
import React from "react";
import CardComponent from "../components/cardcomp/page";
import { BookmarkIcon, PlusIcon } from "@radix-ui/react-icons";
import PopupPage from "../components/popup/page";

export default function BoardPage() {
  return (
    <div >
      <HeaderComponent />
      <Flex>
        <NavbarComponent />
        <ScrollArea
          type="always"
          scrollbars="vertical"
          style={{ height: "calc(100vh - 130px)" }}
        >
          <Container p="9">
            <Flex direction="row" gap="3">
              <Flex gap="3" wrap="wrap" direction="column">
                <Text weight="bold">🌱 To Do</Text>
                <PopupPage />
                <CardComponent />
                <CardComponent />
              </Flex>
              <Flex>
                <Separator orientation="vertical" size="4" />
              </Flex>
              <Flex gap="3" wrap="wrap" direction="column">
                <Text weight="bold">🪴 In Progress</Text>
                <CardComponent />
              </Flex>
              <Flex>
                <Separator orientation="vertical" size="4" />
              </Flex>
              <Flex gap="3" wrap="wrap" direction="column">
                <Text weight="bold">🌻 Done</Text>
                <CardComponent />
              </Flex>
            </Flex>
          </Container>
        </ScrollArea>
      </Flex>
    </div>
  );
}
