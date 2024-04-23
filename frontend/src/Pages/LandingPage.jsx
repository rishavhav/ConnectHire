import React from "react"
import NavbarLanding from "../components/NavbarLanding"
import { Link } from "react-router-dom"
import { VStack, Flex, Box } from "@chakra-ui/react"
import ChatDemo from "../components/ChatDemo"

const LandingPage = () => {
  return (
    <div className="relative h-screen w-full bg-white">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse at center,transparent 20%, #fff 90%)]">
        <NavbarLanding />
        <VStack className="h-screen">
          <Box>
            <Flex>
              <Box className="mt-20">
                <button className="btn btn-outline btn-primary btn-xs" onClick={() => window.open('https://github.com/rishavhav/ConnectHire', '_blank')}>
                  Github Repository
                </button>
              </Box>


            </Flex>
          </Box>
          <Box>
            <Flex>
              <Box>
                <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-blue-400  to-indigo-700 text-transparent bg-clip-text">ConnectHire</h1>
                <p className="text-center text-2xl mt-5 ">
                  ConnectHire is a platform that connects <strong className="text-indigo-500">job seekers</strong> with <strong className="text-indigo-500">employers</strong>.
                </p>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Box className="mt-5">
                <Link to="/auth">
                  <button className="btn text-white bg-gradient-to-r from-blue-400  to-indigo-700">Get Started →</button>
                </Link>
              </Box>
            </Flex>
          </Box>
          <Box className="mt-10">
            <Flex justifyContent={"center"} gap={5}>
              <ChatDemo imgsrc={"/image.png"} question={"Tired of getting"} end={"ignored"} />
              <ChatDemo imgsrc={"/coin.jpg"} question={"Subscription"} end={"money"} />
              <ChatDemo imgsrc={"/reels2.jpg"} question={"Too many"} end={"distractions"} />
            </Flex>
          </Box>
        </VStack>
      </div>
    </div>
  )
}

export default LandingPage
