// Importación de componentes necesarios para el enrutamiento y las páginas
import { BrowserRouter as Router, Routes, Route } from 'react-router'

// Importación de las distintas páginas que usará la aplicación
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Contact from './pages/Contact-us'
import Recuperar from './pages/Recuperar'
import Profile from './pages/Profile'

// Importación del componente de navegación principal
import Navegation from './components/Navegation'

function App() {
  return (
    <>
      {/* Envolvemos la aplicación con Router para habilitar la navegación entre rutas */}
      <Router>
        {/* Barra de navegación que estará presente en todas las páginas */}
        <Navegation />
        
        {/* Definición de las rutas disponibles en la app */}
        <Routes>
          <Route path="/" element={<Home />} />           {/* Página de inicio */}
          <Route path="/login" element={<Login />} />     {/* Página de inicio de sesión */}
          <Route path="/register" element={<Register />} /> {/* Página de registro */}
          <Route path="/product" element={<Product />} /> {/* Página de productos */}
          <Route path="/cart" element={<Cart />} />       {/* Página del carrito */}
          <Route path="/contact" element={<Contact/>}/>   {/* Página de contacto */}
          <Route path="/recuperar" element={<Recuperar />} /> {/* Recuperación de contraseña */}
          <Route path="/profile" element={<Profile />} /> {/* Perfil del usuario */}
        </Routes>
      </Router>
    </>
  )
}

export default App