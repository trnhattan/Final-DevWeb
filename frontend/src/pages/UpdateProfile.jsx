import styled from '@emotion/styled'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {updateProfile} from '../redux/callAPI/userCall'
import {ProfileSlice} from '../redux/Slice/userSlice'

import Loader from '../components/Loader'
import MetaData from '../components/MetaData'
import NewNavbar from '../components/NewNavbar'

import { loadUser } from '../redux/callAPI/userCall'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`


const FromProfile = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 300px;

`


const Button =  styled.button`


`


const UpdateProfile = () => {
    const {currentUser, isAuthenticated} = useSelector((state)=> state.user);
    const { error, isUpdated, isLoading } = useSelector((state) => state.userProfile);


    const dispatch = useDispatch();
    const history = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    const handleClick = (e) =>{
        e.preventDefault();
        dispatch(updateProfile({name,email}));
      }

    useEffect(()=>{
        if(currentUser){
            setName(currentUser.name)
            setEmail(currentUser.email)
        }
        

        if (isUpdated){
            alert("Profile Updated Successfully");

            dispatch(loadUser());
            
            history("/account");

            dispatch(ProfileSlice.actions.updateProfileReset())
        
        }
      
    },[dispatch, history, currentUser, isUpdated])

  return (
    <Fragment>
        {isLoading ? 
        (
            <Loader/>
        )
        :
        (
            <Fragment>
                <MetaData title={"Update profile"}/>
                <NewNavbar/>
                <Container>
                    <h1>My Profile</h1>
                    <FromProfile>
                  
                            <h4>Tên</h4>
                            <Input onChange={(e)=>setName(e.target.value)} />

                            <h4>Email</h4>
                            <Input onChange={(e)=>setEmail(e.target.value)} />
                       

                            <Button onClick={handleClick}>Cập nhật</Button>
                    </FromProfile>
                </Container>
            </Fragment>
        )}

    </Fragment>
  )
}

export default UpdateProfile