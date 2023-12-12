"use client";
import type { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "../app/theme";

export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
}
