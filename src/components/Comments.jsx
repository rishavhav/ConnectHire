import { Divider, Flex, Avatar, Text, Box, Image } from "@chakra-ui/react"
import { BsThreeDots } from "react-icons/bs"
import Actions from "./Actions"
import { useColorModeValue } from "@chakra-ui/react"
import { useState } from "react"

const Comments = () => {
  const [liked, setLiked] = useState(false)
  const dividerColor = useColorModeValue("1.5px solid black", "1.5px solid white")
  return (
    <>
      <Flex gap={2} justifyContent="space-between" w="full" alignItems="flex-start">
        <Box>
          <Avatar size="md" name="Dan Abramov" src="https://bit.ly/dan-abramov" />
        </Box>

        <Flex flexDirection="row" justifyContent="space-between" flex={1}>
          <Box>
            <Flex alignItems="center">
              <Text fontWeight="bold">Dan Abramov</Text>
              <Image src="/verified.png" w={4} h={4} ml={1} />
            </Flex>
            <Text fontSize="sm" mt={1}>
              Hello HireConnect!
            </Text>
            <Actions liked={liked} setLiked={setLiked} />
          </Box>

          <Flex flexDirection="row" alignContent={"center"} gap={1}>
            <Text fontSize="sm" color="gray.500">
              1d
            </Text>
            <BsThreeDots />
          </Flex>
        </Flex>
      </Flex>
      <Divider borderColor={dividerColor} w="full" />
    </>
  )
}

export default Comments
