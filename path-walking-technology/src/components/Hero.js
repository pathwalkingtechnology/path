// src/components/Hero.js
import React from 'react';
import Slider from 'react-slick';

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <section id="home" className="hero-section">
      <Slider {...settings}>
        <div className="slide" style={{ backgroundImage: "url('/imagenes/slide1.jpg')" }}>
          <div className="hero-content">
            <h1>Innovación y Tecnología para tu Negocio</h1>
            <p>Transformamos tu negocio con soluciones a medida.</p>
          </div>
        </div>
        <div className="slide" style={{ backgroundImage: "url('/imagenes/slide2.jpg')" }}>
          <div className="hero-content">
            <h1>Soluciones Web y Aulas Virtuales</h1>
            <p>Conectamos a tu empresa con el futuro digital.</p>
          </div>
        </div>
        <div className="slide" style={{ backgroundImage: "url('/imagenes/slide3.jpg')" }}>
          <div className="hero-content">
            <h1>Desarrollo E-commerce Personalizado</h1>
            <p>Tu tienda online, diseñada para el éxito.</p>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Hero;
