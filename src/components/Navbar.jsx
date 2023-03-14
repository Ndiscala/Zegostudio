import React from 'react';
import '../Styles/NavBar.css';

const Navbar = () => {
  return (
    <nav 
        className="navbar bg-body-tertiary "
    >
        <div className="container-fluid shadow-sm bg-body-tertiary rounded">
            <a className="navbar-brand ms-5" href='#'>LOGO</a>

            <div className='d-flex'>
                <a className="nav-link  me-5" href="#">Home</a>
                <a className="nav-link  me-5" href="#">Nosotros</a>
                <a className="nav-link  me-5" href="#">Servicios</a>
                <a className="nav-link  me-5" href="#">Portafolio</a>
                <a className="nav-link  me-5" href="#">Contacto</a>
            </div>  
        </div>
    </nav>
  )
}    
   


export default Navbar