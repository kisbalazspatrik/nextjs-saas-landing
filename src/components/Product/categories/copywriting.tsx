import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuLayers, LuPenLine, LuText } from "react-icons/lu";

const Copywriting = () => {
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
      <ProductCard icon={LuText} title={"Headline Optimizer"}>
        Elevate your headlines with our Headline Optimizer. Craft compelling,
        click-worthy headlines that boost engagement and attract more readers.
      </ProductCard>

      <ProductCard icon={LuPenLine} title={"Copy Editing Assistant"}>
        Refine your copy effortlessly with our Copy Editing Assistant. Improve
        clarity, tone, and style while maintaining your unique voice.
      </ProductCard>

      <ProductCard icon={LuLayers} title={"Ad Copy Generator"}>
        Create persuasive ad copy in seconds with our Ad Copy Generator.
        Increase conversions with tailored, impactful messages for your target
        audience.
      </ProductCard>
    </Grid>
  );
};

export default Copywriting;
