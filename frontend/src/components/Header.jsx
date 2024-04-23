import { Flex } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'


const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex justifyContent={"center"} mt={6} mb={12}>
            <Text cursor={"pointer"} onClick={toggleColorMode} fontSize={"2xl"} textColor={colorMode === "dark" ? "whiteAlpha.900" : "gray.800"} >ConnectHire</Text>

        </Flex>
    )
}

export default Header
