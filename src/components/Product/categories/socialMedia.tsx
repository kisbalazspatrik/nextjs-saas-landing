import { Grid } from "@chakra-ui/react";
import React from "react";
import { LuBarChartBig, LuPodcast, LuTrendingUp } from "react-icons/lu";
import { ProductCard } from "../card";

const SocialMedia = () => {
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
      <ProductCard icon={LuPodcast} title={"Social Media Content Generator"}>
        Create engaging content effortlessly with our Social Media Content
        Generator. Tailor posts to your audience and maintain a consistent
        online presence.
      </ProductCard>

      <ProductCard icon={LuTrendingUp} title={"Engagement Booster"}>
        Boost your social media engagement with our Engagement Booster. Analyze
        trends and optimize your posts for maximum interaction.
      </ProductCard>

      <ProductCard icon={LuBarChartBig} title={"Audience Insight Analyzer"}>
        Gain deeper insights into your audience with our Audience Insight
        Analyzer. Understand preferences and behaviors to enhance your social
        media strategy.
      </ProductCard>
    </Grid>
  );
};

export default SocialMedia;
