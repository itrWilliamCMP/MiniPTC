import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import '../pageStyles/Contact-us.css';

const Contact = () => {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const lanzarConfeti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00ffe5', '#4ade80', '#ffffff', '#00d0ff'],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensajeEnviado(true);
    lanzarConfeti();

    // Aquí limpiamos los campos después de enviar el mensaje
    setFormData({
      nombre: '',
      email: '',
      mensaje: '',
    });

    // Oculta el mensaje después de 3 segundos
    setTimeout(() => {
      setMensajeEnviado(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="contact-fondo-animado"></div>
      <div className="contact-tienda-container">
        <h1 className="contact-titulo-tienda">Contáctanos</h1>

        <form className="contact-formulario-contacto" onSubmit={handleSubmit}>
          <div className="contact-campo-formulario">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-campo-formulario">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-campo-formulario">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">Enviar Mensaje</button>
        </form>

        {mensajeEnviado && (
          <div className="contact-modal-exito">✅ ¡Mensaje enviado con éxito!</div>
        )}
      </div>
    </>
  );
};

export default Contact;
