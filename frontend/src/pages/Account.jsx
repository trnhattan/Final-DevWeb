import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'


import Loader from '../components/Loader'
import MetaData from '../components/MetaData'
import NewNavbar from '../components/NewNavbar'
import { Link, useNavigate } from 'react-router-dom'


const Container = styled.div`


`


const Account = () => {

  const {currentUser, isLoading, isAuthenticated } = useSelector((state)=>state.user)

  const history = useNavigate();

  useEffect(()=>{
    if(!isAuthenticated){
      history("/")
    }
  },[history, isAuthenticated])

  return (
    <Fragment>
      {isLoading ? (
        <Loader/>
      ) : (
        
        <Fragment>
          {isAuthenticated?(
            <Fragment>
            <MetaData title = {currentUser.name}/>
            <NewNavbar/>
            <Container>
              <h1>My Profile</h1>
              <h2>Name</h2>
              {currentUser.name}
    
              <h2>Email</h2>
              {currentUser.email}
    
              <Link to = "/cart">Giỏ hàng</Link>
              <Link to = "/me/update">Chinh sua tai khoan</Link>
              <Link to = "/password/update"> Đổi mật khẩu </Link>
            </Container>
          </Fragment>
          ):(
            <></>
          )}
        
        </Fragment>

        

      )}

         
    </Fragment>
    
  )
}

export default Account