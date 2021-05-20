import React from "react"
import Header from '../components/header'
import Repos from '../components/repos'
import Curses from '../components/curses'

export default function Home() {
  return(
    <div>
    <Header/>
    <Repos/>
    <Curses/>
    </div>
    )
}
