import { Stack, Flex, VStack } from "@chakra-ui/react"
import { Box, Avatar, Text, Button, WrapItem } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"
import { useRecoilValue } from "recoil"
import userAtom from "../atoms/userAtom"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import useShowToast from "../hooks/useShowToast"

const UserHeader = ({ user }) => {
  const loggedInUser = useRecoilValue(userAtom)
  const [following, setFollowing] = useState(user.followers.includes(loggedInUser._id))

  const postTabColor = useColorModeValue("1.5px solid black", "1.5px solid white")
  const repliesTabColor = useColorModeValue("1.5px solid gray", "1.5px solid gray")
  const showToasts = useShowToast()
  const [followersCount, setFollowersCount] = useState(user.followers.length)
  const [updating, setUpdating] = useState(false)

  useEffect(() => {
    console.log("loggedInUser", loggedInUser)
  }, [loggedInUser])

  const handleFollowUnfollow = async () => {
    if (!loggedInUser) {
      showToasts("Error", "Please login to follow/unfollow", "error")
      return
    }
    setUpdating(true)
    try {
      const response = await fetch(`/api/users/follow/${user._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      const data = await response.json()
      if (data.error) {
        showToasts("Error", data.error, "error")
        return
      }
      if (following) {
        showToasts("Success", `Unfollowed ${user.name}`, "success")
        setFollowersCount((prev) => prev - 1)
      } else {
        showToasts("Success", `Followed ${user.name}`, "success")
        setFollowersCount((prev) => prev + 1)
      }
      setFollowing(!following)
    } catch (error) {
      showToasts("Error", error, "error")
    } finally {
      setUpdating(false)
    }
  }

  return (
    <>
      <VStack gap={4} alignItems={"start"}>
        <Flex justifyContent={"space-between"} w={"full"}>
          <Box>
            <VStack gap={4} alignItems={"start"}>
              <Text fontWeight={"semibold"} fontSize={"2xl"}>
                {user.name}
              </Text>
              <Flex gap={2} alignItems={"center"}>
                <Text fontSize={"sm"} color={"gray.500"}>
                  @{user.username}
                </Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  •
                </Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  {followersCount} followers
                </Text>
              </Flex>
              <Box paddingTop={""}>
                <Flex>
                  <Text fontWeight={"semibold"} paddingRight={2}>
                    Works at:
                  </Text>
                  {user.bio}
                </Flex>
                <Box>📍 Rochester, NY</Box>
              </Box>
            </VStack>
          </Box>
          <Box>
            <VStack>
              {user.profilePic ? <Avatar size="xl" name={user.name} src={user.profilePic} /> : <Avatar size="xl" name={user.name} src={user.profilePic} />}
              {loggedInUser._id === user._id ? (
                <Button as={Link} to="/update" colorScheme="orange">
                  Update Profile
                </Button>
              ) : (
                <Button colorScheme="orange" onClick={handleFollowUnfollow} isLoading={updating}>
                  {following ? "Unfollow" : "Follow"}
                </Button>
              )}
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
      </VStack>
    </>
  )
}

export default UserHeader
