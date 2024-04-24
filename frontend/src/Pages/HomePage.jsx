import { useEffect, useState } from "react"
import useShowToast from "../hooks/useShowToast"
import Post from "../components/Post"
import { Flex, Spinner } from "@chakra-ui/react"

const HomePage = () => {
  const showToast = useShowToast()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeed = async () => {
      setLoading(true)
      try {
        const res = await fetch("/api/posts/feed")
        const data = await res.json()

        if (data.error) throw new Error(data.error)

        setPosts(data)
      } catch (error) {
        showToast({ type: "error", message: error.message })
      } finally {
        setLoading(false)
      }
    }

    fetchFeed()
  }, [])

  return (
    <>
      {loading && (
        <Flex justify={"center"}>
          <Spinner size={"xl"} />
        </Flex>
      )}

      {!loading && posts.length === 0 && (
        <Flex justify={"center"} align={"center"} h={"100vh"}>
          <h1>Follow someone to see posts!</h1>
        </Flex>
      )}

      {posts.map((post) => (
        <Post key={post._id} post={post} postedBy={post.postedBy} />
      ))}
    </>
  )
}

export default HomePage
