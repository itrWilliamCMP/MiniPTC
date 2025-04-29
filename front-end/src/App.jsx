import {BrowserRouter as Router, Routes, Route} 
from 'react-router'


import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Contact from './pages/Contact-us'
import Recuperar from './pages/Recuperar'
import Profile from './pages/Profile'

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
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/recuperar" element={<Recuperar />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
