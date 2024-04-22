import userAtom from "../atoms/userAtom"
import { useRecoilValue } from "recoil"
import { Avatar, Button } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import { useColorModeValue } from "@chakra-ui/react"

const MyProfileButton = () => {
  const user = useRecoilValue(userAtom)
  const location = useLocation()

  return (
    <>
      {!location.pathname.includes(user.username) && (
        <Button
          bg={useColorModeValue("gray.200", "#101010")}
          position="fixed"
          top="30px"
          left="30px"
          size={"sm"}
          onClick={() => {
            window.location.href = `/${user.username}`
          }}
        >
          <Avatar size="sm" name={user.username} src={user.profilePic} mr={2} />
          {user.username}
        </Button>
      )}
    </>
  )
}

export default MyProfileButton
