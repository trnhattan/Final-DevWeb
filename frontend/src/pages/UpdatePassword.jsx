import React, { Fragment, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Loader from '../components/Loader'
import MetaData from '../components/MetaData'
import NewNavbar from '../components/NewNavbar'
import { useDispatch, useSelector } from 'react-redux'
import {updatePassword} from '../redux/callAPI/userCall'
import { useNavigate } from 'react-router-dom'
import {ProfileSlice} from '../redux/Slice/userSlice'

const Container = styled.div`
    display
`


const Input = styled.input`

`
const Form = styled.form`


`

const Button = styled.button`


`



const UpdatePassword = () => {

    const {isLoading, isUpdated, error} = useSelector((state)=>state.userProfile)  
    const dispatch = useDispatch();
    const history = useNavigate();

    const [oldPassword, setoldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmNewPassqord] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(updatePassword({oldPassword, newPassword, confirmPassword}))
    }

    useEffect(()=>{
        if (error){
            alert("Lỗi !")
            dispatch(ProfileSlice.actions.clearErr());
        }
        if(isUpdated){
            alert("Cập nhật mật khẩu thành công !")
            history("/account")
            dispatch(ProfileSlice.actions.updateProfileReset());
        }
        
    }, [isUpdated,dispatch,history,error])


  return (
    <Fragment>
        {isLoading ? 
        (
            <Loader/>
        )
        :
        (
            <Fragment>
                <MetaData title={"Đổi mật khẩu"}/>
                <NewNavbar/>
                <Container>
                    <h1>Đổi mật khẩu</h1>
                    <Form>  

                        <h4>Mật khẩu hiện tại</h4>
                        <Input onChange={(e)=>setoldPassword(e.target.value)} />
                
                        <h4>Mật khẩu mới</h4>
                        <Input onChange={(e)=>setNewPassword(e.target.value)} />

                        <h4>Xác nhận mật khẩu mới</h4>
                        <Input onChange={(e)=>setConfirmNewPassqord(e.target.value)} />

                        <br></br>
                        <Button onClick={handleClick}>Cập nhật</Button>

                    </Form>
                </Container>
            </Fragment>
        )}

    </Fragment>
  )
}

export default UpdatePassword