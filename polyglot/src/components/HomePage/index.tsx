import { Map } from "@/assets/Images/Map";
import { PolyGlot } from "@/assets/Images/PolyGlot";
import { CaretDown } from "@/assets/icons/CaretDown";
import { Box, Button, Container, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const HomePage = () => {
  return (
    <>
      <Box height="100vh" width="100%" bgColor="#0D0C1D">
        <Stack spacing="20">
          <HStack justify="center" p="3" w="90%" m="auto">
            <HStack justify="space-between" width="100%">
              <PolyGlot />
              <HStack spacing="8">
                <Button
                  fontWeight="bold"
                  border="2px solid #F1DAC4"
                  variant="outline"
                  color="#F1DAC4"
                  _hover={{
                    bgColor: "#EAC7A7",
                    color: "#0D0C1D",
                    fontWeight: "bold",
                  }}
                >
                  ENTRAR
                </Button>
                <Button
                  fontWeight="bold"
                  variant="transparent"
                  color="#F1DAC4"
                  _hover={{
                    bgColor: "#EAC7A7",
                    color: "#0D0C1D",
                    fontWeight: "bold",
                  }}
                >
                  <HStack>
                    <Text>IDIOMA</Text>
                    <CaretDown />
                  </HStack>
                </Button>
              </HStack>
            </HStack>
          </HStack>
          <HStack justify="center" p="5" w="90%" m="auto">
            <HStack justify="space-between" width="100%">
              <Stack w="45%" color="#F1DAC4" spacing="6">
                <Stack spacing="0">
                  <Text fontSize="4xl" fontWeight="bold">
                    Explore, Conecte-se, Domine.
                  </Text>
                  <Text fontSize="4xl" fontWeight="bold">
                    Sua Aventura Começa Agora!
                  </Text>
                </Stack>
                <Text fontSize="md" fontWeight="regular">
                  Na PolyGlot, acreditamos que aprender novos idiomas é abrir
                  portas para o mundo, conectar culturas e construir pontes
                  entre pessoas. Seja você um apaixonado por viagens, um
                  aspirante a poliglota, ou alguém que deseja expandir suas
                  oportunidades profissionais, você está no lugar certo!
                </Text>
                <Box>
                  <Button
                    fontWeight="bold"
                    variant="outline"
                    bgColor="#F1DAC4"
                    _hover={{
                      bgColor: "#EAC7A7",
                      color: "#0D0C1D",
                      fontWeight: "bold",
                    }}
                  >
                    CADASTRE-SE
                  </Button>
                </Box>
              </Stack>
              <Map />
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </>
  );
};
