import React from 'react'
import Integrante1 from '../../assets/gallery/imagen1.png'
import Integrante2 from '../../assets/gallery/imagen2.png'
import Integrante3 from '../../assets/gallery/imagen3.png'
// import Integrante4 from '../../assets/gallery/imagen4.png'

export const HomeCarousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Integrante1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Juan Barozzi Behr</h5>
        <p>WordPress</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Integrante2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Luis Brizuela</h5>
        <p>UXUI Designer</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Integrante3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Rocio Fuentes</h5>
        <p>Fullstack Developer</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
