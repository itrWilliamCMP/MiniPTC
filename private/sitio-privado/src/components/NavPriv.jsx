import React, { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";

const NavPriv = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-black text-white shadow-md border-b-4 border-black z-50"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center text-lg">
        {/* Logo */}
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Panel Administrativo
        </div>

        {/* Botón hamburguesa */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú de navegación */}
        <ul
          className={`lg:flex lg:space-x-6 lg:items-center font-medium transition-all duration-300 ease-in-out ${
            menuOpen
              ? "absolute top-20 left-0 w-full bg-black px-6 py-4 space-y-4 flex flex-col z-50"
              : "hidden lg:flex"
          }`}
        >
           <li>
            <a
              href="/models"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 transition duration-200"
            >
              Models
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 transition duration-200"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/productos"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 transition duration-200"
            >
              Productos
            </a>
          </li>
          <li>
            <a
              href="/pedidos"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 transition duration-200"
            >
              Pedidos
            </a>
          </li>
          <li>
            <a
              href="/clientes"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 transition duration-200"
            >
              Clientes
            </a>
          </li>
          <li>
            <a
              href="/mensajes"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 transition duration-200"
            >
              Mensajes
            </a>
          </li>
          <li>
            <a
              href="/provedores"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 transition duration-200"
            >
              Proveedores
            </a>
          </li>
          <li>
            <a
              href="/mark"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 transition duration-200"
            >
              Marcas
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default NavPriv;
