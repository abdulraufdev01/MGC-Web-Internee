import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Admin from './Pages/Admin'
import VehicalList from './Pages/VehicalList'

export default function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes >
<Route path='/' element={<Admin/>}/>
<Route path='/list' element={<VehicalList/>}/>


   </Routes>
   </BrowserRouter>
    </div>
  )
}
