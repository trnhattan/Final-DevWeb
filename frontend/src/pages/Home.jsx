import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import NewNavbar from '../components/NewNavbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Loader from '../components/Loader'
import MetaData from '../components/MetaData'

const Home = () => {
  const isLoading = useSelector((state)=>state.products.isLoading)
  return (
    <Fragment>
        <MetaData title="Home"/>
          <NewNavbar/>
          <Slider/>
          <Categories/>
          {isLoading ? <Loader/>: <Products/> }  
          <Footer/>
    </Fragment>
  )
}

export default Home