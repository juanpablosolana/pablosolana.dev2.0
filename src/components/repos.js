import React, { useEffect, useState } from "react"
import Repo from "./repo"
const API = "https://api.github.com/users/juanpablosolana/repos"
let myRepo

function Datos() {
  const [repos, setRepos] = useState([])
  const [reposCount, setReposCount] = useState([])
  useEffect(() => {
    const data = sessionStorage.getItem("repos")

     if(data){
        myRepo = JSON.parse(data)
        setReposCount(myRepo.length)
        myRepo=myRepo.slice(0, 14)
        return setRepos(myRepo)
     }
    async function fetchRepos() {
      const response = await fetch(API)
       myRepo = await response.json().catch(err => {
        console.err(err)
      })
      sessionStorage.setItem("repos",JSON.stringify(myRepo))
      setReposCount(myRepo.length)
      myRepo = myRepo.slice(0, 14)
      setRepos(myRepo)
    }
    fetchRepos()
  }, [])
  return (
    <div
      className="container max-w-6xl min-h-screen p-12 mx-auto "
      id="proyectos"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Parece magia, funciona con código.
        </h2>
        <p className="p-4">
          A lo largo de mi carrera como programador, he tenido el privilegio de
          trabajar en proyectos retadores e increíbles.
        </p>
      </div>
      <ul className="repos-list">
        {repos.map(repo => {
          return <Repo repo={repo} key={repo.id} />
        })}
      </ul>
      <div className="mt-8 text-center">
        <a
          href="https://github.com/juanpablosolana"
          className="btn-reverse"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver todos en GitHub ({reposCount})
        </a>
      </div>
    </div>
  )
}

export default Datos
