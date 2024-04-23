import { useColorMode } from '@chakra-ui/react'

export default function NavbarLanding() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
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
        <a onClick={toggleColorMode} className="text-indigo-500 font-semibold  btn btn-ghost text-xl">ConnectHire</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1"></ul>
      </div>
      <div className="navbar-end">
        <a className="btn" href="http://soamrish.pythonanywhere.com/" target="_blank">Developer</a>
      </div>
    </div>
  )
}
