import React from 'react'
import Integrante from '../../assets/gallery/imagen1.png'
import HomeCarousel from './HomeCarousel'



const HomeDesign = () => {
  return (
    <div className='d-flex justify-content-evenly m-3'>
        <div className='section1'>
            <div>
                <h1>¡HOLA!</h1>
                <h1>BIENVENIDO A </h1>
                <h1>ZEGO STUDIO</h1>

                <p className=''>Somos un estudio creativo especializado en <b>diseño y desarrollo web, <br /> branding</b> y estrategias de redes sociales.</p>
                <p className=''>Ofrecemos soluciones <b>innovadoras</b> y de <b>alta calidad</b> para hacer que tu <br /> negocio destaque en el mercado.</p>
                
                <p className='description'><i className="bi bi-person-check m-3"></i> Diseño centrado en el usuario</p>
                <p className='description'><i className="bi bi-qr-code m-3"></i> Sitios web optimizados y personalizados.</p>
            </div>
            
                
            
            <div className='Contactanos'>
                <h5 className='contactar m-3'>!Mándanos un mensaje!</h5>
                <button type="button" className="btn  btn-sm" > 
                       <a href='https://web.whatsapp.com/'><i class="bi bi-whatsapp m-1 icon"></i> 
                        Quiero hablar por whatsapp</a> 
                        
                </button>
            </div>
            <div className='d-flex  Declaraciones'>
                
                      <img src={Integrante} alt='...' />
                
               
                <div className='m-3'>
                    <p className='text m-3'>"Trabajamos con más de 150 empresas de LATAM."</p>
                    <p className='integrante m-3'> - Luís Brizuela, UX/UI Designer. </p>
                </div>
            </div>

        </div>
        <div className='section2'>
            <HomeCarousel />
        </div>
    </div>
  )
}

export default HomeDesign