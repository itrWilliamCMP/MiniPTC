import React, { useEffect } from 'react';
import '../StylePrivadoo/Customer.css'

const CustomerManagement = () => {
  useEffect(() => {
    //  link
  }, []);

  return (
    <div className="customer-management-container">
      <h1 className="customer-management-title">Gestión de Clientes</h1>

      {/* Filtro de búsqueda */}
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Buscar cliente por nombre, correo o ID..."
          className="search-input"
        />
        <button className="search-button">
          Buscar
        </button>
      </div>

      {/* Tabla de clientes */}
      <div className="customer-table-container">
        <table className="customer-table">
          <thead>
            <tr>
              <th className="table-header"># Cliente</th>
              <th className="table-header">Nombre</th>
              <th className="table-header">Correo</th>
              <th className="table-header">Fecha de Registro</th>
              <th className="table-header">Estado</th>
              <th className="table-header">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Cliente de ejemplo */}
            <tr>
              <td className="table-data">#C001</td>
              <td className="table-data">Andrea López</td>
              <td className="table-data">andrea@example.com</td>
              <td className="table-data">2025-01-20</td>
              <td className="table-data">
                <span className="status-span active-status">
                  Activo
                </span>
              </td>
              <td className="table-data actions-cell">
                <button className="view-button action-button">
                  Ver
                </button>
                <button className="edit-button action-button">
                  Editar
                </button>
                <button className="deactivate-button action-button">
                  Desactivar
                </button>
              </td>
            </tr>
           <tr>
              <td className="table-data">#C001</td>
              <td className="table-data">Andrea López</td>
              <td className="table-data">andrea@example.com</td>
              <td className="table-data">2025-01-20</td>
              <td className="table-data">
                <span className="status-span active-status">
                  Activo
                </span>
              </td>
              <td className="table-data actions-cell">
                <button className="view-button action-button">
                  Ver
                </button>
                <button className="edit-button action-button">
                  Editar
                </button>
                <button className="deactivate-button action-button">
                  Desactivar
                </button>
              </td>
            </tr>
            <tr>
              <td className="table-data">#C001</td>
              <td className="table-data">Andrea López</td>
              <td className="table-data">andrea@example.com</td>
              <td className="table-data">2025-01-20</td>
              <td className="table-data">
                <span className="status-span active-status">
                  Activo
                </span>
              </td>
              <td className="table-data actions-cell">
                <button className="view-button action-button">
                  Ver
                </button>
                <button className="edit-button action-button">
                  Editar
                </button>
                <button className="deactivate-button action-button">
                  Desactivar
                </button>
              </td>
            </tr>
            <tr>
              <td className="table-data">#C001</td>
              <td className="table-data">Andrea López</td>
              <td className="table-data">andrea@example.com</td>
              <td className="table-data">2025-01-20</td>
              <td className="table-data">
                <span className="status-span active-status">
                  Activo
                </span>
              </td>
              <td className="table-data actions-cell">
                <button className="view-button action-button">
                  Ver
                </button>
                <button className="edit-button action-button">
                  Editar
                </button>
                <button className="deactivate-button action-button">
                  Desactivar
                </button>
              </td>
            </tr>
            <tr>
              <td className="table-data">#C001</td>
              <td className="table-data">Andrea López</td>
              <td className="table-data">andrea@example.com</td>
              <td className="table-data">2025-01-20</td>
              <td className="table-data">
                <span className="status-span active-status">
                  Activo
                </span>
              </td>
              <td className="table-data actions-cell">
                <button className="view-button action-button">
                  Ver
                </button>
                <button className="edit-button action-button">
                  Editar
                </button>
                <button className="deactivate-button action-button">
                  Desactivar
                </button>
              </td>
            </tr>
             <tr>
              <td className="table-data">#C001</td>
              <td className="table-data">Andrea López</td>
              <td className="table-data">andrea@example.com</td>
              <td className="table-data">2025-01-20</td>
              <td className="table-data">
                <span className="status-span active-status">
                  Activo
                </span>
              </td>
              <td className="table-data actions-cell">
                <button className="view-button action-button">
                  Ver
                </button>
                <button className="edit-button action-button">
                  Editar
                </button>
                <button className="deactivate-button action-button">
                  Desactivar
                </button>
              </td>
            </tr>
            <tr>
              <td className="table-data">#C001</td>
              <td className="table-data">Andrea López</td>
              <td className="table-data">andrea@example.com</td>
              <td className="table-data">2025-01-20</td>
              <td className="table-data">
                <span className="status-span active-status">
                  Activo
                </span>
              </td>
              <td className="table-data actions-cell">
                <button className="view-button action-button">
                  Ver
                </button>
                <button className="edit-button action-button">
                  Editar
                </button>
                <button className="deactivate-button action-button">
                  Desactivar
                </button>
              </td>
            </tr>
            <tr>
              <td className="table-data">#C001</td>
              <td className="table-data">Andrea López</td>
              <td className="table-data">andrea@example.com</td>
              <td className="table-data">2025-01-20</td>
              <td className="table-data">
                <span className="status-span active-status">
                  Activo
                </span>
              </td>
              <td className="table-data actions-cell">
                <button className="view-button action-button">
                  Ver
                </button>
                <button className="edit-button action-button">
                  Editar
                </button>
                <button className="deactivate-button action-button">
                  Desactivar
                </button>
              </td>
            </tr>
             <tr>
              <td className="table-data">#C001</td>
              <td className="table-data">Andrea López</td>
              <td className="table-data">andrea@example.com</td>
              <td className="table-data">2025-01-20</td>
              <td className="table-data">
                <span className="status-span active-status">
                  Activo
                </span>
              </td>
              <td className="table-data actions-cell">
                <button className="view-button action-button">
                  Ver
                </button>
                <button className="edit-button action-button">
                  Editar
                </button>
                <button className="deactivate-button action-button">
                  Desactivar
                </button>
              </td>
            </tr>
             <tr>
              <td className="table-data">#C001</td>
              <td className="table-data">Andrea López</td>
              <td className="table-data">andrea@example.com</td>
              <td className="table-data">2025-01-20</td>
              <td className="table-data">
                <span className="status-span active-status">
                  Activo
                </span>
              </td>
              <td className="table-data actions-cell">
                <button className="view-button action-button">
                  Ver
                </button>
                <button className="edit-button action-button">
                  Editar
                </button>
                <button className="deactivate-button action-button">
                  Desactivar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerManagement;
