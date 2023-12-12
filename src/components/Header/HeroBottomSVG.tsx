import { StargateColors } from "#/src/utils/Colors";
import { Icon } from "@chakra-ui/react";
import React from "react";

const HeroBottomSVG = () => {
  return (
    <Icon
      viewBox="0 0 1440 104.1"
      fill={StargateColors.white}
      w={"100%"}
      h={"auto"}
      position={"absolute"}
      bottom={"-1px"}
      overflow={"hidden"}
    >
      <path d="M0 0C240 68.7147 480 103.072 720 103.072C960 103.072 1200 68.7147 1440 0V104.113H0V0Z"></path>
    </Icon>
  );
};

export default HeroBottomSVG;
