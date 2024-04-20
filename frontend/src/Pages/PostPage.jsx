import { Avatar, Flex, Text, Image, Box, VStack, Divider } from "@chakra-ui/react"
import { BsThreeDots } from "react-icons/bs"
import Actions from "../components/Actions"
import { useState } from "react"
import { useColorModeValue } from "@chakra-ui/react"
import Comments from "../components/Comments"

const PostPage = () => {
  const [liked, setLiked] = useState(false)
  const dividerColor = useColorModeValue("1.5px solid black", "1.5px solid white")
  return (
    <>
      <VStack gap={4} alignItems={"start"}>
        <Flex justifyContent={"space-between"} w={"full"}>
          <Flex w={"full"} alignItems={"center"} gap={3}>
            <Avatar size={"md"} name="Dan abramov" src={"https://bit.ly/dan-abramov"} />
            <Flex flexDirection={"row"} alignItems={"center"} gap={1}>
              <Text fontWeight={"bold"}>Rishav Soam</Text>
              <Image src="/verified.png" w={4} h={4} />
            </Flex>
          </Flex>
          <Flex alignItems={"center"} gap={2}>
            <Text fontSize={"sm"} color={"gray.light"}>
              1d
            </Text>
            <BsThreeDots />
          </Flex>
        </Flex>

        <Text fontSize={"lg"}>Hello HireConnect!</Text>
        <Box borderRadius={6} w={"full"} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
          <Image src={"https://bit.ly/dan-abramov"} w={"full"} objectFit={"cover"} />
        </Box>
        <Actions liked={liked} setLiked={setLiked} />
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {890 + (liked ? 1 : 0)} likes
          </Text>
          <Text fontSize={"sm"} color={"gray.500"}>
            •
          </Text>
          <Text fontSize={"sm"} color={"gray.light"}>
            34 comments
          </Text>
        </Flex>
        <Divider borderColor={dividerColor} />
        <Comments userAvatar={"https://bit.ly/dan-abramov"} createdAt={"1d"} comment={"This is dope!"} username={"dan_more"} likes={300} />
        <Comments userAvatar={"https://bit.ly/dan-abramov"} createdAt={"1d"} comment={"This is dope!"} username={"dan_more"} likes={300} />
      </VStack>
    </>
  )
}

export default PostPage
