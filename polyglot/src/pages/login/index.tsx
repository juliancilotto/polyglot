import { Map } from "@/assets/Images/Map";
import { PolyGlot } from "@/assets/Images/PolyGlot";
import { CaretDown } from "@/assets/icons/CaretDown";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Login = () => {
  return (
    <>
      <Flex>
        <Box
          height="100vh"
          width="50%"
          bgGradient="linear(to-t, #0D0C1D, #3B3683)"
        >
          <Stack spacing="20">
            <HStack justify="center" p="3" w="90%" m="auto">
              <HStack justify="space-between" width="100%">
                <PolyGlot />
              </HStack>
            </HStack>
            <HStack justify="center" p="5" w="90%" m="auto">
              <HStack justify="space-between" width="100%">
                <Stack w="75%" color="#F1DAC4" spacing="6">
                  <Stack w="75%" spacing="0">
                    <Text fontSize="4xl" fontWeight="bold">
                      Bem-vindo de volta ao PolyGlot!
                    </Text>
                  </Stack>
                  <Text fontSize="lg" fontWeight="regular">
                    Estamos felizes em vê-lo novamente! Pronto para mergulhar no
                    mundo dos idiomas e explorar novas culturas? Faça login para
                    continuar sua jornada de aprendizado, descobrir novos
                    horizontes e conectar-se com entusiastas de idiomas do mundo
                    todo.
                  </Text>
                </Stack>
              </HStack>
            </HStack>
          </Stack>
        </Box>
        <Box height="100vh" width="50%" bgColor="#F7F7FA">
          <Stack pt="20">
            <Stack justify="center" align="center" p="5" m="auto" spacing="6">
              <Stack spacing="0" align="center">
                <Text color="#0A0A17" fontSize="4xl" fontWeight="bold">
                  Acesse sua Conta
                </Text>

                <HStack>
                  <Text color="#0A0A17" fontSize="md" fontWeight="regular">
                    Não possui uma conta?
                  </Text>
                  <Link href="/signup">
                    <Text
                      color="#636B97"
                      fontSize="md"
                      fontWeight="bold"
                      _hover={{ textDecor: "underline" }}
                    >
                      Cadastre-se
                    </Text>
                  </Link>
                </HStack>
              </Stack>
              <Card bgColor="#0A0A17" width="md" h="xs" p="4">
                <Stack spacing="6">
                  <Stack spacing="6">
                    <FormControl isRequired>
                      <FormLabel color="#F1DAC4">Email</FormLabel>
                      <Input bgColor="#636B97" border="none" color="#F1DAC4" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel color="#F1DAC4">Senha</FormLabel>
                      <Input bgColor="#636B97" border="none" color="#F1DAC4" />
                    </FormControl>
                    <HStack justify="space-between">
                      <HStack>
                        <Checkbox colorScheme="purple" />
                        <Text
                          color="#F1DAC4"
                          fontSize="md"
                          fontWeight="semibold"
                        >
                          Lembrar-se
                        </Text>
                      </HStack>
                      <Link href="/reset/search">
                        <Text
                          color="#F1DAC4"
                          fontSize="md"
                          fontWeight="semibold"
                          _hover={{ textDecor: "underline" }}
                        >
                          Esqueceu sua senha?
                        </Text>
                      </Link>
                    </HStack>
                  </Stack>
                  <Link href="#">
                    <Button
                      w="100%"
                      textAlign="center"
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
                  </Link>
                </Stack>
              </Card>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
