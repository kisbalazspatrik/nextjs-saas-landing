import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuBarChart, LuInstagram, LuMegaphone } from "react-icons/lu";

const Marketing = () => {
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
      <ProductCard icon={LuMegaphone} title={"Target Audience Analyzer"}>
        Understand your audience better with our AI Target Audience Analyzer.
        Gain insights into customer preferences and behaviors for tailored
        marketing strategies.
      </ProductCard>

      <ProductCard icon={LuBarChart} title={"Marketing Campaign Optimizer"}>
        Maximize your campaign's impact with our AI Marketing Campaign
        Optimizer. Utilize data-driven approaches to enhance reach and
        engagement.
      </ProductCard>

      <ProductCard icon={LuInstagram} title={"Social Media Trend Tracker"}>
        Stay ahead of the curve with our AI Social Media Trend Tracker. Identify
        and leverage the latest trends for effective social media marketing.
      </ProductCard>
    </Grid>
  );
};

export default Marketing;
