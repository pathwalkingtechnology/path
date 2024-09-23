// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';  // Archivo CSS personalizado

import ContactForm from './components/ContactForm';
import ChatImage from './components/ChatImage';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}

// Encabezado con el logo y la navegación
function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/imagenes/logo-web.png" alt="Path Walking Technology" height="40" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

// Sección Hero (principal)
function HeroSection() {
  return (
    <section className="hero-section text-white text-center d-flex align-items-center" style={{ height: '80vh', backgroundImage: 'url("/imagenes/slide1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container">
        <h1 className="display-4">Transformamos la tecnología</h1>
        <p className="lead">Caminamos contigo hacia el futuro</p>
        <a href="#contact" className="btn btn-primary btn-lg">Contáctanos</a>
      </div>
    </section>
  );
}

// Sección de Servicios
function Services() {
  return (
    <section className="services-section py-5">
      <div className="container">
        <h2 className="text-center">Nuestros Servicios</h2>
        <div className="row text-center mt-4">
          <div className="col-md-4">
            <div className="service-card p-3">
              <img src="/imagenes/desarrollo.png" alt="Servicio 1" />
              <h4>Desarrollo Web</h4>
              <p>Webs institucionales y comercio electrónico</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card p-3">
              <img src="/imagenes/aula.png" alt="Servicio 2" />
              <h4>Aula Virtual</h4>
              <p>Plataformas de aprendizaje online</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card p-3">
              <img src="/imagenes/tecnologico.png" alt="Servicio 3" />
              <h4>Asesoramiento Tecnológico</h4>
              <p>Consultoría y asesoramiento en tecnología</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Pie de página
function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>&copy; 2024 Path Walking Technology. Todos los derechos reservados.</p>
        <div>
         <ChatImage />
          <a href="https://linkedin.com" className="text-white mx-2">LinkedIn</a>
          <a href="https://twitter.com" className="text-white mx-2">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default App;
