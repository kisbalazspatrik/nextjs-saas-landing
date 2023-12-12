"use client";
import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { LuMenu, LuX } from "react-icons/lu";
import { motion } from "framer-motion";
import { StargateColors } from "#/src/utils/Colors";
import useBannerVisibility from "#/src/utils/BannerVisibility";

const NavItems = [
  { name: "Features", href: "/#features" },
  { name: "Product", href: "/#product" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Contact", href: "/#contact" },
];

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner] = useBannerVisibility("stargate-banner");
  const [activeSection, setActiveSection] = useState("");
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > (showBanner ? 45 : 0));

      // Adjust these IDs to match the actual IDs of your sections
      const sectionIDs = NavItems.map((item) => item.name.toLowerCase());

      const currentSection = sectionIDs.find((sectionID) => {
        const sectionElement = document.getElementById(sectionID);
        if (sectionElement) {
          const { top, bottom } = sectionElement.getBoundingClientRect();
          const isSectionInView =
            top < window.innerHeight * 0.25 &&
            bottom > window.innerHeight * 0.75;
          return isSectionInView;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(`${currentSection}`);
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showBanner]);

  return (
    <>
      <Flex
        position={isScrolled ? "fixed" : "absolute"}
        top={isScrolled ? 0 : "auto"}
        zIndex={100}
        bg={isScrolled ? "white" : "#ffffff25"}
        w="100%"
        justify="center"
        align="center"
        backdropFilter="blur(24px)"
        minH={75}
        transition="all .25s ease"
        borderBottom="1px solid #ffffff50"
        direction="column"
      >
        <Flex
          maxW={1440}
          w="100%"
          py={5}
          px={{ base: 10, xl: 0 }}
          align="center"
          justify="space-between"
        >
          <Text
            as={Link}
            href="/"
            fontSize="3xl"
            userSelect="none"
            color={isScrolled ? "black" : "white"}
            fontWeight={600}
          >
            Stargate
          </Text>
          <Flex
            gap={5}
            display={{ base: "none", lg: "flex" }}
            color={isScrolled ? "black" : "white"}
          >
            {NavItems.map((item, index) => (
              <Flex
                as={Link}
                href={item.href}
                key={index}
                px={5}
                py={2}
                borderRadius={12}
                transition="all .25s ease"
                _hover={{ bg: isScrolled ? "#00000010" : "#ffffff25" }}
                bg={
                  activeSection === item.name.toLowerCase()
                    ? isScrolled
                      ? "#00000010"
                      : "#ffffff25"
                    : "transparent"
                }
              >
                <Text>{item.name}</Text>
              </Flex>
            ))}
          </Flex>

          <Flex gap={4} display={{ base: "none", lg: "flex" }}>
            <Button variant="link" color={isScrolled ? "black" : "white"}>
              Log in
            </Button>
            <Button
              as={motion.a}
              whileHover={{ scale: 1.1 }}
              href="#"
              rounded="full"
              background={isScrolled ? StargateColors.primary : "white"}
              color={isScrolled ? "white" : "black"}
              _hover={{ bg: isScrolled ? StargateColors.primary : "white" }}
            >
              Start for free
            </Button>
          </Flex>

          <IconButton
            icon={isOpen ? <Icon as={LuX} /> : <Icon as={LuMenu} />}
            aria-label="Hamburger menu"
            variant="unstyled"
            onClick={onToggle}
            color={isScrolled ? "black" : "white"}
            display={{ base: "flex", lg: "none" }}
            fontSize={"lg"}
          />
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Flex
            zIndex={10000}
            w="100%"
            justify="center"
            align="center"
            display={{ base: "flex", md: "none" }}
            direction="column"
            mb={5}
            gap={5}
          >
            {NavItems.map((item, index) => (
              <Flex
                as={Link}
                href={item.href}
                key={index}
                color={isScrolled ? "black" : "white"}
              >
                <Text>{item.name}</Text>
              </Flex>
            ))}
            <Flex gap={5} mt={5}>
              <Button variant="link" color={isScrolled ? "black" : "white"}>
                Log in
              </Button>
              <Button
                as={motion.a}
                whileHover={{ scale: 1.1 }}
                href="#"
                rounded="full"
                background={isScrolled ? StargateColors.primary : "white"}
                color={isScrolled ? "white" : "black"}
              >
                Start for free
              </Button>
            </Flex>
          </Flex>
        </Collapse>
      </Flex>
    </>
  );
};

export default Navbar;
