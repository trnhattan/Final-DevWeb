import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes ,Route} from "react-router-dom"
import { useDispatch } from 'react-redux';
import {store} from './redux/store'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register';
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import Warranty from './pages/Warranty'
import ShippingPolicy from './pages/ShippingPolicy'
import Account from './pages/Account'
import Cart from './pages/Cart'
import UpdateProfile from './pages/UpdateProfile'
import UpdatePassword from './pages/UpdatePassword';
import { ForgotPassword } from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Shipping from './pages/Shipping';

const App = () => {

  const ScrollTotTop = () => {
    window.scrollTo(0, 0);
    return null;
  }


  return (
    

    <BrowserRouter>

      <Routes><Route path='/' element={<Home/>} /></Routes>
      
      <Routes> <Route path='/about-us' element={[<ScrollTotTop/>,<AboutUs/>]} /> </Routes>
      <Routes> <Route path='/warranty' element={[<ScrollTotTop/>,<Warranty/>]} /> </Routes>
      <Routes> <Route path='/shipping-policy' element={[<ScrollTotTop/>,<ShippingPolicy/>]} /> </Routes>

      <Routes><Route path='/login' element={[<ScrollTotTop/>,<Login/>]} /> </Routes>
      <Routes> <Route path='/register' element={[<ScrollTotTop/>,<Register/>]} /></Routes>
      <Routes> <Route path='/account' element={<Account/>} /></Routes>
      <Routes> <Route path='/me/update' element={<UpdateProfile/>} /></Routes>
      <Routes> <Route path='/password/update' element={<UpdatePassword/>} /></Routes>
      <Routes> <Route path='/password/forgot' element={<ForgotPassword/>} /></Routes>
      <Routes> <Route path='/password/reset/:token' element={<ResetPassword/>} /></Routes>

      <Routes><Route path='/products/:category' element={[<ScrollTotTop/>,<ProductList/>]} /></Routes>
      <Routes> <Route path='/product/:id' element={[<ScrollTotTop/>,<ProductDetail/>]} /></Routes>
      <Routes> <Route path='/products' element={[<ScrollTotTop/>,<Products/>]} /></Routes>

      <Routes> <Route path='/cart' element={[ScrollTotTop,<Cart/>]} /></Routes>
      <Routes> <Route path='/shipping' element={[ScrollTotTop,<Shipping/>]} /></Routes>


    </BrowserRouter>
  )
}

export default App