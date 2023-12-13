"use client";
import { Button, Flex, Heading, Text, keyframes } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HeroBottomSVG from "./HeroBottomSVG";
import { StargateColors } from "#/src/utils/Colors";
import { LuZap } from "react-icons/lu";
import Link from "next/link";

const words = [
  "Copywriter",
  "Assistant",
  "Marketer",
  "Developer",
  "Strategist",
  "Creator",
];

const Header = () => {
  const [currentWord, setCurrentWord] = useState<string>(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setCurrentWord(words[index]);
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      setCurrentWord(words[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Flex
      as={motion.div}
      initial="initial"
      animate="animate"
      minH="100svh"
      bg={
        "linear-gradient(120deg,#70A4D4 0%,#ca71ff 20%,#8469cc 30%,#48B9E6 50%,#8469cc 70%,#9F70D4 100%)"
      }
      bgSize={"200% 200%"}
      animation={`${bgAnimation} 20s ease-in-out alternate infinite`}
      position={"relative"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      px={2}
    >
      <Flex bg={"#ffffff50"} px={4} rounded={"full"} mb={5}>
        <Text color={StargateColors.white} fontSize={"xs"}>
          Unleash The Power of AI
        </Text>
      </Flex>
      <Heading
        fontSize={{
          base: 48,
          md: 64,
          lg: 84,
        }}
        color={StargateColors.white}
        lineHeight={1}
        textAlign={"center"}
      >
        Your Ultimate
      </Heading>
      <AnimatePresence mode="wait">
        <Heading
          as={motion.h1}
          fontSize={{
            base: 48,
            md: 64,
            lg: 84,
          }}
          key={currentWord}
          color={StargateColors.white}
          lineHeight={1}
          initial={{ opacity: 0.2, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0.2, filter: "blur(4px)" }}
        >
          {currentWord}
        </Heading>
      </AnimatePresence>
      <Text color={StargateColors.white} maxW={300} textAlign={"center"} mt={5}>
        Elevating AI: The Ultimate Platform for Intelligent Solutions
      </Text>
      <Button
        leftIcon={<LuZap />}
        as={motion.a}
        href={"#"}
        whileHover={{ scale: 1.1 }}
        size={"lg"}
        mt={5}
        gap={2}
        cursor={"pointer"}
      >
        START FOR FREE
      </Button>
      <Text
        mt={2}
        as={Link}
        href={"#features"}
        color={StargateColors.white}
        opacity={0.75}
        transition={"all .25s ease"}
        _hover={{ opacity: 1 }}
      >
        Discover Stargate
      </Text>
      <HeroBottomSVG />
    </Flex>
  );
};

const bgAnimation = keyframes`
  0% {
        background-position: 0% 100%
    }

    to {
        background-position: 100% 100%
    }
`;

export default Header;
