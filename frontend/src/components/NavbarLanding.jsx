import { useRecoilValue } from "recoil"
import userAtom from "../atoms/userAtom"
import { Flex } from "@chakra-ui/react"
import LogoutButton from "./LogoutButton"
import CreatePost from "./CreatePost"
import MyProfileButton from "./MyProfileButton"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import searchAtom from "../atoms/searchAtom"
import { useSetRecoilState } from "recoil"

export default function NavbarLanding() {
  const user = useRecoilValue(userAtom)
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

  const setUserSearch = useSetRecoilState(searchAtom)
  const searchUser = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/users/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search }),
      })
      const data = await res.json()
      console.log("searchUser: ", data)
      setUserSearch(data)
      navigate("/search")
    } catch (error) {
      console.log("Error in searchUser: ", error.message)
    }
  }

  console.log("search", search)

  return (
    <>
      <div className="navbar bg-primary-content  text-primary-content ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"></ul>
          </div>
          <Flex justifyContent={"center"} gap={2} alignItems={"center"}>
            {user && (
              <a href="/" className="text-indigo-500 font-semibold  btn btn-ghost text-xl">
                ConnectHire
              </a>
            )}
            {user && <MyProfileButton />}
            {user && (
              <>
                {" "}
                <label className="input input-bordered flex items-center gap-2">
                  <input value={search} type="text" className="grow black-text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />

                  <button onClick={searchUser}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-90">
                      <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </label>
              </>
            )}
          </Flex>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"></ul>
        </div>
        <div className="navbar-end">
          <Flex justifyContent={"center"} gap={2}>
            {user && <CreatePost />}
            {user && <LogoutButton />}
            {!user && (
              <a className="btn" href="http://soamrish.pythonanywhere.com/" target="_blank">
                Developer
              </a>
            )}
          </Flex>
        </div>
      </div>
    </>
  )
}
