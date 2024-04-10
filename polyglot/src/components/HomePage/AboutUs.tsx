import { Map } from "@/assets/Images/Map";
import { PolyGlot } from "@/assets/Images/PolyGlot";
import { CaretDown } from "@/assets/icons/CaretDown";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % 5);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Box height="100vh" width="100%" bgColor="#0D0C1D">
        <Stack spacing="6">
          <HStack justify="center" p="3" w="90%" m="auto">
            <Text color="#F1DAC4" fontSize="4xl" fontWeight="bold">
              O que falam sobre nós
            </Text>
          </HStack>
          <HStack justify="center" p="5" w="90%" m="auto" spacing="3">
            {Array.from({ length: 5 }).map((_, index) => (
              <Card
                key={index}
                opacity={index === currentSlide ? 1 : 0.5}
                transition="opacity 0.5s ease"
                bgColor="#A69CAC"
                width="20%"
                h="lg"
              >
                <Stack justify="center" m="5" spacing="8">
                  <Stack justify="center" align="center" spacing="1">
                    <Avatar bgColor="#636B97" name="Nome User" boxSize="20" />
                    <Text color="#636B97" fontWeight="bold">
                      Nome User
                    </Text>
                  </Stack>
                  <Text color="#2D3250" textAlign="center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor minima vero animi harum est quo saepe, ex optio
                    doloribus quasi atque eum labore repellat, molestiae unde,
                    architecto quas nesciunt aliquam?
                  </Text>
                </Stack>
              </Card>
            ))}
          </HStack>
        </Stack>
      </Box>
    </>
  );
};
