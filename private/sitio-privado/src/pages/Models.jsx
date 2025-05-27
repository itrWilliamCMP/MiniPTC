import React, { useState, useEffect } from 'react';
import ListModels from '../components/Modelos/ListModels';
import RegisterModels from '../components/Modelos/RegisterModels';
import '../StylePrivadoo/models.css';

const Models = () => {
  const [models, setModels] = useState([]);
  const [editModel, setEditModel] = useState(null);

  useEffect(() => {
    fetchModels();
  }, []);

  const fetchModels = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/models');
      const data = await response.json();
      setModels(data);
    } catch (error) {
      console.error('Error al obtener los modelos:', error);
    }
  };

  const handleCreateOrUpdate = async (model) => {
    try {
      const method = model._id ? 'PUT' : 'POST';
      const url = model._id
        ? `http://localhost:4000/api/models/${model._id}`
        : 'http://localhost:4000/api/models';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(model),
      });

      if (response.ok) {
        fetchModels();
        setEditModel(null);
      } else {
        console.error('Error en la respuesta del servidor');
      }
    } catch (error) {
      console.error('Error al crear o actualizar el modelo:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/models/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchModels();
      } else {
        console.error('Error al eliminar el modelo');
      }
    } catch (error) {
      console.error('Error al eliminar el modelo:', error);
    }
  };

  return (
    <>
      <RegisterModels
        onSubmit={handleCreateOrUpdate}
        editModel={editModel}
        onCancel={() => setEditModel(null)}
      />
      <ListModels
        models={models}
        onEdit={setEditModel}
        onDelete={handleDelete}
      />
    </>
  );
};

export default Models;
