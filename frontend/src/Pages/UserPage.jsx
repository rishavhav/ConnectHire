import { useEffect } from "react"
import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"
import { useParams } from "react-router-dom"
import useShowToast from "../hooks/useShowToast"
import { useState } from "react"
import { useRecoilValue } from "recoil"
import userAtom from "../atoms/userAtom"

const UserPage = () => {
  const { username } = useParams()
  const showToasts = useShowToast()
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const userData = useRecoilValue(userAtom)

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`/api/users/profile/${username}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
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

    const getPosts = async () => {
      try {
        const response = await fetch(`/api/posts/user/${username}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const data = await response.json()
        if (data.error) {
          showToasts("Error", data.error, "error")
          return
        }
        setPosts(data)
        console.log("data", data.length)
      } catch (error) {
        showToasts("Error", error, "error")
      }
    }

    getUser()
    getPosts()
  }, [username, showToasts, posts])

  if (!user) return null

  return (
    <>
      <UserHeader user={user} />

      {posts.length === 0 ? (
        <div className="text-center mt-5">
          <h1 className="text-2xl">No posts yet</h1>
        </div>
      ) : (
        posts.map((post) => <UserPost key={post._id} likesCount={post.likes?.length} commentsCount={post.comments?.length} postImage={post.img} postTitle={post.text} />)
      )}
    </>
  )
}

export default UserPage
