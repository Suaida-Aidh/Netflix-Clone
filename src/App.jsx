import React from "react"
import './App.css'
import NavBar from "./Components/NavBar/NavBar"
import Banner from "./Components/Banner/Banner"
import RowPost from "./Components/RowPost/RowPost"
import {originals, action} from './urls'


function App() {

  return (
    <>
     <NavBar/>  
     <Banner />
     <RowPost url={originals} title='Netflix Originals' />
     <RowPost url={action} title='Action' isSmall />
    </>
      
    
    
  )
}

export default App
