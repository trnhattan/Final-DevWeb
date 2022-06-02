import React, { Fragment, useEffect } from 'react'
import styled from "@emotion/styled"
import {useDispatch, useSelector} from "react-redux"
import {getAllProducts} from '../redux/callAPI/productCall'
import ProductCard from './ProductCard'

const Container = styled.div`
  display: flex;
  margin: 2vmax auto;
  width: 80vw;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
`;


const Products = () => {

  // const dispatch = useDispatch();
  // const { products, isLoading, error } = useSelector((state)=>state.products);

  // useEffect(()=>{
  //   // if(error){
  //   //   dispatch(slice => clearErr())
  //   // }
  //   dispatch(getAllProducts())
  // },[dispatch,error])


  return (
    <Fragment>
      {/* <Container> 
        {products && products.map((product)=>(<ProductCard key={product._id} product={product}/>))}
      </Container> */}
    </Fragment>
  );
};

export default Products;