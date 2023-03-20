import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import logo from '../assets/gallery/logo_xs.jpeg';

const Navbar = () => {
  
  const sections = [
    {name:'Home' , path: '/'},
    {name:'Nosotros' , path:'/nosotros' },
    {name:'Servicios' , path:'/servicios' },
    {name:'Portafolio' , path:'/portafolio' },
    {name:'Contacto' , path:'/contacto'}
  ]
  
  
  return (
<>
    <nav 
        className="navbar m-auto"
    >
        <div className="container-fluid">
            <img className="navbar-brand ms-5" alt="ZegoStudio" src={logo}/>
            <div className='d-flex'>
            {
              sections.map(sec=>{
                return <Link className='nav-link' to={sec.path} key={sec.name}>{sec.name}</Link>
              })
            }
            </div>  
        </div>
    </nav>
    <div className="nav" style={{height:"6rem"}}>
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
    <img className="navbar-brand ms-5" alt="ZegoStudio" src={logo} />
    </div>
  </div>
  <div className="nav-btn" style={{backgroundColor:"transparent"}}>
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
  {
              sections.map(sec=>{
                return <Link className='nav-link' to={sec.path} key={sec.name}>{sec.name}</Link>
              })
  }
  </div>
  </div>
  </>
  )
}    
   

export default Navbar