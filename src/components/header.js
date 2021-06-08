import React from "react"
import Menu from "./menu"
import profile from "../img/profile.png"
// import Form from "./form"
const Header = () => (
  <header className="min-h-screen bg-black " id="hola">
    <Menu />
    <div className="container max-w-6xl mx-auto ">
      <div className="grid items-center justify-center grid-rows-1 place-items-center lg:flex">
        <div className="flex-1 text-center">
          <p className="font-bold text-white text-7xl">¡Hola a todos!</p>
          <h1 className="block py-6 font-bold text-white text-7xl">
            Soy Pablo Solana
          </h1>
          <p className="py-6 text-2xl font-light text-gray-400">
            Developer que le encanta implementar diseños que inspiran y atraen a
            las personas.
          </p>
        </div>
        <img
          src={profile}
          alt="Imagen de Juan Pablo Solana Ortiz"
          style={{ height: "400px" }}
          className="pb-2 rounded-full lg:rounded-xl"
        />
      </div>
    </div>
  </header>
)

export default Header
