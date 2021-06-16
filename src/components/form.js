import React from "react"
// import { useLocation } from "react-router-dom"
import { useForm } from "react-hook-form";

const Menu = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) =>

  {const $form = document.querySelector(".contact-form"),
    $loader = document.querySelector(".contact-form-loader"),
    $response = document.querySelector(".contact-form-response")
     $form.addEventListener("submit", e => {
       e.preventDefault()
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
     })}

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 "
      id="contacto"
    >
      <div className="transparente">
        <div className="container max-w-6xl mx-auto my-auto ">
          <form
            className="max-w-md p-2 mx-auto bg-black contact-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="text-center text-yellow-500">
              <h2 className="text-4xl font-bold ">Contacto</h2>
              <p className="p-4 text-white">
                Si está interesado en trabajar conmigo en su próximo proyecto,
                no dude en ponerse en contacto
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
          <article id="gracias" className="modal">
            <div className="modal-content">
              <article className="contact-form-response">
                <h3>Muchas gracias por tus comentarios</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 18c4 0 5-4 5-4H7s1 4 5 4z"></path>
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                  <path d="M13 12l2 .012c.012-.462.194-1.012 1-1.012s.988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3zm-5-1c.806 0 .988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3l2 .012C7.012 11.55 7.194 11 8 11z"></path>
                </svg>
              </article>
            </div>
          </article>
        </div>
      </div>
    </div>
  )}

export default Menu