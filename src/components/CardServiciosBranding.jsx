import React from 'react';
import paint from '../assets/gallery/servicios_paint.png';
import colorlens from '../assets/gallery/servicios_colorlens.png';
import apple from '../assets/gallery/servicios_apple.png';


const CardServiciosBranding = () => {
    return (
        <>
        {/* <div class="card">
            <img class="card-img-top servicios_img" src={paint} alt="laptop" style={{ width: "137.55px", height: "126.26px" }} />
            <div class="card-body">
                <h5 class="card-title">Branding</h5>
                <p class="card-text">Diseñamos la identidad de marca para tu negocio, desde el enfoque estético, comercial y marketing.</p>
                <div className="card-features">
                    <div className="card-feature">
                        <img src={apple} alt="dashboard" className="card-feature-icon" style={{ width: "25.25px", height: "25.25px" }} />
                        <span className="card-feature-txt">Logotipos</span>
                    </div>
                    <div className="card-feature">
                        <img src={colorlens} alt="phonelink" className="card-feature-icon" style={{ width: "27.86px", height: "27.86px" }} />
                        <span className="card-feature-txt">Colorimetría</span>
                    </div>
                </div>
                <button className='card-btn'>Ver Mas</button>
            </div>
        </div> */}
        <div class="card-back card">
            <div class="card-body card-body-back m-0">
                <h5 class="card-title card-title-back">Branding</h5>
                <p class="card-text card-text-back m-0 p-0 mt-2">Ayudamos a nuestros clientes a construir y consolidar su imagen de marca. </p>
                <p class="card-text card-text-back m-0 p-0 mt-2">Desde el diseño de logotipos y paletas de colores hasta la creación de mensajes de marca efectivos, nos aseguramos de que cada elemento de la identidad visual de nuestros clientes sea coherente y refleje su personalidad de marca.</p>
                <ul className='m-0 p-0 mt-2'>
                    <li>Colorimetría específica</li>
                    <li>Creación de logotipos</li>
                    <li>Identidad de marca</li>
                </ul>
                <button className='card-btn card-btn-back'>Ver Menos</button>
            </div>
        </div>
        </>
    )
}

export default CardServiciosBranding