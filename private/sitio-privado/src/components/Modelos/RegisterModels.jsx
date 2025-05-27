import React, { useState } from 'react';

const RegisterModels = ({ onSubmit, editModel, onCancel }) => {
  const [modelName, setModelName] = useState(editModel ? editModel.Model : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!modelName.trim()) return;
    onSubmit({ ...editModel, Model: modelName });
    setModelName('');
  };

  return (
    <div className="product-management-container">
      <h1 className="product-management-title">
        {editModel ? 'Editar Modelo' : 'Registrar Modelo'}
      </h1>

      <form onSubmit={handleSubmit} className="product-table-container">
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Nombre del modelo"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              fontSize: '1rem',
            }}
          />
        </div>

        <div className="actions-cell">
          <button type="submit" className="edit-button">
            {editModel ? 'Actualizar' : 'Guardar'}
          </button>
          {editModel && (
            <button type="button" onClick={onCancel} className="delete-button">
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterModels;
