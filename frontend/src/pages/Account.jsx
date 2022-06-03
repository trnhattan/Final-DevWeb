import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'


import Loader from '../components/Loader'
import MetaData from '../components/MetaData'
import NewNavbar from '../components/NewNavbar'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { padding } from '@mui/system'


const Container = styled.div`
`;
const Wrapper = styled.div`
  display: flex;
`;
const ImgContainer = styled.div`
  height: 85%;
  widht: 85%;
  flex: 1;
`;
const Image = styled.img`
  height: 85%
`;
const InfoContainer = styled.div`
  flex: 1;
  text-align: center;
  width: 100%;
  heigth: 100%;
`;
const Desctitle = styled.h4`
  padding: 10px;
`;
const Desc = styled.h2`
  font-size: 25px;
`;
const Title = styled.h1`
  padding: 20px;
  text-align: center;
  font-size: 35px;
`;
const Logo = styled.h1`
  margin: 10px
`;
const Slide = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: center;
`;
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
            <Title>THÔNG TIN NGƯỜI DÙNG</Title>
            <Container>
              <Wrapper>
              <Slide>
                  <InfoContainer>
                    <Desctitle>Họ và tên</Desctitle>
                    <desc>{currentUser.name}</desc>          
                    <Desctitle>Email</Desctitle>
                    <desc>{currentUser.email}</desc> <br/>
                    <Link to = "/me/update">Thay đổi thông tin</Link> <br/>
                    <Link to = "/password/update"> Đổi mật khẩu </Link> <br/>
                  </InfoContainer>
                  <ImgContainer>
                    <Image src={currentUser.avatar.url}/>
                  </ImgContainer>
                </Slide>
              </Wrapper>
              <Footer/>
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