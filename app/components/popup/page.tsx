"use client";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Button,
  Dialog,
  Flex,
  Text,
  TextArea,
} from "@radix-ui/themes";

export default function PopupPage() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <PlusIcon></PlusIcon>Add Task
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 550 }}>
        <Dialog.Title>Add Task</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Lett'ss Gooooaaaa
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Task Name
            </Text>
            <TextArea size="1" placeholder="Enter your task name" />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Description
            </Text>
            <TextArea size="2" placeholder="Enter your descriptions" />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Add</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
