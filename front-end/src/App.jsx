import {BrowserRouter as Router, Routes, Route} 
from 'react-router'


import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product'

import Navegation from './components/Navegation'

function App() {

  return (
    <>
      <Router>
      <Navegation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
