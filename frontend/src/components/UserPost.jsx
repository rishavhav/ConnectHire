import { Link } from "react-router-dom"
import { Flex, Avatar, Box, AvatarGroup, Text, Image } from "@chakra-ui/react"
import { BsThreeDots } from "react-icons/bs"
import Actions from "./Actions"
import { useState } from "react"

const UserPost = ({ likesCount, commentsCount, postImage, postTitle }) => {
  const [liked, setLiked] = useState(false)

  return (
    <Link to={"/dan_abramov/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar size={"md"} name="Dan abramov" src={"https://bit.ly/dan-abramov"} />
          <Box w={"1px"} h={"full"} bg="gray.light" py={2}></Box>
          <Box position={"relative"} w={"full"}>
            <AvatarGroup size="xs" max={2}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
          </Box>
        </Flex>
        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                Dan abramov
              </Text>
              <Image src="/verified.png" w={4} h={4} ml={1} />
            </Flex>
            <Flex gap={4} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>
                1d
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text fontSize={"sm"}> {postTitle} </Text>
          {postImage && (
            <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
              <Image src={postImage} w={"full"} objectFit={"cover"} />
            </Box>
          )}
          <Actions liked={liked} setLiked={setLiked} />
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {likesCount} likes
            </Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              •
            </Text>
            <Text fontSize={"sm"} color={"gray.light"}>
              {commentsCount} comments
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  )
}

export default UserPost
