import React from 'react';
import '../Styles/NavBar.css';
import { Link } from 'react-router-dom';


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
        className="navbar bg-body-tertiary "
    >
        <div className="container-fluid shadow-sm bg-body-tertiary rounded">
            <a className="navbar-brand ms-5" href='#'>LOGO</a>

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
  {/* <Link className="nav-link  me-5" >Home</Link>
  <Link className="nav-link  me-5" >Nosotros</Link>
  <Link className="nav-link  me-5" >Servicios</Link>
  <Link className="nav-link  me-5" >Portafolio</Link>
  <Link className="nav-link  me-5" >Contacto</Link> */}
}    
   

export default Navbar