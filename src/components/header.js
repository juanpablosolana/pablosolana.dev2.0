import React from "react"
import Menu from "./menu"
import profile from "../img/profile.png"
import { motion } from "framer-motion"

const Header = () => {
  return (
      <>
        <header className="min-h-screen bg-black" id="hola">
        <Menu />
        <div className="container max-w-6xl mx-auto ">
          <div className="grid items-center justify-center grid-rows-1 place-items-center lg:flex">
            <div className="flex-1 text-center">
              <p className="text-xl font-bold text-white lg:text-7xl">
                ¡Hola a todos! Soy
              </p>
              <h1 className="block py-6 text-xl font-bold text-white lg:text-7xl">
                Juan Pablo Solana
              </h1>
              <p className="py-6 text-xl font-light text-gray-400">
                Developer que le encanta implementar diseños que inspiran y
                atraen a las personas
              </p>
            </div>
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.0 }}
              src={profile}
              alt="Imagen de Juan Pablo Solana Ortiz"
              style={{ height: "350px" }}
              className="pb-3 rounded-full lg:rounded-lg"
            />
          </div>
          <div className="text-yellow-500">
            <a href="#proyectos" className="p-3 hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="block mx-auto max-h-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>
    </>
  )
  }
export default Header
