import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../components/Loader'
import NewNavbar from '../components/NewNavbar'
import MetaData from '../components/MetaData'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from '@emotion/styled'
import {resetPassword} from '../redux/callAPI/userCall'
import {ForgotPasswordSlice} from '../redux/Slice/userSlice'

const Container = styled.div`


`

const Form = styled.form`


`

const Input = styled.input`


`

const Button = styled.button`


`


const ResetPassword = () => {

    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation()
    const token = location.pathname.split("/")[3]

    const  {isLoading, error, message }= useSelector((state)=>state.forgotPassword) 

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleClick = (e)=>{
        e.preventDefault();
        dispatch(resetPassword([token,{password,confirmPassword}]));
    }

    useEffect(()=>{
        if (error){
            alert("Lỗi !");
            dispatch(ForgotPasswordSlice.actions.clearErr());
        }
        if (message){
            alert(message)
            dispatch(ForgotPasswordSlice.actions.clearMessage());
        }
    },[dispatch,error,message])

    return (
        <Fragment>
            <NewNavbar/>
            <MetaData title="Đặt lại mật khẩu"/>
            {isLoading ? (<Loader/>):(
                <Fragment>
                    <Container>
                        <Form>
                            <h2>Nhập mật khẩu</h2>
                            <Input
                            name='password'
                            placeholder='Mật khẩu'
                            onChange={(e)=>setPassword(e.target.value)}
                             />

                            <h2>Xác nhận mật khẩu</h2>
                            <Input
                            name = 'confirmPassword'
                            placeholder='Xác nhận mật khẩu'
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                             />

                             <Button onClick={handleClick}>Xác nhận</Button>
                        </Form>
                    </Container>
                </Fragment>
            )}


        </Fragment>

  )
}

export default ResetPassword