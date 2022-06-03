import React, { Fragment } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import MetaData from '../components/MetaData'
import NewNavbar from '../components/NewNavbar'

const ConfirmOrder = () => {
  return (
    <Fragment>
      <MetaData title="Xác nhận đơn hàng" />
      <NewNavbar/>
      <CheckoutSteps activeStep={1} />
    </Fragment>
  )
}

export default ConfirmOrder