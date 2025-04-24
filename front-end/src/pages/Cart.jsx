import React, { useState } from 'react';
import '../pageStyles/Cart.css';
import A6 from '../assets/A6.jpeg';
import Panda from '../assets/Panda.jpeg';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Impresora Térmica A6',
      price: 29.99,
      img: A6,
    },
    {
      id: 2,
      name: 'Mini Impresora Panda',
      price: 27.25,
      img: Panda,
    }
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="tienda-container">
      <h2 className="titulo-tienda">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p style={{ color: "white" }}>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="productos-grid">
            {cartItems.map((item) => (
              <div key={item.id} className="producto-card">
                <img src={item.img} alt={item.name} className="producto-img" />
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button className="btn" onClick={() => removeItem(item.id)}>Eliminar</button>
              </div>
            ))}
          </div>
          <div className="total-section">
            <h3 style={{ color: "white", marginTop: "20px" }}>
              Total a pagar: <span style={{ color: "#4ade80" }}>${getTotal()}</span>
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
