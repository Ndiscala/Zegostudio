import React from 'react'
import '../assets/styles/Footer.css'
import Logo from '../assets/gallery/logo.jpeg'

const Footer = () => {
  return (
    <footer className=" text-center footer  m-3">
        <div className="container-fluid p-4 pb-0">
              <div className="row  d-flex footer-content justify-content-evenly m-3">
                
                <div className="d-flex col-auto m-3 logo">
                  <img src={Logo}  alt='zego' />
                  <p>ZEGO STUDIO</p>
                    
                  
                </div>
                
      
                
                <div className="col-auto m-3 politica">
                  
                <p className='sub'>POLITICA DE PRIVACIDAD - POLITICA DE COOKIES</p>
                <p className='text'>Desarrollado por: Lucia Cappellini, Erick Magallán, Nicolas Di Scala.</p>
                  
                    
                  
                </div>
                
                <div className="col-auto m-3 ">
                <a className="btn "
                href="#"
                role="button"> 
                          <i className="bi bi-linkedin "></i>
                </a>
                
                <a className="btn "
                href="https://www.instagram.com/sego_studio"
                role="button"> 
                          <i className="bi bi-instagram "></i>
                </a>
                
                
                <a className="btn "
                href="#"
                role="button"> 
                <i className="bi bi-globe "></i>
                </a>
                
                <a className="btn "
                href="https://www.behance.net/ZegoStudio"
                role="button"> 
                <i className="bi bi-behance "></i>
                </a>

              </div>
                
                
              </div>
        
        </div>
    
          {/* <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2020 Copyright: Desarrollador por ...............
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div> */}
  </footer>
  )
}

export default Footer