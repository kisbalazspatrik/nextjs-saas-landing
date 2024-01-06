"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import FooterTopSVG from "./FooterTopSVG";
import FooterBg from "./FooterBg";
import { LuArrowRight } from "react-icons/lu";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Flex
      py={32}
      position={"relative"}
      justify={"center"}
      align={"center"}
      direction={"column"}
      id="footer"
    >
      <FooterTopSVG />
      <FooterBg />
      <Flex mt={16} direction={"column"} align={"center"} px={2}>
        <Flex bg={"#ffffff50"} pr={4} rounded={"full"} mb={5}>
          <Text color={StargateColors.white} fontSize={"xs"}>
            <Text
              as="span"
              fontWeight={600}
              bg={"#ffffff50"}
              px={2}
              rounded={"full"}
              mr={1}
            >
              Stargate
            </Text>{" "}
            The only AI tool you will ever need
          </Text>
        </Flex>
        <Heading
          fontSize={{
            base: 72,
            md: 96,
          }}
          textAlign={"center"}
          color="transparent"
          maxW={500}
          fontWeight={800}
          style={{
            backgroundImage: "linear-gradient(315deg, #ffffff 60%, #000000)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          Fork me on GitHub
        </Heading>

        <Button
          rightIcon={<LuArrowRight />}
          as={motion.a}
          href={"https://github.com/kisbalazspatrik/nextjs-saas-landing"}
          target="_b"
          whileHover={{ scale: 1.1 }}
          size={"lg"}
          mt={5}
          gap={2}
          cursor={"pointer"}
        >
          Get Started
        </Button>
      </Flex>

      <Flex mt={32}>
        <Text color={StargateColors.white}>
          {new Date().getFullYear()} - All rights reserved
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
