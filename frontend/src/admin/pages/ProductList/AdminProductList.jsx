import React, { Fragment } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import TopBar from '../../components/topbar/TopBar'
import styled from '@emotion/styled'

const ProductListContainer = styled.div`

`


const AdminProductList = () => {
  return (
    <Fragment>
      <TopBar/>
      <div style={{display:"flex"}}>
        <SideBar/>
        <ProductListContainer>

        </ProductListContainer>
      </div>
    </Fragment>
  )
}

export default AdminProductList