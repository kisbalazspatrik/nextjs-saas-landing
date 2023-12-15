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
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const Product = () => {
  const [currentCategory, setCurrentCategory] = useState("copywriting");

  return (
    <Flex
      id="product"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      pt={12}
      pb={{
        base: 6,
        md: 12,
      }}
      px={{
        base: 0,
        md: 10,
      }}
      maxW={1200}
      mx={{
        base: 2,
        xl: "auto",
      }}
      border={`1px solid ${StargateColors.lightBg}`}
      borderRadius={24}
    >
      <Heading textAlign={"center"} px={2}>
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
                  bgColor: StargateColors.black,
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
                  ? StargateColors.white
                  : StargateColors.grey
              }
            >
              {category}
            </Text>
          </Flex>
        ))}
      </Flex>
      <AnimatePresence mode="wait">
        {Object.entries(categoryComponents).map(
          ([key, Component]) =>
            currentCategory === key && (
              <motion.div
                key={key}
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.2 }}
                transition={{ duration: 0.25 }}
                layout
              >
                <Component />
              </motion.div>
            )
        )}
      </AnimatePresence>
    </Flex>
  );
};

const categoryComponents = {
  copywriting: Copywriting,
  design: Design,
  development: Development,
  marketing: Marketing,
  video: Video,
  "social media": SocialMedia,
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
