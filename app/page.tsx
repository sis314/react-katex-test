"use client";

import React, { useState } from "react";
import {
  Button,
  HStack,
  VStack,
  Text,
  Center,
  Stack,
  Flex,
  Input,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { InlineMath, BlockMath } from "react-katex";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import "katex/dist/katex.min.css";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <VStack w="100vw">
      <Stack
        w="full"
        p={5}
        pt={20}
        gap={20}
        alignItems="center"
        justifyContent="center"
      >
        <VStack
          background="gray.100"
          p={4}
          w="full"
          minH={140}
          rounded={6}
          boxShadow="md"
          alignItems="left"
        >
          <Box>
            <InlineMath>1. xを求めよ。</InlineMath>
          </Box>
          <Box>
            <BlockMath>
              {String.raw`\int^{b}_{a}f(x)dx = \int^{c}_{a}f(x)dx + \int^{b}_{c}
            f(x)dx`}
            </BlockMath>
          </Box>
        </VStack>
        <Flex
          px={4}
          py={2}
          w="full"
          minH="100px"
          borderColor="gray.200"
          borderBottomWidth={1}
          align="center"
        >
          <MathJaxContext>
            <InlineMath>{text}</InlineMath>
          </MathJaxContext>
        </Flex>
        <Input
          mt="10px"
          variant="outline"
          borderColor="gray.200"
          placeholder="input"
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
      </Stack>
      <Box mb={120} />
      <HStack
        h={100}
        w="full"
        overflowY="hidden"
        position="fixed"
        bottom={0}
        px={5}
      >
        <Button size="md" w={40}>
          Prev
        </Button>
        <Spacer />
        <Button size="md" w={40}>
          Next
        </Button>
      </HStack>
    </VStack>
  );
}
