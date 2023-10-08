"use client";
const test_data: Data = {
  questions: [
    {
      section: "関数を微分せよ",
      subsection: "\\dfrac{1}{x}\\sin x^2",
    },
    {
      section: "積分を求めよ",
      subsection: "\\int \\sin x dx",
    },
    {
      section: "積分を求めよ",
      subsection: "\\int_1^\\pi\\cos (x+\\log 3) dx",
    },
  ],
};

export type Data = {
  questions: Question[];
};

export type Question = {
  section: string;
  subsection: string;
};

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
import "katex/dist/katex.min.css";

export const Form = () => {
  const [text, setText] = useState<string[]>([""]);
  const [idx, setIdx] = useState(0);

  const setTextHere = (val: string) => {
    setText(text.map((t, i) => (i === idx ? val : t)));
  };

  const HandlePrev = () => {
    if (idx == 0) {
      alert("this is first page");
      return;
    }
    setIdx(idx - 1);
  };

  const HandleNext = () => {
    if (text.length - 1 == idx) {
      setText([...text, ""]);
    }
    setIdx(idx + 1);
  };

  const PrevButton = () => {
    return (
      <Button size="md" w={40} onClick={HandlePrev}>
        Prev
      </Button>
    );
  };

  const NextButton = () => {
    return (
      <Button size="md" w={40} onClick={HandleNext}>
        Next
      </Button>
    );
  };

  const SendButton = () => {
    return (
      <Button
        size="md"
        w={40}
        colorScheme="blue"
        onClick={(_) => alert("Ok to send?")}
      >
        Send
      </Button>
    );
  };

  return (
    <VStack w="100vw">
      <VStack w="full" p={5} gap={10} pt={20}>
        <InlineMath>{test_data.questions[idx].section}</InlineMath>
        <VStack gap={8} mt={10} h={50}>
          <InlineMath>{test_data.questions[idx].subsection}</InlineMath>
        </VStack>
        <Center h={20}>
          <InlineMath>{text[idx]}</InlineMath>
        </Center>
        {text.map((t) => (
          <Text key={t}>{t}</Text>
        ))}
      </VStack>
      <Input
        type="text"
        value={text[idx]}
        onChange={(e) => setTextHere(e.target.value)}
      />
      <HStack>
        {idx != 0 ? <PrevButton /> : <Box w={40}></Box>}
        {idx != test_data.questions.length - 1 ? (
          <NextButton />
        ) : (
          <SendButton />
        )}
      </HStack>
    </VStack>
  );
};
