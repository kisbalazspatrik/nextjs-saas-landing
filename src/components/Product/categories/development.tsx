import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuBug, LuCode, LuRocket } from "react-icons/lu";

const Development = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      w={"100%"}
      mt={6}
      gap={6}
      px={6}
    >
      <ProductCard icon={LuCode} title={"Code Efficiency Analyzer"}>
        Enhance your code's performance with our Code Efficiency Analyzer.
        Optimize for speed and resource usage in real-time.
      </ProductCard>

      <ProductCard icon={LuBug} title={"Automated Bug Detector"}>
        Streamline debugging with our Automated Bug Detector. Identify and
        resolve coding errors quickly and efficiently.
      </ProductCard>

      <ProductCard icon={LuRocket} title={"Deployment Optimizer"}>
        Simplify your deployment process with our Deployment Optimizer. Ensure
        smooth, efficient, and error-free software deployment.
      </ProductCard>
    </Grid>
  );
};

export default Development;
