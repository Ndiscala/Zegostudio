import React from 'react';
import '../assets/styles/Servicios.css'
import laptop from '../assets/gallery/servicios_laptop.png';
import paint from '../assets/gallery/servicios_paint.png';
import photos from '../assets/gallery/servicios_photos.png';


const Servicios = () => {
  return (
    <>
    <div className='section Servicios'>
      <h1>Servicios</h1>
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top servicios_img" src={laptop} alt="laptop" style={{width:"221.78px", height:"97.56px"}}/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top servicios_img" src={paint} alt="paint" style={{width:"137.55px", height:"126.26px"}}/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top servicios_img" src={photos} alt="photos" style={{width:"137.34px", height:"126.07px"}}/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>  
      </div>
    </div>
    </>
    )
}

export default Servicios