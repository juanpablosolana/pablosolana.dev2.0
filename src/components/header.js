import React from "react"
import Menu from "./menu"
import profile from "../img/profile.png"
import Form from "./form"
const Header = () => (
  <header className="min-h-screen bg-black " id="hola">
    <Menu />
    <div className="container max-w-6xl mx-auto ">
      <div className="flex items-center justify-center">
        <div className="flex-1">
          <p className="font-bold text-white text-7xl">¡Hola a todos!</p>
          <h1 className="block py-6 font-bold text-white text-7xl">
            {" "}
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
          className="rounded-xl"
        />
      </div>
      <div>
        <Form />
      </div>
    </div>
  </header>
)

export default Header
