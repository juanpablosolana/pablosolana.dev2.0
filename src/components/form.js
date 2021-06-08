import React from 'react'
const menu = () => (
  <div className="bg-black " id="contacto">
    <div className="container max-w-6xl min-h-screen p-12 mx-auto ">

    <form className="contact-form">
      <h2>Contacto</h2>
      <span>
        Si está interesado en trabajar conmigo en su próximo proyecto, no dude
        en ponerse en contacto.
      </span>
      <input
        type="text"
        name="name"
        placeholder="Ingresa tu nombre"
        id=""
        title="Nombre"
        patter="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
        required
      />
      <input
        type="email"
        name="email"
        id=""
        placeholder="tu correo"
        title="email no valido"
        pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
        required
      />
      <textarea
        name="coments"
        cols="50"
        rows="10"
        placeholder="tus comentarios"
        required
      />
      <div className="contact-form-loader">
        <img src="./assets/loader.svg" alt="Enviando" />
      </div>
      <input type="submit" value="Enviar mensaje" className="btn-contact" />
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
            <path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z" />
            <path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
            <path d="M13 12l2 .012C15.012 11.55 15.194 11 16 11s.988.55 1 1h2c0-1.206-.799-3-3-3S13 10.794 13 12zM8 11c.806 0 .988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3l2 .012C7.012 11.55 7.194 11 8 11z" />
          </svg>
        </article>
      </div>
    </article>
  </div>
   </div>
)

export default menu