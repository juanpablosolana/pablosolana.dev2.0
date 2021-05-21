import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
function Certifiction(){
 const data = useStaticQuery(graphql`
   {
     profileJson {
       data {
         certificates {
           title
           issuer
           issuerImg
           url
           img
         }
       }
     }
   }
 `)
// console.log(data)

  return (
    <div className="bg-white " id="certificaciones">
      <div
        className="min-h-screen container mx-auto p-12 max-w-6xl "
        id="Cursos"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold">Algunas de mis certificaciones </h2>
          <p className="p-4 ">Siempre aprendiendo, siempre practicando</p>
        </div>

        <div className="grid grid-rows-2 grid-flow-col">
          {data.profileJson.data.certificates.map(certificates => {
            return (
              <div className="max-w-md w-full lg:flex pb-4">
                <div
                  className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style={{
                    backgroundImage: `url(${certificates.issuerImg})`,
                  }}
                  title="Imagen del certificado"
                ></div>
                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-black font-bold text-xl mb-2">
                      <a
                        href={certificates.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {certificates.title}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src={certificates.img}
                      alt={certificates.title}
                    />

                    <div className="text-sm">
                      <p class="text-black leading-none">
                        {certificates.issuer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Certifiction