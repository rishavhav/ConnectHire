import { useEffect } from "react"
import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"
import { useParams } from "react-router-dom"
import useShowToast from "../hooks/useShowToast"
import { useState } from "react"

const UserPage = () => {
  const { username } = useParams()
  const showToasts = useShowToast()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`/api/users/profile/${username}`)
        const data = await response.json()
        if (data.error) {
          showToasts("Error", data.error, "error")
          return
        }

        console.log(data)
        setUser(data)
      } catch (error) {
        showToasts("Error", error, "error")
      }
    }

    getUser()
  }, [username, showToasts])

  if (!user) return null

  return (
    <>
      <UserHeader user={user} />
      <UserPost likesCount={219} commentsCount={3} postImage={"https://bit.ly/dan-abramov"} postTitle={"Hello HireConnect!"} />
      <UserPost likesCount={219} commentsCount={3} postTitle={"Hello HireConnect!"} />
      <UserPost likesCount={219} commentsCount={3} postImage={"https://bit.ly/dan-abramov"} postTitle={"Hello HireConnect!"} />
      <UserPost likesCount={219} commentsCount={3} postImage={"https://bit.ly/dan-abramov"} postTitle={"Hello HireConnect!"} />
    </>
  )
}

export default UserPage
