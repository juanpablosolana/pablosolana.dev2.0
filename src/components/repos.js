import React from 'react'
import repos from '../data/repos'
import Repo from './repo'

const datos = ()=>(
  <div className= " min-h-screen max-h-screen container mx-auto p-12 max-w-6xl ">
    <div className= "text-center">
      <h2 className="text-4xl font-bold">Parece magia, funciona con código.</h2>
      <p>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles. </p>
      </div>
      <ul>
          {
          repos.map((repo)=>{
           return <Repo repo={repo} key={repo.id}/>
          })
        }
    </ul>
  </div>
)

export default datos