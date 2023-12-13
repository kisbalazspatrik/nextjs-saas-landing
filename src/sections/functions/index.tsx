import { StargateColors } from "#/src/utils/Colors";
import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

const Functions = () => {
  const GridItemStyles = {
    color: "white",
    rounded: "md",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    w: "100%",
    h: "100%",
    minH: {
      base: "150px",
      md: "300px",
    },
    transition: "all 0.25s ease",
    bgColor: StargateColors.lightGrey,
    _hover: {
      shadow: "lg",
    },
  };

  return (
    <Flex
      id="functions"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      px={2}
      maxW={1440}
      mx={"auto"}
    >
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={4}
        w={"100%"}
      >
        <GridItem
          colSpan={2}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url(https://i.imgur.com/hTLlF1v.png)"}
          bgSize={"contain"}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
        >
          <Heading
            textAlign={"center"}
            color={StargateColors.black}
            className="text-light-shadow"
          >
            Copywriter
          </Heading>
        </GridItem>
        <GridItem
          colSpan={1}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url(https://i.imgur.com/t7eqsea.png)"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
        >
          <Heading
            textAlign={"center"}
            color={StargateColors.white}
            className="text-dark-shadow"
          >
            Image Generator
          </Heading>
        </GridItem>
        <GridItem
          colSpan={1}
          rowSpan={{
            base: 1,
            md: 2,
          }}
          {...GridItemStyles}
          bgImage={"url(https://i.imgur.com/dUwq8kP.png)"}
          bgSize={"contain"}
          bgRepeat={"no-repeat"}
          bgPosition={"bottom"}
        >
          <Heading
            textAlign={"center"}
            color={StargateColors.black}
            className="text-light-shadow"
          >
            Developer
          </Heading>
        </GridItem>
        <GridItem
          colSpan={1}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url(https://i.imgur.com/dhalAZP.png)"}
          bgSize={"contain"}
          bgRepeat={"no-repeat"}
          bgPosition={"bottom"}
        ></GridItem>
        <GridItem
          colSpan={1}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url(https://i.imgur.com/2WRDbs8.png)"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
        ></GridItem>
        <GridItem
          colSpan={2}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url(https://i.imgur.com/qLIEuPn.png)"}
          bgSize={"contain"}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
        ></GridItem>
      </Grid>
    </Flex>
  );
};

export default Functions;
