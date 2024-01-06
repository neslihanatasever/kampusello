"use client";
import React from "react";
import * as Form from "@radix-ui/react-form";
import { Button } from "@radix-ui/themes";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      
      <Form.Root className="FormRoot bg-[#1b1d1eb3] rounded-md w-[400px] h-[350px] p-[32px] flex  justify-center border border-[#3a3f41b3] flex-col">
      <h1 className="text-2xl font-bold mb-[25px] ">Login</h1>


          <Form.Field className="FormField text-sm font-medium mb-[25px]" name="email">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel mb-[5px]">Email address</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="Input w-full h-[32px] p-2 bg-[#1b1d1eb3] border rounded-sm border-[#3a3f41b3] focus:outline-none focus:border-[#7c8183b3]"  type="email" required />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField text-sm font-medium mb-[25px]" name="email">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel mb-[5px]">Password</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your password
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please provide a valid password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input type="password" className="Input w-full h-[32px] p-2 bg-[#1b1d1eb3] border rounded-sm border-[#3a3f41b3] focus:outline-none focus:border-[#7c8183b3]" required />
          </Form.Control>
        </Form.Field>

        <Form.Submit asChild>
          <div className="flex justify-end gap-2">
          <Button variant="soft" color="orange"> Create Account </Button>
          <Button variant="solid" color="orange"> Login </Button>
          </div>
        </Form.Submit>
      </Form.Root>
    </div>
  )
}

export default LoginPage