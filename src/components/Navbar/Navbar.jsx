// import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menu,setMenu]=useState("home")
  return (
    <div className='navbar'>

      <img src={assets.food} alt='Food' className='logo'/>
      <ul className="navbar-menu">
      <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
  <Link to="/home">Home</Link>
</li>      <li  onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
      <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</li>
      <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li></ul>
      <div className="navbar-right">
        <img src={assets.search} alt='search' className='icon'/>
        <div className="navbar-search-icon">
          <img src={assets.cart} alt='cart' className='icon'/>
          <div className='dot'></div>
         
         
        </div>
        <button>Sign In</button>

      </div>
    </div>
  )
}

export default Navbar
