import React, { useEffect, useState } from 'react';
import '../StylePrivadoo/Supplier.css'

const Suppliers = () => {
  const [proveedores, setProveedores] = useState([
    {
      id: 1,
      nombre: 'PrintTech Supplies',
      correo: 'contacto@printtech.com',
      telefono: '503-7890-1234',
      direccion: 'San Salvador, El Salvador',
    },
    {
      id: 2,
      nombre: 'Global Print Co.',
      correo: 'ventas@globalprint.com',
      telefono: '503-7450-5678',
      direccion: 'Santa Ana, El Salvador',
    },
  ]);

  const [nuevoProveedor, setNuevoProveedor] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    direccion: '',
  });

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProveedor({ ...nuevoProveedor, [name]: value });
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    if (nuevoProveedor.nombre && nuevoProveedor.correo) {
      setProveedores([
        ...proveedores,
        { ...nuevoProveedor, id: proveedores.length + 1 },
      ]);
      setNuevoProveedor({ nombre: '', correo: '', telefono: '', direccion: '' });
    }
  };

  return (
    <div className="suppliers-root">
      <div className="suppliers-container">
        <h1 className="suppliers-title">Gestión de Proveedores</h1>

        {/* Formulario de nuevo proveedor */}
        <form onSubmit={handleAgregar} className="suppliers-form">
          <h2 className="form-title">Registrar nuevo proveedor</h2>
          <div className="form-grid">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre del proveedor"
              value={nuevoProveedor.nombre}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
              value={nuevoProveedor.correo}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono"
              value={nuevoProveedor.telefono}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="text"
              name="direccion"
              placeholder="Dirección"
              value={nuevoProveedor.direccion}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="mt-4 text-center">
            <button type="submit" className="btn-submit">
              Agregar proveedor
            </button>
          </div>
        </form>

        {/* Lista de proveedores existentes */}
        <div className="suppliers-list">
          <h2 className="list-title">Listado de proveedores</h2>
          <ul className="list-items">
            {proveedores.map((prov) => (
              <li key={prov.id} className="list-item">
                <p className="provider-name">{prov.nombre}</p>
                <p>📧 {prov.correo}</p>
                <p>📞 {prov.telefono}</p>
                <p>📍 {prov.direccion}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
