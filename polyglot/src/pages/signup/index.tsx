import { Map } from "@/assets/Images/Map";
import { PolyGlot } from "@/assets/Images/PolyGlot";
import { CaretDown } from "@/assets/icons/CaretDown";
import { Eye } from "@/assets/icons/Eye";
import { EyeSlash } from "@/assets/icons/EyeSlash";
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
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  textDecoration,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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
                      Bem-vindo ao PolyGlot!
                    </Text>
                  </Stack>
                  <Text fontSize="lg" fontWeight="regular">
                    Estamos entusiasmados por ter você conosco nesta jornada
                    incrível através das línguas e culturas do mundo. Ao
                    registrar-se no PolyGlot, você está prestes a abrir um
                    portal para o aprendizado, a conexão global e o
                    enriquecimento pessoal.
                  </Text>
                </Stack>
              </HStack>
            </HStack>
          </Stack>
        </Box>
        <Box height="100vh" width="50%" bgColor="#F7F7FA">
          <Stack pt="12">
            <Stack justify="center" align="center" p="5" m="auto" spacing="6">
              <Stack spacing="0" align="center">
                <Text color="#0A0A17" fontSize="4xl" fontWeight="bold">
                  Crie sua Conta
                </Text>

                <HStack>
                  <Text color="#0A0A17" fontSize="md" fontWeight="regular">
                    Já possui uma conta?
                  </Text>
                  <Link href="/login">
                    <Text
                      color="#636B97"
                      fontSize="md"
                      fontWeight="bold"
                      _hover={{ textDecor: "underline" }}
                    >
                      Entrar
                    </Text>
                  </Link>
                </HStack>
              </Stack>
              <Card bgColor="#0A0A17" width="md" h="md" p="4">
                <Stack spacing="8">
                  <Stack spacing="6">
                    <HStack>
                      <FormControl isRequired>
                        <FormLabel color="#F1DAC4">Nome</FormLabel>
                        <Input
                          bgColor="#636B97"
                          border="none"
                          color="#F1DAC4"
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel color="#F1DAC4">Sobrenome</FormLabel>
                        <Input
                          bgColor="#636B97"
                          border="none"
                          color="#F1DAC4"
                        />
                      </FormControl>
                    </HStack>
                    <FormControl isRequired>
                      <FormLabel color="#F1DAC4">Email</FormLabel>
                      <Input bgColor="#636B97" border="none" color="#F1DAC4" />
                    </FormControl>
                    <HStack>
                      <FormControl isRequired>
                        <FormLabel color="#F1DAC4">Senha</FormLabel>
                        <InputGroup size="md">
                          <Input
                            type={showPassword ? "text" : "password"}
                            bgColor="#636B97"
                            border="none"
                            color="#F1DAC4"
                          />
                          <InputRightElement width="4.5rem">
                            <Button
                              size="xs"
                              variant="ghost"
                              right="-15px"
                              colorScheme="teal"
                              _hover={{ bgColor: "none" }}
                              onClick={() => setShowPassword((state) => !state)}
                            >
                              {showPassword ? <Eye /> : <EyeSlash />}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel color="#F1DAC4">Confirmar Senha</FormLabel>
                        <InputGroup size="md">
                          <Input
                            type={showConfirm ? "text" : "password"}
                            bgColor="#636B97"
                            border="none"
                            color="#F1DAC4"
                          />
                          <InputRightElement width="4.5rem">
                            <Button
                              size="xs"
                              variant="ghost"
                              right="-15px"
                              colorScheme="teal"
                              _hover={{ bgColor: "none" }}
                              onClick={() => setShowConfirm((state) => !state)}
                            >
                              {showConfirm ? <Eye /> : <EyeSlash />}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                    </HStack>
                  </Stack>
                  <HStack textAlign="center" justify="space-between">
                    <Text color="#F1DAC4" fontSize="xs">
                      Ao clicar em Criar conta, você aceita os{" "}
                      <Link href="#" target="_blank">
                        Termos de Uso
                      </Link>{" "}
                      e a{" "}
                      <Link href="#" target="_blank">
                        Política de Privacidade
                      </Link>{" "}
                      da PolyGlot.
                    </Text>
                  </HStack>
                  <Link href="#">
                    <Button
                      w="100%"
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
                      Criar Conta
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

export default Signup;
