import React from 'react';
import { Link } from 'react-router-dom';
import '../pageStyles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form>
        <div className="input-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" placeholder="" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="" required />
        </div>
        <button type="submit" className="btn">Iniciar sesión</button>
      </form>
      <div className="login-options">
        <Link to="/recuperar">¿Olvidaste tu contraseña?</Link>
        <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
      </div>
    </div>
  );
};

export default Login;

