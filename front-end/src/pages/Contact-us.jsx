import React from 'react';
import '../pageStyles/Contact-us.css';

const Contact = () => {
  return (
    <div className="tienda-container">
      <h1 className="titulo-tienda">Contáctanos</h1>

      <form className="formulario-contacto">
        <div className="campo-formulario">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>

        <div className="campo-formulario">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="campo-formulario">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
        </div>

        <button type="submit" className="btn">Enviar Mensaje</button>
      </form>
    </div>
  );
};

export default Contact;
