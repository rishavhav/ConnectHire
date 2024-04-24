import { Button } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { Routes, Route, useLocation } from "react-router-dom"
import UserPage from "./Pages/UserPage"
import PostPage from "./Pages/PostPage"
import Header from "./components/Header"
import AuthPage from "./Pages/AuthPage"
import LandingPage from "./Pages/LandingPage"
import { useRecoilValue } from "recoil"
import userAtom from "./atoms/userAtom"
import HomePage from "./Pages/HomePage"
import { Navigate } from "react-router-dom"
import UpdateProfilePage from "./Pages/UpdateProfilePage"
import NavbarLanding from "./components/NavbarLanding"

function App() {
  const user = useRecoilValue(userAtom)
  const location = useLocation()
  const containerWidth = location.pathname.includes("/landing") ? "screen" : "620px"
  const containerPadding = location.pathname.includes("/landing") ? 0 : 4

  return (
    <>
      {<NavbarLanding />}
      <Container maxW={containerWidth} p={containerPadding}>
        <Routes>
          <Route path="/landing" element={<LandingPage />} /> // will work on this later
          <Route path="/auth" element={!user ? <AuthPage /> : <Navigate to="/" />} />
          <Route path="/" element={user ? <HomePage /> : <Navigate to="/auth" />} />
          <Route path="/update" element={user ? <UpdateProfilePage /> : <Navigate to="/auth" />} />
          <Route path="/:username" element={user ? <UserPage /> : <Navigate to="/auth" />} />
          <Route path="/:username/post/:pid" element={user ? <PostPage /> : <Navigate to="/auth" />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
