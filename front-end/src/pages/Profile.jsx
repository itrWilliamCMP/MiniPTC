import React, { useState, useEffect } from 'react';
import '../pageStyles/Profile.css';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    profilePicture: '', // Foto de perfil
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [previewImage, setPreviewImage] = useState(null); // Para la vista previa de la imagen
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = {
        name: 'Juan Pérez',
        email: 'juanperez@example.com',
        phone: '123-456-7890',
        address: 'Calle Ficticia 123',
        profilePicture: 'https://via.placeholder.com/150',
      };
      setFormData(userData);
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setPreviewImage(objectURL);
      setFormData((prevData) => ({
        ...prevData,
        profilePicture: file,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlertMessage('¡Datos actualizados correctamente!');
    
    // Limpiamos los campos después de 3 segundos
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        profilePicture: '',
      });
      setPreviewImage(null);
      setAlertMessage('');
    }, 3000);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    // Verifica que las contraseñas coincidan
    if (passwordData.newPassword === passwordData.confirmPassword) {
      setAlertMessage('¡Contraseña actualizada correctamente!');
      setTimeout(() => {
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
        setAlertMessage('');
      }, 3000);
    } else {
      setAlertMessage('Las contraseñas no coinciden. Intenta nuevamente.');
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2>Perfil de Usuario</h2>
        {alertMessage && (
          <div className="alert">
            <p>{alertMessage}</p>
          </div>
        )}

        {/* Foto de perfil */}
        <div className="profile-picture-container">
          <img
            src={previewImage || formData.profilePicture}
            alt="Foto de perfil"
            className="profile-picture"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="file-input"
          />
        </div>

        {/* Formulario de actualización */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="btn-container">
            <button type="submit" className="btn-update">Actualizar Datos</button>
          </div>
        </form>

        {/* Formulario de actualización de contraseña */}
        <div className="password-update">
          <h3>Actualizar Contraseña</h3>
          <form onSubmit={handlePasswordSubmit}>
            <div className="input-group">
              <label htmlFor="currentPassword">Contraseña actual</label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="newPassword">Nueva contraseña</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirmar nueva contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="btn-container">
              <button type="submit" className="btn-update">Actualizar Contraseña</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
