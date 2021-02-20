import React, { useState, useEffect } from "react"
import {
  useTransition,
  useChain,
  animated,
  config,
  useSpring,
} from "react-spring"

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [offset, setOffset] = useState(0)
  const props = useSpring({
    from: {
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
    to: {
      backgroundColor: offset > 50 ? "white" : "rgba(255, 255, 255, 0)",
    },
    config: {
      duration: 1000,
    },
  })

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  return (
    <>
      <animated.nav
        style={props}
        className={`flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg   mb-3 fixed z-50 w-full`}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between w-full">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className={`text-sm font-bold leading-relaxed inline-block mr-4 py-2 blackspace-no-wrap uppercase ${
                offset > 50 ? "text-black" : "text-white"
              } `}
              href="#pablo"
            >
              IAN DE JESUS
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-self-end" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-linkedin text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2">LinkedIn</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-github-alt text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2">Github</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fas fa-file text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2">Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </animated.nav>
    </>
  )
}

export default Navigation
