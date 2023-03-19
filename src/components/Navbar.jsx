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

    <nav 
        className="navbar m-auto"
    >
        <div className="container-fluid">
            <img className="navbar-brand ms-5" alt="ZegoStudio" src={logo}/>
            <div className='d-flex'>
            {
              sections.map(sec=>{
                return <Link className='nav-link me-5' to={sec.path} key={sec.name}>{sec.name}</Link>
              })
            }
            </div>  
        </div>
    </nav>
  )
}    
   

export default Navbar