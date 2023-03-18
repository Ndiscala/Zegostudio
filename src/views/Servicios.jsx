import React from 'react';
import '../assets/styles/Servicios.css'
import laptop from '../assets/gallery/servicios_laptop.png';
import paint from '../assets/gallery/servicios_paint.png';
import photos from '../assets/gallery/servicios_photos.png';
import dashboard from '../assets/gallery/servicios_dashboard.png';
import phoneLink from '../assets/gallery/servicios_phonelink.png';
import colorlens from '../assets/gallery/servicios_colorlens.png';
import apple from '../assets/gallery/servicios_apple.png';
import camera from '../assets/gallery/servicios_camera.png';
import instagram from '../assets/gallery/servicios_instagram.png';

const Servicios = () => {
  return (
    <>
    <div className='section Servicios'>
      <h1>Servicios</h1>
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src={laptop} alt="laptop" style={{width:"221.78px", height:"97.56px", position:"relative", top:"25px"}}/>
          <div class="card-body">
            <h5 class="card-title">Web design</h5>
            <p class="card-text">Diseño de aplicaciones y páginas web partiendo desde el diseño hasta el desarrollo de la plataforma</p>
            <div className="card-features">
              <div className="card-feature">
                <img src={dashboard} alt="dashboard" className="card-feature-icon" style={{width:"16.23px", height:"16.23px"}}/>
                <span className="card-feature-txt">UX/UI Design</span>
              </div>
              <div className="card-feature">
                <img src={phoneLink} alt="phonelink" className="card-feature-icon" style={{width:"22.72px", height:"22.72px"}}/>
                <span className="card-feature-txt">Responsive</span>
              </div>
            </div>
            <button className='card-btn'>Ver Mas</button>
          </div>
        </div>  
        <div class="card">
          <img class="card-img-top servicios_img" src={paint} alt="laptop" style={{width:"137.55px", height:"126.26px"}}/>
          <div class="card-body">
            <h5 class="card-title">Branding</h5>
            <p class="card-text">Diseñamos la identidad de marca para tu negocio, desde el enfoque estético, comercial y marketing.</p>
            <div className="card-features">
              <div className="card-feature">
                <img src={apple} alt="dashboard" className="card-feature-icon" style={{width:"25.25px", height:"25.25px"}}/>
                <span className="card-feature-txt">Logotipos</span>
              </div>
              <div className="card-feature">
                <img src={colorlens} alt="phonelink" className="card-feature-icon" style={{width:"27.86px", height:"27.86px"}}/>
                <span className="card-feature-txt">Colorimetría</span>
              </div>
            </div>
            <button className='card-btn'>Ver Mas</button>
          </div>
        </div>  
        <div class="card">
          <img class="card-img-top servicios_img" src={photos} alt="laptop" style={{width:"137.34px", height:"126.06px"}}/>
          <div class="card-body">
            <h5 class="card-title">Redes Sociales</h5>
            <p class="card-text">Manejo de redes sociales y creación de contenido para plataformas digitales y redes sociales.</p>
            <div className="card-features">
              <div className="card-feature">
                <img src={instagram} alt="dashboard" className="card-feature-icon" style={{width:"16.23px", height:"16.23px"}}/>
                <span className="card-feature-txt">Plataformas</span>
              </div>
              <div className="card-feature">
                <img src={camera} alt="phonelink" className="card-feature-icon" style={{width:"22.72px", height:"22.72px"}}/>
                <span className="card-feature-txt">Contenido</span>
              </div>
            </div>
            <button className='card-btn'>Ver Mas</button>
          </div>
        </div>  
      </div>
    </div>
    </>
    )
}

export default Servicios