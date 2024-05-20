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
import SearchPage from "./Pages/SearchPage"

function App() {
  const user = useRecoilValue(userAtom)
  const location = useLocation()
  let containerWidth = "620px"
  let containerPadding = 4

  if (location.pathname.includes("/landing")) {
    containerWidth = "screen"
    containerPadding = 0
  } else if (location.pathname === "/") {
    containerWidth = "50%"
    containerPadding = 4
  }

  return (
    <>
      <NavbarLanding />
      <Container maxW={containerWidth} p={containerPadding}>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/auth" element={!user ? <AuthPage /> : <Navigate to="/" />} />
          <Route path="/" element={user ? <HomePage /> : <Navigate to="/auth" />} />
          <Route path="/update" element={user ? <UpdateProfilePage /> : <Navigate to="/auth" />} />
          <Route path="/:username" element={user ? <UserPage /> : <Navigate to="/auth" />} />
          <Route path="/:username/post/:pid" element={user ? <PostPage /> : <Navigate to="/auth" />} />
          <Route path="/search" element={user ? <SearchPage /> : <Navigate to="/auth" />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
