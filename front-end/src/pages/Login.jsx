import React from 'react';
import '../pageStyles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form>
        <div className="input-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" placeholder="Introduce tu correo" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Introduce tu contraseña" />
        </div>
        <button type="submit" className="btn">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;

