import React from 'react';
import photos from '../assets/gallery/servicios_photos.png';
import camera from '../assets/gallery/servicios_camera.png';
import instagram from '../assets/gallery/servicios_instagram.png';

const CardServiciosRedes = () => {
    return (
        <>
        {/* <div class="card">
            <img class="card-img-top servicios_img" src={photos} alt="laptop" style={{ width: "137.34px", height: "126.06px" }} />
            <div class="card-body">
                <h5 class="card-title">Redes Sociales</h5>
                <p class="card-text">Manejo de redes sociales y creación de contenido para plataformas digitales y redes sociales.</p>
                <div className="card-features">
                    <div className="card-feature">
                        <img src={instagram} alt="dashboard" className="card-feature-icon" style={{ width: "16.23px", height: "16.23px" }} />
                        <span className="card-feature-txt">Plataformas</span>
                    </div>
                    <div className="card-feature">
                        <img src={camera} alt="phonelink" className="card-feature-icon" style={{ width: "22.72px", height: "22.72px" }} />
                        <span className="card-feature-txt">Contenido</span>
                    </div>
                </div>
                <button className='card-btn'>Ver Mas</button>
            </div>
        </div> */}
        <div class="card-back card">
            <div class="card-body card-body-back m-0">
                <h5 class="card-title card-title-back">Redes Sociales</h5>
                <p class="card-text card-text-back m-0 p-0 mt-3">Ofrecemos gestión de redes sociales que ayudan a nuestros clientes a conectar con su audiencia en línea y aumentar su presencia en las redes sociales.</p>
                <p class="card-text card-text-back m-0 p-0 mt-3">Desde la creación de contenido hasta el manejo de redes sociales, nos aseguramos de que nuestros clientes tengan una presencia en línea sólida y efectiva.</p>
                <ul className='mt-0 p-0 mt-2'>
                    <li>Manejo de redes digitales</li>
                    <li>Contenido visual</li>
                </ul>
                <button className='card-btn card-btn-back'>Ver Menos</button>
            </div>
        </div>
        </>
    )
}

export default CardServiciosRedes