import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost likesCount={219} commentsCount={3} postImage={"https://bit.ly/dan-abramov"} postTitle={"Hello HireConnect!"} />
      <UserPost likesCount={219} commentsCount={3} postTitle={"Hello HireConnect!"} />
      <UserPost likesCount={219} commentsCount={3} postImage={"https://bit.ly/dan-abramov"} postTitle={"Hello HireConnect!"} />
      <UserPost likesCount={219} commentsCount={3} postImage={"https://bit.ly/dan-abramov"} postTitle={"Hello HireConnect!"} />
    </>
  )
}

export default UserPage
