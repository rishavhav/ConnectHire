import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import authScreenAtom from "../atoms/authAtom"
import { useSetRecoilState } from "recoil"

const LoginCard = () => {
  const setValue = useSetRecoilState(authScreenAtom)

  return (
    <>
      <Flex className="bg-gray-200" align={"center"} justify={"center"} bg={useColorModeValue("gray.200", "#101010")}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"3xl"} className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Sign in to your ConnectHire
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to match with <Link color={"blue.400"}>dream job</Link> 🤝
            </Text>
          </Stack>
          <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Username</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: "column", sm: "row" }} align={"start"} justify={"space-between"}>
                  <Text>
                    Dont have an account?
                    <Link
                      color={"blue.400"}
                      ml={2}
                      onClick={() => {
                        setValue("signup")
                      }}
                    >
                      Sign up
                    </Link>
                  </Text>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  )
}

export default LoginCard
