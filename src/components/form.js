import React from 'react'
const menu = ()=>(
  <form className="mt-16 text-center">
    <label for ="contact"className="block text-yellow-500 text-sm font-bold mb-2">
      Contactame sobre esas ideas que quieres hacer realidad
    </label>
    <div className="flex shadown rounded bg-white border p-2">
    <textarea
    id="contact"
    name="contact"
    className="flex-1 py-3 px-3 text-gray-700 focus:outline-none focus:shadown-outline"></textarea>
    <button className="btn-reverse">Enviar</button>
    </div>
  </form>
)

export default menu