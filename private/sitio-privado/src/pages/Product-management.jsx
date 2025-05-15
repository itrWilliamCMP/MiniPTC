import React, { useEffect } from 'react';
import '../StylePrivadoo/ProductMana.css';

const ProductManagement = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const products = [
    { id: 1, nombre: 'Mini Impresora Térmica', marca: 'PrintFast', precio: 59.99, stock: 12 },
    { id: 2, nombre: 'Etiquetadora Portátil', marca: 'LabelPro', precio: 45.50, stock: 25 },
    { id: 3, nombre: 'Impresora de Recibos Bluetooth', marca: 'ReceiptTech', precio: 89.00, stock: 8 },
    { id: 4, nombre: 'Impresora de Credenciales', marca: 'CardPrint', precio: 120.00, stock: 5 },
    { id: 5, nombre: 'Impresora de Fotos Portátil', marca: 'PhotoSnap', precio: 75.00, stock: 15 },
    { id: 6, nombre: 'Impresora Textil', marca: 'FabricPrint', precio: 299.00, stock: 3 },
    { id: 7, nombre: 'Impresora 3D Mini', marca: 'BuildMaster', precio: 199.00, stock: 6 },
    { id: 8, nombre: 'Impresora Láser Monocromo', marca: 'LaserJetPro', precio: 150.00, stock: 10 },
    { id: 9, nombre: 'Impresora de Inyección a Color', marca: 'ColorPrintPlus', precio: 110.00, stock: 18 },
    { id: 10, nombre: 'Impresora Multifunción', marca: 'MultiPrintMax', precio: 220.00, stock: 4 },
    { id: 11, nombre: 'Impresora Térmica de Etiquetas', marca: 'LabelMaster', precio: 65.00, stock: 20 },
  ];

  return (
    <div className="product-management-container">
      <h1 className="product-management-title">
        Gestión de Productos
      </h1>

      {/* Botón para agregar nuevo producto */}
      <div className="add-product-button-container">
        <button className="add-product-button">
          + Agregar Producto
        </button>
      </div>

      {/* Tabla de productos */}
      <div className="product-table-container">
        <table className="product-table">
          <thead className="product-table-header">
            <tr>
              <th className="product-table-header-cell">#</th>
              <th className="product-table-header-cell">Nombre</th>
              <th className="product-table-header-cell">Marca</th>
              <th className="product-table-header-cell">Precio</th>
              <th className="product-table-header-cell">Stock</th>
              <th className="product-table-header-cell">Acciones</th>
            </tr>
          </thead>
          <tbody className="product-table-body">
            {products.map((product) => (
              <tr key={product.id} className="product-table-row">
                <td className="product-table-cell">{product.id}</td>
                <td className="product-table-cell">{product.nombre}</td>
                <td className="product-table-cell">{product.marca}</td>
                <td className="product-table-cell">${product.precio.toFixed(2)}</td>
                <td className="product-table-cell">{product.stock}</td>
                <td className="product-table-cell actions-cell">
                  <button className="edit-button">
                    Editar
                  </button>
                  <button className="delete-button">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
