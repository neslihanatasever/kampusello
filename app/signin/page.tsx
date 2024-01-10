"use client";
import React from "react";
import * as Form from "@radix-ui/react-form";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  TextFieldInput,
  TextFieldRoot,
  TextFieldSlot,
  Text,
} from "@radix-ui/themes";
import { EyeOpenIcon, PersonIcon } from "@radix-ui/react-icons";

const SignPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card style={{ width: 400 }} size="4">
        <Flex gap="3" direction="column">
          <Heading size="6" align="left">
            Sign Up
          </Heading>
          <Box>
            <Text size="2" weight="bold" className="mb-3">
              Email Address
            </Text>
            <TextFieldRoot style={{ marginTop: 5 }}>
              <TextFieldSlot>
                <PersonIcon />
              </TextFieldSlot>
              <TextFieldInput size="2" />
            </TextFieldRoot>
          </Box>

          <Box>
            <Text size="2" weight="bold">
              Password
            </Text>
            <TextFieldRoot style={{ marginTop: 5 }}>
              <TextFieldSlot>
                <EyeOpenIcon />
              </TextFieldSlot>
              <TextFieldInput size="2" type="password" />
            </TextFieldRoot>
          </Box>
          <Flex gap="3" justify="center">
            <Button color="orange">Sign Up</Button>
          </Flex>
          <h1>or continue with</h1>
        </Flex>
      </Card>
    </div>
  );
};

export default SignPage;
