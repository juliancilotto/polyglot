import { Map } from "@/assets/Images/Map";
import { PolyGlot } from "@/assets/Images/PolyGlot";
import { Study } from "@/assets/Images/Study";
import { CaretDown } from "@/assets/icons/CaretDown";
import { Box, Button, Container, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const WhyJoin = () => {
  return (
    <>
      <Box height="100vh" width="100%" bgColor="#F7F7FA">
        <Stack spacing="16" m="5">
          <Text
            textAlign="center"
            fontSize="4xl"
            fontWeight="bold"
            color="#0D0C1D"
          >
            Por que se juntar ao PolyGlot?
          </Text>
          <HStack justify="center" spacing="10">
            <Stack width="45%" spacing="5">
              <Box>
                <Text color="#474973" fontWeight="bold" fontSize="lg">
                  Diversidade de Idiomas
                </Text>
                <Text color="#0D0C1D">
                  Explore uma vasta seleção de idiomas, do mais popular ao mais
                  exótico. Seja qual for o idioma que seu coração deseja
                  aprender, nós temos!
                </Text>
              </Box>
              <Box>
                <Text color="#474973" fontWeight="bold" fontSize="lg">
                  Métodos Personalizados
                </Text>
                <Text>
                  Com nossa abordagem personalizada de aprendizado, adaptamos o
                  conteúdo às suas necessidades e ao seu ritmo. Aprender nunca
                  foi tão eficaz e divertido.
                </Text>
              </Box>
              <Box>
                <Text color="#474973" fontWeight="bold" fontSize="lg">
                  Ferramentas Interativas
                </Text>
                <Text>
                  Utilize nossas ferramentas interativas para melhorar sua
                  pronúncia, enriquecer seu vocabulário e testar seu
                  conhecimento com jogos e quizzes envolventes.
                </Text>
              </Box>
              <Box>
                <Text color="#474973" fontWeight="bold" fontSize="lg">
                  Acesso Gratuito
                </Text>
                <Text>
                  Comece sua jornada de aprendizado sem custos. Acreditamos no
                  acesso livre ao conhecimento e na democratização do
                  aprendizado de idiomas.
                </Text>
              </Box>
            </Stack>
            <Study />
          </HStack>
        </Stack>
      </Box>
    </>
  );
};
