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
      <a
        onClick={() => {
          window.location.href = `/${user.username}`
        }}
        cursor="pointer"
      >
        <Avatar size="sm" name={user.username} src={user.profilePic} mr={2} />
      </a>
    </>
  )
}

export default MyProfileButton
