import React from "react"
import { useRecoilValue } from "recoil"
import searchAtom from "../atoms/searchAtom"
import { VStack, WrapItem, Avatar, SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button, HStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import userAtom from "../atoms/userAtom"

const SearchPage = () => {
  const searchResults = useRecoilValue(searchAtom)
  const defaultProfilePic = "/dummyUser.webp"
  const navigate = useNavigate()
  const loggedInUser = useRecoilValue(userAtom)
  console.log("loggedInUser", loggedInUser)

  const checkFollowing = (user) => {
    if (user.following.includes(loggedInUser._id)) return true
    return false
  }

  return (
    <>
      <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        {searchResults.map((user) => {
          return (
            <Card key={user.username} className="flex justify-center">
              <CardHeader>
                <VStack>
                  <WrapItem>
                    <Avatar size={"xl"} name={user.username} src={user.profilePic || defaultProfilePic} />
                  </WrapItem>
                  <Heading size="md">{user.name}</Heading>
                </VStack>
              </CardHeader>
              <CardBody>
                <VStack>
                  <Text mt={-6}>{user.bio}</Text>
                </VStack>
              </CardBody>
              <CardFooter className="flex justify-center -mt-6">
                <HStack>
                  {checkFollowing(user) ? (
                    <Button
                      colorScheme="green"
                      onClick={() => {
                        console.log("Unfollow")
                      }}
                    >
                      Follow
                    </Button>
                  ) : (
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        console.log("Follow")
                      }}
                    >
                      Unfollow
                    </Button>
                  )}
                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      navigate(`/${user.username}`)
                    }}
                  >
                    Visit Profile
                  </Button>
                </HStack>
              </CardFooter>
            </Card>
          )
        })}
      </SimpleGrid>
    </>
  )
}

export default SearchPage
