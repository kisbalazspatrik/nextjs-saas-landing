import { StargateColors } from "#/src/utils/Colors";
import { Icon } from "@chakra-ui/react";
import React from "react";

const FooterTopSVG = () => {
  return (
    <Icon
      viewBox="0 0 1440 52"
      fill={StargateColors.white}
      w={"100%"}
      h={"auto"}
      position={"absolute"}
      top={"-1px"}
      left={0}
      overflow={"hidden"}
      transform={"rotate(180deg)"}
      zIndex={-1}
    >
      <path d="M0,0c240,34.3,480,51.5,720,51.5S1200,34.3,1440,0v52H0V0z" />
    </Icon>
  );
};

export default FooterTopSVG;
