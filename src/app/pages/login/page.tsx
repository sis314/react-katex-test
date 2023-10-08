"use client";
import { useState, useEffect } from "react";
import {
  Button,
  VStack,
  HStack,
  Box,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => { }, []);

  const handleClick = async () => {
    if (name === "" || pass === "") {
      setErrMsg("input all field");
      setIsError(true);
      return;
    } else {
      setIsError(false);
      const status = await submit();
      if (status === "ok") {
        router.replace("/pages/mypage/" + name);
      } else {
        setErrMsg(status);
        setIsError(true);
      }
    }
  };

  const submit = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: name, pass: pass }),
    });
    if (res.ok) {
      return "ok";
    } else {
      return JSON.parse(await res.text()).message;
    }
  };

  return (
    <Box h="100vh" w="full" bg="gray.50">
      <Center>
        <VStack
          mt="400px"
          p="10px"
          rounded="md"
          shadow="md"
          w="300px"
          bg="white"
        >
          <FormControl isInvalid={isError}>
            <FormLabel>Login</FormLabel>
            <FormHelperText>name</FormHelperText>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormHelperText>pass</FormHelperText>
            <Input
              type="text"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <FormErrorMessage>{errMsg}</FormErrorMessage>
            <Center mt={5}>
              <Button fontSize="xs" size="sm" w="100px" onClick={handleClick}>
                Login
              </Button>
            </Center>
          </FormControl>
        </VStack>
      </Center>
    </Box>
  );
}
