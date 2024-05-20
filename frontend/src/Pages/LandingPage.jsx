import React from "react"
import NavbarLanding from "../components/NavbarLanding"
import { Link } from "react-router-dom"
import { VStack, Flex, Box } from "@chakra-ui/react"
import ChatDemo from "../components/ChatDemo"
import Subscribe from "../components/Subscribe"
import Footer from "../components/Footer"

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <div className="mb-10 flex-1 w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse at center,transparent 20%, #fff 90%)]">
        <VStack>
          <Box>
            <Flex>
              <Box className="mt-12">
                <button className="btn btn-outline btn-primary btn-xs" onClick={() => window.open("https://github.com/rishavhav/ConnectHire", "_blank")}>
                  Github Repository
                </button>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Box>
                <h1 className="animate-fade-down text-7xl font-bold text-center bg-gradient-to-r from-blue-400  to-indigo-700 text-transparent bg-clip-text">ConnectHire</h1>
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
                  <button className="btn text-white bg-gradient-to-r from-blue-400 to-indigo-700 transition-transform duration-200 ease-in-out transform hover:scale-110">Get Started →</button>
                </Link>
              </Box>
            </Flex>
          </Box>
          <Box className="mt-10">
            <Flex justifyContent={"center"} gap={16}>
              <ChatDemo imgsrc={"/image.png"} question={"Tired of getting"} end={"ignored"} />
              <ChatDemo imgsrc={"/coin.jpg"} question={"Subscription"} end={"money"} />
              <ChatDemo imgsrc={"/reels2.jpg"} question={"Too many"} end={"distractions"} />
            </Flex>
          </Box>

          <Subscribe />
        </VStack>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
