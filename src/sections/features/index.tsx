"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import {
  LuBot,
  LuCreditCard,
  LuGauge,
  LuLanguages,
  LuLayoutTemplate,
  LuLifeBuoy,
} from "react-icons/lu";

const Features = () => {
  return (
    <Flex
      id="features"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      px={2}
      maxW={1200}
      mx={"auto"}
    >
      <Heading
        fontSize={{
          base: 32,
          md: 48,
          lg: 64,
        }}
        textAlign={"center"}
      >
        Your Favourite AI Tool
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={10}
        my={10}
      >
        {Cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title}>
            {card.text}
          </Card>
        ))}
      </Grid>
    </Flex>
  );
};

interface CardProps {
  icon: IconType;
  title: string;
  children: ReactNode;
}

const Card = ({ icon, title, children }: CardProps) => (
  <Flex maxW={350} role="group">
    <Icon
      as={icon}
      fontSize={48}
      mr={5}
      p={2}
      bg={StargateColors.lightGrey}
      rounded={"md"}
      strokeWidth={1.5}
      transition={"all 0.25s ease"}
      _groupHover={{
        bg: StargateColors.black,
        color: StargateColors.white,
        shadow: "dark-lg",
        transform: "scale(1.1)",
      }}
    />
    <Flex direction={"column"} gap={1}>
      <Heading fontSize={"xl"}>{title}</Heading>
      <Text fontSize={"small"} color={StargateColors.grey}>
        {children}
      </Text>
    </Flex>
  </Flex>
);

const Cards = [
  {
    icon: LuBot,
    title: "AI Generator",
    text: "Automate and optimize with our advanced AI technology, designed for efficiency and smarter decision-making.",
  },
  {
    icon: LuGauge,
    title: "Dashboard",
    text: "Monitor performance at a glance with our user-friendly dashboard, your command center for data insights.",
  },
  {
    icon: LuCreditCard,
    title: "Secure Payments",
    text: "Experience safe and reliable transactions with our robust, encrypted payment system.",
  },
  {
    icon: LuLanguages,
    title: "Multilang",
    text: "Reach a global audience with multi-language support, enhancing user experience across borders.",
  },
  {
    icon: LuLayoutTemplate,
    title: "Ready-to-use templates",
    text: "Kickstart your project with our versatile, easy-to-customize templates for any use case.",
  },
  {
    icon: LuLifeBuoy,
    title: "Support Centre",
    text: "Get prompt, expert support when you need it. We're here to ensure your seamless experience.",
  },
];

export default Features;
