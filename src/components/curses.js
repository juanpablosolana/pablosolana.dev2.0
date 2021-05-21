import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
function Courses(){
 const data = useStaticQuery(graphql`
   {
     profileJson {
       id
       data {
         courses {
           url
           title
           author
           twitter
           twitterLink
         }
       }
     }
   }
 `)
// console.log(data)

  return (
    <div
      className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 "
      id="cursos"
    >
      <div className="transparente">
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
              de trabajar en proyectos retadores e increíbles.
            </p>
          </div>

          <div className="grid grid-cols-3 transparente5">
            {data.profileJson.data.courses.map(courses => {
              return (
                <div
                  key={courses.title}
                  className="shadown p-8 bg-gray-100 mx-4 rounded my-4 text-center"
                >
                  <h4 className="font-bold p-2 ">{courses.title}</h4>
                  <span className="inline-block bg-yellow-500 p-2 rounded mb-0.5 bg-red-500 radius">
                    <a
                      href={courses.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ir al curso de {courses.author}
                    </a>
                  </span>
                  <a
                    href={courses.twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Seguir {courses.twitter}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Courses