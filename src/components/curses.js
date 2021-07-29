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


  return (
    <div
      className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 "
      id="cursos"
    >
      <div className="transparente">
        <div
          className="container max-w-6xl min-h-screen p-12 mx-auto "
          id="Cursos"
        >
          <div className="text-center text-gray-100 ">
            <h2 className="text-4xl font-bold">
              Me preparo con los mejores
            </h2>
            <p className="p-4 ">Sin dudarlo ¡Te los recomiendo!</p>
          </div>

          <div className="grid grid-cols-1 transparente5 lg:grid-cols-3">
            {data.profileJson.data.courses.map(courses => {
              return (
                <div
                  key={courses.title}
                  className="p-8 mx-4 my-4 text-center bg-gray-100 rounded shadown"
                >
                  <h4 className="p-2 font-bold ">{courses.title}</h4>
                  <span className="inline-block bg-yellow-500 p-2 rounded mb-0.5 bg-red-500 radius">
                    <a
                      href={courses.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ir al curso de {courses.author}
                    </a>
                  </span>
                  <div>
                    <a
                      href={courses.twitterLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      Seguir {courses.twitter}
                    </a>
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