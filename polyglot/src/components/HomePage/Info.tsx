import { Map } from "@/assets/Images/Map";
import { PolyGlot } from "@/assets/Images/PolyGlot";
import { PolyGlotBlue } from "@/assets/Images/PolyGlot-Blue";
import { Study } from "@/assets/Images/Study";
import { CaretDown } from "@/assets/icons/CaretDown";
import {
  Box,
  Button,
  Container,
  HStack,
  Stack,
  Text,
  textDecoration,
} from "@chakra-ui/react";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Info = () => {
  return (
    <>
      <Box height="15vh" width="100%" bgColor="#F7F7FA">
        <HStack justify="center" p="3" w="90%" m="auto">
          <HStack justify="space-between" width="100%" pt="5">
            <HStack align="center" spacing="10">
              <PolyGlotBlue />
              <Link href="#">
                <Text
                  _hover={{ textDecoration: "underline" }}
                  textAlign="center"
                  fontSize="sm"
                  fontWeight="bold"
                  color="#0D0C1D"
                >
                  Termos de Uso
                </Text>
              </Link>
              <Link href="#">
                <Text
                  _hover={{ textDecoration: "underline" }}
                  textAlign="center"
                  fontSize="sm"
                  fontWeight="bold"
                  color="#0D0C1D"
                >
                  Política de Privacidade
                </Text>
              </Link>
            </HStack>
            <HStack align="center">
              <Link href="#">
                <Instagram />
              </Link>
              <Link href="#">
                <Facebook />
              </Link>
              <Link href="#">
                <LinkedIn />
              </Link>
            </HStack>
          </HStack>
        </HStack>
        <Text
          textAlign="center"
          fontSize="sm"
          fontWeight="bold"
          color="#0D0C1D"
        >
          ©2024 PolyGlot Ltd
        </Text>
      </Box>
    </>
  );
};
