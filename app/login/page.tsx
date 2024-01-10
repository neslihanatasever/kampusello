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
import Link from "next/link";

const LoginPage = () => {
  return (
    <Flex
    align="center"
      justify="center"
      direction="column"
      style={{ height: "calc(100vh - 110px)" }}
    >
      <Card style={{ width: 400 }} size="4">
        <Flex gap="3" direction="column">
          <Heading size="6" align="left">
            Login
          </Heading>
          <Box>
            <Text size="2" weight="bold" >
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
          <Flex gap="3" justify="center" mt="2">
            <Button color="orange" variant="soft"> 
              
              <Link href="/signin">Create an Account</Link>
            </Button>
            <Button color="orange">Login</Button>
          </Flex>
        </Flex>
        <Flex
            direction="column"
            gap="5"
            width="auto"
            style={{ marginTop: 8 }}
          >
            <Text size="2" weight="bold" align="center" mt="3">
              Continue with Account
            </Text>
            <Button variant="soft" highContrast>
              <Link href={""}>Google</Link>
            </Button>
            <Button variant="soft" highContrast color="orange">
              <Link href={""}>GitHub</Link>
            </Button>
          </Flex>
      </Card>
      </Flex>
  );
};

export default LoginPage;