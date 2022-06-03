import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'


const SuccessOrder = () => {
  const history = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    history("/")
  }

  return (
    <Fragment>
      <h2>Đặt hàng thành công</h2>
      <button onClick={handleClick}>Trang chủ</button>
    </Fragment>
  )
}

export default SuccessOrder