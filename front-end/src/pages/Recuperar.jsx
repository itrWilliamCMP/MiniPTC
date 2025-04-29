import React from 'react';
import '../pageStyles/Recuperar.css';

const Recuperar = () => {
  return (
    <div className="recuperar-container">
      <h2>Recuperar Contraseña</h2>
      <form>
        <div className="input-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" placeholder="Introduce tu correo" required />
        </div>
        <button type="submit" className="btn">Enviar enlace de recuperación</button>
      </form>
    </div>
  );
};

export default Recuperar;
