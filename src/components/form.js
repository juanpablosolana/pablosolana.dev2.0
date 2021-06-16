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
    console.log(data)
    const $form = document.querySelector(".contact-form"),
      $loader = document.querySelector(".contact-form-loader"),
      $response = document.querySelector(".contact-form-response")
       $loader.classList.remove("none")
       fetch("https://formsubmit.co/ajax/me.pablosolana@altmails.com", {
         method: "POST",
         body: data
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
      <div className="max-w-6xl mx-auto">
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
        <div className="py-4">
          <div className="grid items-center grid-cols-1 text-center lg:grid-cols-4">
            <a
              href="mailto:juanpablosolana@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-auto text-white"
                fill="none"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/iLinKN95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 30 30"
                className="mx-auto"
              >
                <path
                  fill="#fff"
                  d="M28 6.937c-.957.425-1.985.711-3.064.84a5.343 5.343 0 002.345-2.951 10.696 10.696 0 01-3.388 1.295 5.334 5.334 0 00-9.089 4.864A15.143 15.143 0 013.809 5.411a5.321 5.321 0 00-.721 2.683 5.33 5.33 0 002.372 4.439 5.323 5.323 0 01-2.416-.667v.067a5.335 5.335 0 004.279 5.23 5.336 5.336 0 01-2.409.092 5.34 5.34 0 004.983 3.705 10.699 10.699 0 01-6.625 2.284c-.43 0-.855-.025-1.273-.075a15.102 15.102 0 008.177 2.396c9.812 0 15.176-8.128 15.176-15.177 0-.231-.005-.461-.015-.69A10.855 10.855 0 0028 6.937z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/juan-pablo-solana-ortiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                className="mx-auto"
              >
                <path
                  fill="#fff"
                  d="M72.865 61.11a1.2 1.2 0 001.21-1.27c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.03h.724l-1.389-2.1zm-.783-.473h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836m-16.873-5.433h-9.6V40.17c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.94v15.293h-9.6V24.287h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61V24.287h9.61zM59.991.004H4.781A4.728 4.728 0 000 4.674v55.44a4.731 4.731 0 004.781 4.674h55.21a4.741 4.741 0 004.8-4.675V4.67a4.738 4.738 0 00-4.8-4.67"
                ></path>
                <path
                  fill="#0a66c2"
                  d="M72.164 56.411a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1"
                ></path>
              </svg>
            </a>

            <a
              href="https://github.com/juanpablosolana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto text-white"
              >
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
              </svg>
            </a>
          </div>
        </div>
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