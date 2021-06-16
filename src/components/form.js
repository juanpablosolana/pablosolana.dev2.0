import React from "react"
// import { useLocation } from "react-router-dom"
import { useForm } from "react-hook-form";

const Menu = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) =>{
    const $form = document.querySelector(".contact-form"),
      $loader = document.querySelector(".contact-form-loader"),
      $response = document.querySelector(".contact-form-response")
       $loader.classList.remove("none")
       fetch("https://formsubmit.co/ajax/me.pablosolana@altmails.com", {
         method: "POST",
         body: data,
       })
         .then(res => (res.ok ? res.json() : Promise.reject(res)))
         .then(json => {
           console.log(json)
           window.location.hash = "#gracias"
           $form.reset()
         })
         .catch(err => {
           console.log(err)
           let message =
             err.statusText || "Ocurrió un error al enviar, intenta nuevamente"
           $response.querySelector(
             "h3"
           ).innerHTML = `Error ${err.status}: ${message}`
         })
         .finally(() => {
           $loader.classList.add("none")
           setTimeout(() => {
             window.location.hash = "#close"
           }, 3000)
         })
     }

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 "
      id="contacto"
    >
      <div className="container max-w-6xl mx-auto my-auto ">
        <form
          className="max-w-md p-2 mx-auto bg-black contact-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="text-center text-yellow-500">
            <h2 className="text-4xl font-bold ">Contacto</h2>
            <p className="p-4 text-white">
              Si está interesado en trabajar conmigo en su próximo proyecto, no
              dude en ponerse en contacto
            </p>
          </div>
          <input
            type="text"
            name="name"
            placeholder=" Ingresa tu nombre"
            id="name"
            {...register("Nombre")}
            patter="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
            className="w-4/5"
            required
          />
          <input
            type="email"
            {...register("email")}
            name="email"
            id="email"
            placeholder=" No olvides tu correo"
            title="email no valido"
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
            className="w-4/5"
            required
          />
          <textarea
            name="coments"
            id="coments"
            {...register("coments")}
            cols="50"
            rows="10"
            placeholder=" Platicame de tus ideas de desarrollo "
            className="w-4/5"
            required
          />
          <div className="contact-form-loader">
            {errors.exampleRequired && <span>This field is required</span>}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              stroke="#d90062"
              viewBox="0 0 38 38"
            >
              <g
                fill="none"
                fillRule="evenodd"
                strokeWidth="2"
                transform="translate(1 1)"
              >
                <circle cx="18" cy="18" r="18" strokeOpacity="0.5"></circle>
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    from="0 18 18"
                    repeatCount="indefinite"
                    to="360 18 18"
                    type="rotate"
                  ></animateTransform>
                </path>
              </g>
            </svg>
          </div>
          <input
            type="submit"
            value="Enviar mensaje"
            className="p-3 btn-reverse hover:text-white"
            onSubmit={handleSubmit}
          />
        </form>
        <article id="gracias" className="modal transparente5">
          <div className="relative px-6 py-4 mb-4 text-white bg-green-500 border-0 rounded">
            <span className="inline-block mr-5 text-xl align-middle">
              <i className="fas fa-bell" />
            </span>
            <span className="inline-block mr-8 align-middle">
              <b className="capitalize">¡Enviado! 👌</b> En breve estaremos en
              contacto 🎆 🔥
            </span>
            <button className="absolute top-0 right-0 mt-4 mr-6 text-2xl font-semibold leading-none bg-transparent outline-none focus:outline-none">
              <span>×</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  )}

export default Menu