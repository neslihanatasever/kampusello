"use client";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button, Dialog, Flex, Text, TextArea } from "@radix-ui/themes";
import * as Toolbar from "@radix-ui/react-toolbar";

export default function PopupPage() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <PlusIcon></PlusIcon>Add Task
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 600, maxHeight: 550 }}>
        <Flex justify="between">
        <Dialog.Title>Add Task</Dialog.Title>
        <Dialog.Description size="4" mb="6">
        🌱
        </Dialog.Description>
        </Flex>

        <Flex direction="column" gap="3">
        <label className="flex justify-between mb-1 ">
            <input
              type="date"
              className="h-10 w-40 p-3 rounded-md font-mono mb-3 "
            />
            
          </label>
          <label>
            <Text as="div" size="3" mb="2" weight="medium">
              Task Name
            </Text>
            <TextArea size="2" placeholder="Enter your task name" />
          </label>

          <label>
            <Text as="div" size="3" mb="2" weight="medium">
              Description
            </Text>
            <TextArea size="2" placeholder="Enter your descriptions" />
          </label>
          <Flex>
          <Button size="2" variant="surface">
              <PlusIcon></PlusIcon> Assign People
            </Button>
          </Flex>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="surface"  color="gray" size="2">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button size="2" >Add</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
