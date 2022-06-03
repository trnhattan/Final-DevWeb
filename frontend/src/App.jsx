import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes ,Route} from "react-router-dom"
import Home from './pages/Home'

import AboutUs from './pages/infoPages/AboutUs'
import Warranty from './pages/infoPages/Warranty'
import ShippingPolicy from './pages/infoPages/ShippingPolicy'

import Login from './pages/userPages/Login'
import Register from './pages/userPages/Register';
import Account from './pages/userPages/Account'
import UpdateProfile from './pages/userPages/UpdateProfile'
import UpdatePassword from './pages/userPages/UpdatePassword';
import ForgotPassword from './pages/userPages/ForgotPassword';
import ResetPassword from './pages/userPages/ResetPassword';

import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail';

import Cart from './pages/Cart'
import ShippingInfo from './pages/orderPages/ShippingInfo';
import Payment from './pages/orderPages/Payment';
import SuccessOrder from './pages/orderPages/SuccessOrder';
import ConfirmOrder from './pages/orderPages/ConfirmOrder';


import AdminHome from './admin/pages/AdminHome';


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
      <Routes> <Route path='/products' element={[<ScrollTotTop/>,<ProductList/>]} /></Routes>

      <Routes> <Route path='/cart' element={[ScrollTotTop,<Cart/>]} /></Routes>
      <Routes> <Route path='/shipping-info' element={[ScrollTotTop,<ShippingInfo/>]} /></Routes>
      <Routes> <Route path='/order/comfirm' element={[ScrollTotTop,<ConfirmOrder/>]} /></Routes>
      <Routes> <Route path='/order/payment' element={[ScrollTotTop,<Payment/>]} /></Routes>
      <Routes> <Route path='/order/success' element={[ScrollTotTop,<SuccessOrder/>]} /></Routes>

      {/* <Routes> <Route path='/orders/me' element={[ScrollTotTop]} /></Routes> */}

      {/* ADMIN ROUTE */}
      <Routes> <Route path='/admin/pages/AdminHome' element={[<ScrollTotTop/>,<AdminHome/>]} /> </Routes>

      

    </BrowserRouter>
  )
}

export default App