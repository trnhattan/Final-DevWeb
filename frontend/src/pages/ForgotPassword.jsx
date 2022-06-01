import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../components/Loader'
import MetaData from '../components/MetaData'
import styled from '@emotion/styled'
import NewNavbar from '../components/NewNavbar'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import {forgotPassword} from '../redux/callAPI/userCall'
import {ForgotPasswordSlice} from '../redux/Slice/userSlice'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`


`

const Form = styled.form`


`

const Input = styled.input`


`

const Button = styled.button`


`


export const ForgotPassword = () => {

    const dispatch = useDispatch();
    const history = useNavigate();
    const  {isLoading, error, message }= useSelector((state)=>state.forgotPassword) 
    
    const [email, setEmail] = useState("");
    
    const handleClick = (e)=>{
        e.preventDefault();
        dispatch(forgotPassword({email}))
    }

    useEffect(()=>{
        if (error){
            alert("Lỗi !");
            dispatch(ForgotPasswordSlice.actions.clearErr());
        }
        if (message){
            alert(message)
            dispatch(ForgotPasswordSlice.actions.clearMessage());
            history("/")
        }

    },[error, dispatch, message])

  return (
      <Fragment>
          <NewNavbar/>
          <MetaData title="Quên mật khẩu" />
          {isLoading ? (<Loader/>):(
            <Fragment>
                <Container>
                    <h2>Quên mật khẩu</h2>
                    <Form>
                        <h3>Nhập Email: </h3>
                        <Input 
                            placeholder='Email'
                            onChange={(e)=>setEmail(e.target.value)}
                        />

                        <Button onClick={handleClick}> Gửi </Button>
                    </Form>
                </Container>  
            </Fragment>
          )}
        <Footer/>
      </Fragment>
    
  )
}
