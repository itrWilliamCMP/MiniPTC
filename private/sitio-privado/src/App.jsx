// Importación de componentes necesarios para el enrutamiento y las páginas
import { BrowserRouter as Router, Routes, Route } from 'react-router'

// Importación de las distintas páginas que usará la aplicación
import HomePriv from './pages/HomePriv'
import ProductManagement from './pages/Product-management'
import OrderManagement from './pages/Order-management'
import CustomerManagement from './pages/Customer-management'
import Messages from './pages/Messages'
import Suppliers from './pages/Supplier'

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
          <Route path="/clientes" element={<CustomerManagement />} /> 
          <Route path="/mensajes" element={<Messages />} />       
          <Route path="/provedores" element={<Suppliers/>}/>   
        </Routes>
      </Router>
    </>
  )
}

export default App