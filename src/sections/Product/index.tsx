"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Copywriting from "./categories/copywriting";
import Design from "./categories/design";
import Development from "./categories/development";
import Marketing from "./categories/marketing";
import Video from "./categories/video";
import SocialMedia from "./categories/socialMedia";

const Product = () => {
  const [currentCategory, setCurrentCategory] = useState("copywriting");

  return (
    <Flex
      id="product"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      py={12}
      px={{
        base: 0,
        md: 2,
      }}
      maxW={1200}
      mx={{
        base: 2,
        xl: "auto",
      }}
      border={`1px solid ${StargateColors.lightBg}`}
      borderRadius={24}
    >
      <Heading textAlign={"center"}>
        ... But what can Stargate do for You?
      </Heading>
      <Flex
        gap={4}
        py={{
          base: 5,
          md: 4,
        }}
        px={4}
        mt={5}
        borderBottom={{
          base: `1px solid ${StargateColors.lightBg}`,
          md: "none",
        }}
        justify={{
          base: "flex-start",
          md: "center",
        }}
        overflowX={"scroll"}
        w={"100%"}
        className="hide-scrollbar"
      >
        {Categories.map((category) => (
          <Flex
            key={category}
            cursor={"pointer"}
            onClick={() => setCurrentCategory(category.toLowerCase())}
            px={4}
            py={2}
            w={"fit-content"}
            flexWrap={"nowrap"}
            borderRadius={12}
            transition={"all 0.25s ease"}
            {...(currentCategory === category.toLowerCase()
              ? {
                  bgColor: StargateColors.white,
                  color: StargateColors.black,
                  shadow: "lg",
                }
              : {})}
          >
            <Text
              fontWeight={"bold"}
              fontSize={"sm"}
              whiteSpace={"nowrap"}
              color={
                currentCategory === category.toLowerCase()
                  ? StargateColors.black
                  : StargateColors.grey
              }
            >
              {category}
            </Text>
          </Flex>
        ))}
      </Flex>
      {currentCategory === "copywriting" && <Copywriting />}
      {currentCategory === "design" && <Design />}
      {currentCategory === "development" && <Development />}
      {currentCategory === "marketing" && <Marketing />}
      {currentCategory === "video" && <Video />}
      {currentCategory === "social media" && <SocialMedia />}
    </Flex>
  );
};

const Categories = [
  "Copywriting",
  "Design",
  "Development",
  "Marketing",
  "Video",
  "Social Media",
];

export default Product;
