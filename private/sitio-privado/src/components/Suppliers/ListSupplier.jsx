import React from "react";

const ListSupplier = ({ suppliers, loading, deleteSupplier, updateSupplier }) => {
  if (loading) return <p>Cargando proveedores...</p>;

  return (
    <div className="suppliers-list">
      <h2 className="list-title">Listado de Proveedores</h2>
      <ul className="list-items">
        {suppliers.map((prov) => (
          <li key={prov._id} className="list-item">
            <p className="provider-name">{prov.nombre}</p>
            <p>📧 {prov.correo}</p>
            <p>📞 {prov.telefono}</p>
            <p>📍 {prov.direccion}</p>
            <div className="action-buttons">
              <button onClick={() => updateSupplier(prov)} className="btn-edit">Editar</button>
              <button onClick={() => deleteSupplier(prov._id)} className="btn-delete">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSupplier;
