import React from "react"
import Header from '../components/header'
import Repos from '../components/repos'
import Curses from '../components/curses'
import Certification from '../components/certifications'

export default function Home() {
  return(
    <div>
    <Header/>
    <Repos/>
    <Curses/>
    <Certification/>
    </div>
    )
}
