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
        className="container max-w-6xl min-h-screen p-12 mx-auto "
        id="Cursos"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Algunas de mis certificaciones{" "}
          </h2>
          <p className="p-4 ">Siempre aprendiendo, siempre practicando</p>
        </div>

        <div className="grid grid-rows-2 mb-10 place-items-center lg:grid-flow-col lg:place-items-stretch">
          {data.profileJson.data.certificates.map(certificates => {
            return (
              <div className="w-full max-w-md p-2 mb-4 bg-black rounded-b lg:flex lg:rounded-b-none lg:rounded-r" key={certificates.img}>
                <div
                  className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
                  style={{
                    backgroundImage: `url(${certificates.issuerImg})`,
                  }}
                  title="Imagen del certificado"
                ></div>
                <div className="flex flex-col justify-between p-4 leading-normal bg-black rounded-b lg:rounded-b-none lg:rounded-r">
                  <div className="mb-8">
                    <div className="mb-2 text-xl font-bold text-yellow-500">
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
                      className="w-10 h-10 mr-4 rounded-full"
                      src={certificates.img}
                      alt={certificates.title}
                    />

                    <div className="text-sm">
                      <p class="text-white leading-none">
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