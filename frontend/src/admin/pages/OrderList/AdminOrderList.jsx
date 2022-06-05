import React, { Fragment } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import TopBar from '../../components/topbar/TopBar'
import styled from '@emotion/styled'


const OrderListContainer = styled.div`


`

const AdminOrderList = () => {
  return (
    <Fragment>
      <TopBar/>
      <div style={{display:"flex"}}>
        <SideBar/>
        <OrderListContainer>
            
        </OrderListContainer>
      </div>
    </Fragment>
  )
}

export default AdminOrderList