import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {CreateOrder} from '../../redux/callAPI/orderCall'
import {cartSlice} from '../../redux/Slice/cartSlice'



const Payment = () => {
    
    const history = useNavigate();
    const dispatch = useDispatch();

    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
    const {shippingInfo, cartItems} = useSelector((state) => state.cart);



    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(false);



    const handleChangCheckBox = (e) => {
        e.preventDefault();
        setChecked1(!checked1);
        setChecked2(!checked2);
    }

    const order = {
        shippingInfo,
        orderItems: cartItems,
        itemsPrice: orderInfo.subtotal,
        shippingPrice:  orderInfo.shippingCharges,
        discountPrice: orderInfo.discountPrice,
        totalPrice: orderInfo.totalPrice,
        payment: checked1 ? "Thanh toán khi nhận hàng": "Phương thức khác",
    }

    console.log(order)

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(CreateOrder(order))
        dispatch(cartSlice.actions.clearCart())
        history("/order/success")
    }

  return (
    <Fragment>
        <div>
            <h2>Phương thức thanh toán</h2>
            <div style={{display:"flex",flexDirection:"column"}}>
                {/*checked1*/}
                <FormControlLabel 
                    label="Thanh toán khi nhận hàng"
                    control={
                        <Checkbox 
                            checked={checked1}
                            onChange={handleChangCheckBox}
                        />
                    }
                />

                {/*checked2*/}
                <FormControlLabel 
                    label="Khác" 
                    control={
                        <Checkbox 
                            checked={checked2}
                            onChange={handleChangCheckBox}
                        />
                    } 
                />
            </div>
            <button onClick={handleClick}>Xác nhận</button>
            
        </div>
    </Fragment>
  )
}

export default Payment