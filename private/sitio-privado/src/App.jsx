// Importación de componentes necesarios para el enrutamiento y las páginas
import { BrowserRouter as Router, Routes, Route } from 'react-router'

// Importación de las distintas páginas que usará la aplicación
import HomePriv from './pages/HomePriv'
import ProductManagement from './pages/Product-management'
import OrderManagement from './pages/Order-management'
import Customer from './pages/Customer'
import Messages from './pages/Messages'
import Suppliers from './pages/Supplier'
import Models from "./pages/Models"
import Mark from './pages/Mark'

// Importación del componente de navegación principal
import NavPriv from './components/NavPriv'

function App() {
  return (
    <>
      {/* Envolvemos la aplicación con Router para habilitar la navegación entre rutas */}
      <Router>
        {/* Barra de navegación que estará presente en todas las páginas */}
        <NavPriv />
        
        {/* Definición de las rutas disponibles en la app */}
        <Routes>
          <Route path="/" element={<HomePriv />} />          
          <Route path="/productos" element={<ProductManagement />} />    
          <Route path="/pedidos" element={<OrderManagement />} /> 
          <Route path="/clientes" element={<Customer />} /> 
          <Route path="/mensajes" element={<Messages />} />       
          <Route path="/provedores" element={<Suppliers/>}/>  
          <Route path="/mark" element={<Mark />} />
          <Route path="/models" element={<Models />} />
        </Routes>
      </Router>
    </>
  )
}

export default App