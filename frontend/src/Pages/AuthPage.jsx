import React from "react"
import Signup from "../components/Signup"
import LoginCard from "../components/LoginCard"
import authScreenAtom from "../atoms/authAtom.js"
import { useRecoilValue } from "recoil"

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom)
  console.log(authScreenState)

  return <>{authScreenState === "login" ? <LoginCard /> : <Signup />}</>
}

export default AuthPage
