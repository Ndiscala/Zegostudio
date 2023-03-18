import React from 'react';
import laptop from '../assets/gallery/servicios_laptop.png';
import dashboard from '../assets/gallery/servicios_dashboard.png';
import phoneLink from '../assets/gallery/servicios_phonelink.png';

const CardServiciosDesign = () => {
  return (
    <>
    {/* <div class="card">
      <img class="card-img-top" src={laptop} alt="laptop" style={{ width: "221.78px", height: "97.56px", position: "relative", top: "25px" }} />
      <div class="card-body">
        <h5 class="card-title">Web design</h5>
        <p class="card-text">Diseño de aplicaciones y páginas web partiendo desde el diseño hasta el desarrollo de la plataforma</p>
        <div className="card-features">
          <div className="card-feature">
            <img src={dashboard} alt="dashboard" className="card-feature-icon" style={{ width: "16.23px", height: "16.23px" }} />
            <span className="card-feature-txt">UX/UI Design</span>
          </div>
          <div className="card-feature">
            <img src={phoneLink} alt="phonelink" className="card-feature-icon" style={{ width: "22.72px", height: "22.72px" }} />
            <span className="card-feature-txt">Responsive</span>
          </div>
        </div>
        <button className='card-btn'>Ver Mas</button>
      </div>
    </div> */}
    <div class="card-back card">
            <div class="card-body card-body-back m-0">
                <h5 class="card-title card-title-back">Web Design</h5>
                <p class="card-text card-text-back m-0 p-0 mt-2">Ofrecemos servicios de diseño web personalizados que se adaptan a las necesidades específicas del usuario. </p>
                <p class="card-text card-text-back m-0 p-0 mt-3">Nuestro equipo de expertos en diseño y desarrollo web trabaja en estrecha colaboración con nuestros clientes para crear sitios web modernos, intuitivos y efectivos que reflejen su imagen de marca y les ayuden a conectarse con su audiencia en línea. </p>
                <ul className='m-0 p-0 mt-4'>
                    <li>Interfaces optimizadas</li>
                    <li>Responsive design</li>
                </ul>
                <button className='card-btn card-btn-back'>Ver Menos</button>
            </div>
        </div>
    </>
  )
}

export default CardServiciosDesign