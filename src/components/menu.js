import React from "react"
const Menu = () => (
  <nav className="container max-w-6xl py-12 mx-auto">
    <div className="justify-between sm:flex">
      <a href="#hola" className="p-3 text-3xl font-bold text-white">
        Pablo Solana
      </a>
      <ul className="text-xl text-yellow-500 border-2 sm:self-center sm:border-none">
        <li className="sm:inline-block">
          <a href="#proyectos" className="p-3 hover:text-red-500">
            Proyectos
          </a>
        </li>
        <li className="sm:inline-block">
          <a href="#cursos" className="p-3 hover:text-red-500">
            Cursos
          </a>
        </li>
        <li className="sm:inline-block">
          <a href="#certificaciones" className="p-3 hover:text-red-500">
            Certificaciones
          </a>
        </li>
        <li className="sm:inline-block">
          <a href="#Contacto" className="p-3 hover:text-red-500">
            Contacto
          </a>
        </li>
      </ul>
      <a
        href="https://firebasestorage.googleapis.com/v0/b/pablosolana-fd61e.appspot.com/o/docs%2FJuan%20Pablo%20Solana%20Ortiz%20JS.pdf?alt=media&token=1be1bf9a-b27f-4586-a7b2-de7e7c036b16"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 btn"
      >
        Descargar CV
      </a>
    </div>
  </nav>
)
export default Menu
