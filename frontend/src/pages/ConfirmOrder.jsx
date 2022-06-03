import React, { Fragment } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import MetaData from '../components/MetaData'
import NewNavbar from '../components/NewNavbar'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const OrderContainer = styled.div`
  height: 100vh;
  background-color: white;
  display: grid;
  grid-template-columns: 5fr 4fr;

`
const ShippingInfoArea = styled.div`
  padding: 5vmax;
  padding-bottom: 0%;
  > p {
    font: 400 1.8vmax "Roboto";
  }
`

const ConfirmshippingAreaBox = styled.div`

  margin: 2vmax;
`

const OrderInfo = styled.div`
  display: flex;
  margin: 1vmax 0;
  > p {
    font: 400 1.5vmax "Roboto";
    color: black;
  }
  > span {
    margin: 0 1vmax;
    font: 100 1.2vmax "Roboto";
    color: #575757;
  }
`

const ConfirmCartItems = styled.div`
  padding: 5vmax;
  padding-top: 2vmax;
  > p {
    font: 400 2vmax "Roboto";
  }
`

const ConfirmCartItemsContainer = styled.div`
  max-height: 20vmax;
  overflow-y: auto;
`
const CartImage = styled.img`
  width: 5vmax;
`

const CartItemsOrder = styled.div`
  display: flex;  
  font: 400 1.5vmax "Roboto";
  align-items: center;
  justify-content: space-between;
  margin: 2vmax 0;
  > a {
    color: #575757;
    margin: 0 2vmax;
    width: 20%;
    text-decoration: none;
    
  }
  > a > p {
    text-transform: capitalize;
  }
  > span {
    font: 100 1.2vmax "Roboto";
    color: #5e5e5e;
  }
`

const OrderSummary = styled.div`
padding: 7vmax;
> p {
  text-align: center;
  font: 400 1.8vmax "Roboto";
  border-bottom: 1px solid rgba(0, 0, 0, 0.267);
  padding: 1vmax;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
}

> div > div > span {
  color: rgba(0, 0, 0, 0.692);
} 

`

const OrderSummaryInfo = styled.div`
  > div {
    display: flex;
    font: 300 1.2vmax "Roboto";
    justify-content: space-between;
    margin: 2vmax 0;
  }
`


const OrderSummaryTotal = styled.div`
display: flex;
font: 300 1.5vmax "Roboto";
justify-content: space-between;
border-top: 1px solid rgba(0, 0, 0, 0.363);
padding: 2vmax 0;

`


const Button = styled.button`
  background-color: tomato;
  color: white;
  width: 100%;
  padding: 1vmax;
  border: none;
  margin: auto;
  cursor: pointer;
  transition: 0.5s;
  font: 400 1.2vmax "Roboto";

  &:hover {
    background-color: rgb(192, 71, 50);
  }

`

const ConfirmOrder = () => {

  const {shippingInfo, cartItems} = useSelector((state)=>state.cart)
  const {currenUser} = useSelector((state)=>state.user)


  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const totalPrice = subtotal  + shippingCharges;

  const proceedToPayment = () => {
    // const data = {
    //   subtotal,
    //   shippingCharges,
    //   tax,
    //   totalPrice,
    // };

    // sessionStorage.setItem("orderInfo", JSON.stringify(data));

    // history.push("/process/payment");
  };


  return (
    <Fragment>
      <MetaData title="Xác nhận đơn hàng" />
      <NewNavbar/>
      <CheckoutSteps activeStep={1} />

      <OrderContainer>
          <ShippingInfoArea>
            <Typography>Thông tin giao hàng</Typography>
            <ConfirmshippingAreaBox>
              <OrderInfo>
                <p>Name:</p>
                <span>{shippingInfo.fullName}</span>
              </OrderInfo>
              <OrderInfo>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNumber}</span>
              </OrderInfo>
              <OrderInfo>
                <p>Address:</p>
                <span>{shippingInfo.address}</span>
              </OrderInfo>
              </ConfirmshippingAreaBox>
          </ShippingInfoArea>


          <ConfirmCartItems>
              <Typography>Sản phẩm đã chọn:</Typography>
              <ConfirmCartItemsContainer>
                {cartItems &&
                  cartItems.map((item) => (
                    <CartItemsOrder key={item.product}>
                      <Link to={`/product/${item.product}`}>
                        <CartImage src={item.image} alt="Product" />
                      </Link>{" "}
                      <p>{item.name}</p>
                      <span>
                        {item.quantity} X {item.price} ={" "}
                        <b>{item.price * item.quantity}</b>
                      </span>
                    </CartItemsOrder>
                  ))}
              </ConfirmCartItemsContainer>
          </ConfirmCartItems>
          
   
          <OrderSummary>
              <Typography>Đơn hàng</Typography>
              <OrderSummaryInfo>
                    <div>
                      <p>Tổng tiền:</p>
                      <span>{subtotal}</span>
                    </div>
                    <div>
                      <p>Phí vận chuyển:</p>
                      <span>{shippingCharges}</span>
                    </div>
                      <div>
                        <p>Giảm giá:</p>
                        <span>giảm</span>
                      </div>
              </OrderSummaryInfo>

              <OrderSummaryTotal>
                <p>
                  <b>Tổng:</b>
                </p>
                <span>{totalPrice}</span>
              </OrderSummaryTotal>

              <Button onClick={proceedToPayment}>Tiến hành thanh toán</Button>
          </OrderSummary>

      </OrderContainer>



    </Fragment>
  );
}

export default ConfirmOrder