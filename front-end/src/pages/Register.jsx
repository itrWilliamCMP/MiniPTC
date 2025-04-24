import React from 'react';
import '../pageStyles/Register.css'

const Register = () => {
    return (
      <div className="registro-container">
        <h2>Regístrate</h2>
        <form>
          <div className="input-group">
            <label htmlFor="name">Nombre completo</label>
            <input type="text" id="name" placeholder="Introduce tu nombre completo" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" placeholder="Introduce tu correo" required />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Teléfono</label>
            <input type="tel" id="phone" placeholder="Introduce tu número de teléfono" required />
          </div>
          <div className="input-group">
            <label htmlFor="address">Dirección</label>
            <input type="text" id="address" placeholder="Introduce tu dirección" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Introduce tu contraseña" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Repetir contraseña</label>
            <input type="password" id="confirm-password" placeholder="Repite tu contraseña" required />
          </div>
          <button type="submit" className="btn">Crear cuenta</button>
        </form>
      </div>
    );
  };

export default Register;