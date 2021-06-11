import React from "react"
import Header from '../components/header'
import Repos from '../components/repos'
import Curses from '../components/curses'
import Certification from '../components/certifications'
import Form from '../components/form'
// import scrollTo from "gatsby-plugin-smoothscroll"

export default function Home() {
  return(
    <div>
    <Header/>
    <Repos/>
    <Curses/>
    <Certification/>
    <Form/>
    </div>
    )
}
