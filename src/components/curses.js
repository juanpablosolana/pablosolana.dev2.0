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
          <div className="text-center text-gray-100 ">
            <h2 className="text-4xl font-bold">
              Me preparo con los mejores
            </h2>
            <p className="p-4 ">Sin dudarlo ¡Te los recomiendo!</p>
          </div>

          <div className="grid grid-cols-3 transparente5">
            {data.profileJson.data.courses.map(courses => {
              return (
                <div
                  key={courses.title}
                  className="shadown p-8 bg-white mx-4 rounded my-4"
                >
                  <h4 className="forn-bold p-2">{courses.title}</h4>
                  <div className="text-center">
                    <span className="inline-block bg-yellow-500 p-2 rounded mb-0.5 bg-red-500 radius">
                      <a
                        href={courses.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ir al curso de {courses.author}
                      </a>
                    </span>
                  </div>
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