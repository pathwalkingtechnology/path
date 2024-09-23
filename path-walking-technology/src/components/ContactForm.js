// src/components/ContactForm.js
import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://wa.me/5493764617711?text=Name: ${name}%0AMessage: ${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="container mt-5">
      <h2>Contactenos via Whatsapp</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea 
            className="form-control" 
            rows="4" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar via WhatsApp
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
