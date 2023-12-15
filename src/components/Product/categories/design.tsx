import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuPalette, LuPencilRuler, LuShapes } from "react-icons/lu";

const Design = () => {
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
      <ProductCard icon={LuPencilRuler} title={"UI/UX Design Assistant"}>
        Streamline your design process with our UI/UX Design Assistant. Create
        intuitive and aesthetically pleasing interfaces with ease.
      </ProductCard>

      <ProductCard icon={LuPalette} title={"Color Scheme Generator"}>
        Find the perfect color palette for your project with our Color Scheme
        Generator. Generate harmonious and trendy color combinations instantly.
      </ProductCard>

      <ProductCard icon={LuShapes} title={"Layout Optimizer"}>
        Optimize your layouts with our Layout Optimizer. Achieve the perfect
        balance and composition for your designs automatically.
      </ProductCard>
    </Grid>
  );
};

export default Design;
