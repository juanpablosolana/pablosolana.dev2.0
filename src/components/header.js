import React, { useState, useEffect, useRef } from "react"
import Menu from "./menu"
import profile from "../img/profile.png"
import useTypewriter from "react-typewriter-hook"
import { motion } from "framer-motion"

const work_title = ["Developer que le encanta implementar diseños que inspiran y atraen a las personas",
                    "especialista en WPO."]
let index = 0
const Header = () => {
   const [workTitle, setWorkTitle] = useState("desarrolladora web.")
   const intervalRef = useRef({})
   const name = useTypewriter(workTitle)
   useEffect(() => {
     intervalRef.current = setInterval(() => {
       index = index > 2 ? 0 : ++index
       setWorkTitle(work_title[index])
     }, 5000)
     return function clear() {
       clearInterval(intervalRef.current)
     }
   }, [workTitle])
  return (
    <header className="min-h-screen bg-black " id="hola">
      <Menu />
      <div className="container max-w-6xl mx-auto ">
        <div className="grid items-center justify-center grid-rows-1 place-items-center lg:flex">
          <div className="flex-1 text-center">
            <p className="text-xl font-bold text-white lg:text-7xl">
              ¡Hola a todos!
            </p>
            <h1 className="block py-6 text-xl font-bold text-white lg:text-7xl">
              Soy Pablo Solana
            </h1>
            <p className="py-6 text-xl font-light text-gray-400">{name}</p>
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
      </div>
    </header>
  )
  }
export default Header
