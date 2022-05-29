import React, { Fragment, useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import {getProduct} from '../redux/callAPI/productCall'
import styled from '@emotion/styled'


const Title = styled.h2`
    margin: 2vmax auto;
    width: 25vw;
    border-bottom: 1px solid rgba(0, 0, 0, 0.171);
    padding: 2vmax;
    color: rgba(0, 0, 0, 0.678);
    font: 500 1.5vmax "Roboto";
    text-align: center;
    font-size: 30px;
`

const ListImage = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 5vmax;
    justify-content: center;
    min-height: 30vh;

`

const Products = () => {

    const dispatch = useDispatch();
    const {products, isLoading, error, productsCount} = useSelector((state)=>state.products)

    useEffect(()=>{
        dispatch(getProduct())
    },[dispatch])

  return (
    <Fragment>
        {isLoading ? <Loader/>: <Fragment>
            <Title>product heading</Title> 
            <ListImage>
                {products && products.map((product)=>(
                    <ProductCard key={product._id} product={product} />
                ))}
            </ListImage>
            
        </Fragment>}
    </Fragment>
  )
}

export default Products