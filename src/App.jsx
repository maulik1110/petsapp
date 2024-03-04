import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pets from './pages/Pets'
import Shop from './pages/Shop'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pets' element={<Pets/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    
    </div>
  )
}

export default App