import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM para React 18+
import './index.css'; // Estilos globales
import App from './App'; // Componente principal de la app
import reportWebVitals from './reportWebVitals'; // Métricas de rendimiento
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de Bootstrap

// Crear el root para renderizar el componente principal
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Renderizar el componente principal App */}
  </React.StrictMode>
);

