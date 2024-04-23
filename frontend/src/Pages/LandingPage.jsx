import React from "react"
import NavbarLanding from "../components/NavbarLanding"
import { Link } from "react-router-dom"
import { VStack, Flex, Box } from "@chakra-ui/react"
import ChatDemo from "../components/ChatDemo"

const LandingPage = () => {
  return (
    <div className="h-screen">
      <NavbarLanding />
      <VStack>
        <Box>
          <Flex>
            <Box className="mt-40">
              <Link to="/register">
                <button className="btn btn-outline btn-primary">Github Repository</button>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <Box>
              <h1 className="text-9xl font-bold text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">ConnectHire</h1>
              <p className="text-center text-3xl mt-5">
                ConnectHire is a platform that connects <strong className="text-primary">job seekers</strong> with <strong className="text-primary">employers</strong>.
              </p>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <Box className="mt-10">
              <Link to="/register">
                <button className="btn btn-primary">Get Started →</button>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box className="mt-10">
          <Flex gap={5}>
            <ChatDemo imgsrc={"/image.png"} />
            <ChatDemo imgsrc={"/image.png"} />
            <ChatDemo imgsrc={"/image.png"} />
          </Flex>
        </Box>
      </VStack>
    </div>
  )
}

export default LandingPage
