import { Stack, Flex, VStack } from '@chakra-ui/react'
import { Box, Avatar, Text, Button, WrapItem } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

const UserHeader = () => {

    const postTabColor = useColorModeValue("1.5px solid black", "1.5px solid white")
    const repliesTabColor = useColorModeValue("1.5px solid gray", "1.5px solid gray")

    return (

        <>
            <VStack gap={4} alignItems={"start"}>
                <Flex justifyContent={"space-between"} w={"full"}>
                    <Box>
                        <VStack gap={4} alignItems={"start"}>
                            <Text fontSize={"2xl"}>
                                Dan Abrahmov
                            </Text>
                            <Flex gap={2} alignItems={"center"}>
                                <Text fontSize={"sm"} color={"gray.500"}>
                                    @dan_abramov
                                </Text>
                                <Text fontSize={"sm"} color={"gray.500"}>
                                    •
                                </Text>
                                <Text fontSize={"sm"} color={"gray.500"}>
                                    10m followers
                                </Text>
                            </Flex>
                            <Box paddingTop={""}>

                                <Box >
                                    Software Engineer @ Facebook
                                </Box>
                                <Box>
                                    Rochester, NY
                                </Box>

                            </Box>
                        </VStack>
                    </Box>
                    <Box>
                        <VStack>
                            <Avatar
                                size="xl"
                                name="Dan Abrahmov"
                                src="https://bit.ly/dan-abramov"
                            />
                            <WrapItem>
                                <Button colorScheme='orange'>Follow</Button>
                            </WrapItem>
                        </VStack>
                    </Box>

                </Flex>
                <Flex w={"full"}>
                    <Flex flex={1} borderBottom={postTabColor} justifyContent={"center"} pb={3} cursor={"pointer"}>
                        <Text fontWeight={"bold"}>Posts</Text>
                    </Flex>
                    <Flex flex={1} borderBottom={repliesTabColor} justifyContent={"center"} color={"gray.light"} pb={3} cursor={"pointer"}>
                        <Text fontWeight={"bold"}>Replies</Text>
                    </Flex>
                </Flex>
            </VStack >

        </>

    )
}

export default UserHeader
