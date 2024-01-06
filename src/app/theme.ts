import { Inter } from "next/font/google";
import { extendTheme } from "@chakra-ui/react";

const inter = Inter({
  subsets: ["latin"],
});

export const customTheme = extendTheme({
  fonts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily,
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
