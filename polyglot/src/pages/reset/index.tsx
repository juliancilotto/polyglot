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
import {
  ArrowLeft,
  ArrowLeftOutlined,
  ArrowLeftSharp,
  ArrowRight,
  KeyboardArrowLeft,
} from "@mui/icons-material";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

const ResetPassword = () => {
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
                      Esqueceu sua Senha?
                    </Text>
                  </Stack>
                  <Text fontSize="lg" fontWeight="regular">
                    Não se preocupe, redefina sua senha agora mesmo.
                  </Text>
                </Stack>
              </HStack>
            </HStack>
          </Stack>
        </Box>
        <Box height="100vh" width="50%" bgColor="#F7F7FA">
          <Stack pt="32">
            <Stack justify="center" align="center" p="5" m="auto" spacing="6">
              <Stack spacing="0" align="center">
                <Text color="#0A0A17" fontSize="4xl" fontWeight="bold">
                  Resetar Senha
                </Text>
              </Stack>
              <Card bgColor="#0A0A17" width="md" h="4xs" p="4">
                <Stack spacing="6">
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
                      Resetar
                    </Button>
                  </Link>
                </Stack>
              </Card>
              <Link href="/login">
                <HStack spacing="0" _hover={{ textDecoration: "underline" }}>
                  <KeyboardArrowLeft />
                  <Text>Voltar para login</Text>
                </HStack>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default ResetPassword;
