import React from 'react';
import '../pageStyles/Register.css';

const Register = () => {
  return (
    <div className="registro-page">
      <div className="registro-card">
        <h2>Regístrate</h2>
        <form className="form-grid">
          <div className="input-group">
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              placeholder=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              id="phone"
              placeholder=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              id="address"
              placeholder=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Repetir contraseña</label>
            <input
              type="password"
              id="confirm-password"
              placeholder=""
              required
            />
          </div>
          <div className="btn-container">
          <button type="submit" className="btn-register">Crear cuenta</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
