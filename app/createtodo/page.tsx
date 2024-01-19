"use client";
import {
  CalendarIcon,
  CaretDownIcon,
  DotsVerticalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import {
  Avatar,
  Button,
  Card,
  DropdownMenu,
  Flex,
  IconButton,
  Link,
  Text,
} from "@radix-ui/themes";

export default function CreateTodo() {
  return (
    <Flex justify="center" style={{margin: 200 }}>
      <Card size="3" style={{ maxWidth: 350, maxHeight: 350 }}>
      <Flex direction="column" gap="5" p="2">
        <Flex display="flex" justify="between" direction="row">
          <Text size="3" weight="bold">
            Radix UI tasarım şablonu çıkartmak
          </Text>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <IconButton variant="soft" color="indigo">
                <CaretDownIcon width="18" height="18" fontSize="20" />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content variant="soft" color="indigo">
              <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>

        <Text size="1" color="gray" >
          <Link href={""} >
          Design of a landing page for the sale of cars: main section, a section
          with advantages...
          </Link>
        </Text>

        <Flex display="flex" justify="between" direction="row">
          <Flex align="center" gap="1">
            <IconButton size="2" variant="ghost">
              <CalendarIcon width="22" height="22" />
            </IconButton>
            <Text align="right" weight="medium" size="2">
              19/01/2024
            </Text>
          </Flex>

          <Flex>
            <Avatar
            radius="full"
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              fallback="A"
            />
          </Flex>
        </Flex>
      </Flex>
    </Card>
    </Flex>
  );
}
