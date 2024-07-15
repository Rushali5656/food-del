// import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <div>
      <div className='app'><Navbar/></div>
      <Home/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>

      </Routes>
      <Footer/>
    </div>
   
    </>
  )
}

export default App
