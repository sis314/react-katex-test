"use client";

import React, { useState } from "react";
import {
  VStack,
  Text,
  Center,
  Stack,
  Flex,
  Input,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Home() {
  const [text, setText] = useState("t");

  return (
    <Stack
      height="100vh"
      width="100vw"
      alignItems="center"
      gap={10}
      justifyContent="center"
    >
      <VStack
        background="gray.100"
        px={12}
        height={150}
        width={500}
        rounded={6}
        boxShadow="md"
        alignItems="left"
      >
        <Text fontSize="xs" mt={5}>
          1. xを求めよ。
        </Text>
        <Box mt={5}>
          <InlineMath>
            {String.raw`\int^{b}_{a}f(x)dx = \int^{c}_{a}f(x)dx + \int^{b}_{c}
            f(x)dx`}
          </InlineMath>
        </Box>
      </VStack>
      <Flex
        px={12}
        height={30}
        width={500}
        borderColor="gray.200"
        borderBottomWidth={1}
        align="center"
      >
        <InlineMath>{text}</InlineMath>
      </Flex>
      <Input
        w={500}
        mt="10px"
        placeholder="input"
        variant="outline"
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
    </Stack>
  );
}
