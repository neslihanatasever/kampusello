import HeaderComponent from "@/app/components/headercomp/page";
import NavbarComponent from "@/app/components/navbarcomp/page";
import {
  Badge,
  Card,
  Container,
  Flex,
  ScrollArea,
  Separator,
  Text,
} from "@radix-ui/themes";
import React from "react";
import CardComponent from "../components/cardcomp/page";
import { BadgeComponent } from "../components/badgecomp/page";

export default function BoardPage() {
  return (
    <div>
      <HeaderComponent />
      <Flex>
        <NavbarComponent />
        <ScrollArea type="always" scrollbars="vertical" style={{ height: "calc(100vh - 130px)" }}>
        <Container mt="9">
          <Flex direction="row" gap="3">
            <Flex gap="3" wrap="wrap" direction="column">
              <Text weight="bold">🌱 To Do</Text>
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
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </Flex>
          </Flex>
        </Container>
        </ScrollArea>
      </Flex>
    </div>
  );
}
