import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

function Curses (){
  const data=useStaticQuery(graphql`
  {
    profileJson {
     id
      data {
        courses {
            title
            url
          }
        }
      }
  }`)
console.log(data)

  return (
    <div className="bg-red-400" id="cursos">
      <div
        className="min-h-screen container mx-auto p-12 max-w-6xl "
        id="Cursos"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Parece magia, funciona con código.
          </h2>
          <p className="p-4">
            A lo largo de mi carrera como programador, he tenido el privilegio
            de trabajar en proyectos retadores e increíbles.{" "}
          </p>
        </div>
      </div>
      <div className="flex">{data.profileJson.courses.map(()=>{

      })}</div>
    </div>
  )
}
export default Curses