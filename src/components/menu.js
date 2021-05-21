import React from 'react'
const menu = () => (
  <nav className="container mx-auto py-12 max-w-6xl">
    <div className="sm:flex justify-between">
      <a href="#hola" className="text-white text-3xl font-bold p-3">
        Pablo Solana
      </a>
      <ul className="text-yellow-500 sm:self-center text-xl border-2 sm:border-none">
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
        href="https://firebasestorage.googleapis.com/v0/b/pablosolana-fd61e.appspot.com/o/docs%2FJuan%20Pablo%20solana%20ortiz%20(2).pdf?alt=media&token=32ac8588-af76-4fe3-983c-e29f71fcaf4e"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 btn"
      >
        Descargar CV
      </a>
    </div>
  </nav>
)
export default menu