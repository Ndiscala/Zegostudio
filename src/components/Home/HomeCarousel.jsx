import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Integrante1 from '../../assets/gallery/imagen1.png'
import Integrante2 from '../../assets/gallery/imagen2.png'
import Integrante3 from '../../assets/gallery/imagen3.png'
import Integrante4 from '../../assets/gallery/imagen4.png'



function HomeCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Integrante1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Juan Barozzi Behr</h3>
          <p>WordPress</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Integrante2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Luis Brizuela</h3>
          <p>UXUI Designer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Integrante3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Rocio Fuentes</h3>
          <p>Fullstack Developer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Integrante4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Gabriel Sotto</h3>
          <p>: UXUi Designer - React developer</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;