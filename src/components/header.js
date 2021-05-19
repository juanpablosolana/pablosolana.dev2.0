import React from 'react'
import Menu from './menu'
import profile from '../img/profile.png'
import Form from './form'
const header = ()=>(
  <header className="bg-black min-h-screen max-h-screen">
   <Menu/>
    <div className="container mx-auto p-12 max-w-6xl ">
      <div className="flex justify-center items-center">
        <div className="flex-1">
        <p className="text-white text-7xl font-bold">¡Hola a todos!</p>
        <h1 className="text-white text-7xl font-bold block py-6"> Soy Pablo Solana</h1>
        <p className="text-gray-400 font-light text-xl py-6">Developer que le encanta implementar diseños que inspiran y atraen a las personas.</p>
        </div>
      <img src={profile} alt="Imagen de Juan Pablo Solana Ortiz" style={{ height: "400px" }} className="rounded-xl"/>
    </div>
      <div>
        <Form/>
      </div>
    </div>
  </header>
)

export default header