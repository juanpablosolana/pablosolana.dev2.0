import * as React from "react"
import { Transition } from "@headlessui/react"


const Menu = () => {
  const [isShowing, setIsShowing] = React.useState(false)
  return (
    <nav className="container max-w-6xl py-12 mx-auto">
      <div className="justify-between sm:flex">
        <a href="#hola" className="p-3 text-3xl font-bold text-white">
          Pablo Solana
        </a>
        <div className="lg:hidden">
          <button type="button" onClick={() => setIsShowing(!isShowing)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="white"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Transition
            show={isShowing}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0 invisible"
            enterTo="opacity-100 visible"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100 visible"
            leaveTo="opacity-0 invisible"
            className="fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm"
            onClick={() => setIsShowing(false)}
          ></Transition>

          <Transition
            show={isShowing}
            enter="transition-transform transform duration-150"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform transform duration-150"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            className="absolute top-0 right-0 z-20 min-h-screen bg-white w-60"
          >
            <div className="p-8">
              <ul className="space-y-8 font-bold text-center font-roboto">
                <li>
                  <a
                    href="#home"
                    className="p-3 hover:text-red-500"
                    onClick={() => setIsShowing(!isShowing)}
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#proyectos"
                    className="p-3 hover:text-red-500"
                    onClick={() => setIsShowing(!isShowing)}
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="#cursos"
                    className="p-3 hover:text-red-500"
                    onClick={() => setIsShowing(!isShowing)}
                  >
                    Cursos
                  </a>
                </li>
                <li>
                  <a
                    href="#certificaciones"
                    className="p-3 hover:text-red-500"
                    onClick={() => setIsShowing(!isShowing)}
                  >
                    Certificaciones
                  </a>
                </li>
                <li>
                  <a
                    href="#Contacto"
                    className="p-3 hover:text-red-500"
                    onClick={() => setIsShowing(!isShowing)}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </Transition>
        </div>
        <ul className="flex-row hidden space-x-8 text-xs font-bold text-white uppercase lg:flex font-roboto">
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
}
export default Menu
