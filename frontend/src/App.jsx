import React from 'react'
import {BrowserRouter,Routes ,Route} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register';
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>

      <Routes>
        <Route path='/login' element={<Login/>} />
      </Routes>

      <Routes>
        <Route path='/register' element={<Register/>} />
      </Routes>

      <Routes>
        <Route path='/products/:category' element={<ProductList/>} />
      </Routes>

      <Routes>
        <Route path='/product/:id' element={<ProductDetail/>} />
      </Routes>

      <Routes>
        <Route path='/products' element={<Products/>} />
      </Routes>

      <Routes>
        <Route path='/aboutus' element={<AboutUs/>} />
      </Routes>

    </BrowserRouter>

  )
}

export default App