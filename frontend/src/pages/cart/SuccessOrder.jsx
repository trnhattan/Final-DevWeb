import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { mobile } from "../../responsive";
import Footer from '../../components/Footer'

const Wrapper = styled.div`
    display: grid;
    align-items: center;
    width: 100wh;
    height: 90vh;
    ${mobile({ padding: "10px", flexDirection:"column" })}
    background-color: #DCDCDC;
`;

const Desc = styled.h6`
  font-size: 15px;
`;

const Title = styled.h1`
  padding: 20px;
  text-align: center;
  font-size: 35px;
  background: white;
`;

const InfoContainer = styled.div`
    flex: block;
    flex: 1;
    padding: 0px 50px;
    text-align: center;
    ${mobile({ padding: "10px" })}
`;
const ImgContainer = styled.div`
  height: 80%;
  widht: 80%;
  flex: 1;
`;
const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 95%;
    
`;
const Button = styled.button`
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    margin-left: auto;
    margin-right: auto;
    &:hover{    
        background-color: #f8f4f4;
    }
`;

const SuccessOrder = () => {
  const history = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    history("/")
  }

  return (
    <Fragment>
      <Wrapper>
      <Title>ĐẶT HÀNG THÀNH CÔNG</Title>
        <InfoContainer>
          <Desc>
          Shibamashi chân thành cảm ơn quý khách đã tin tưởng vào sản phẩm của chúng tôi. <br/>
          Hẹn gặp lại !
          </Desc>
        </InfoContainer> 
        <ImgContainer>
          <Image src="https://phunugioi.com/wp-content/uploads/2020/10/hinh-anh-cam-on.jpg"></Image>      
        </ImgContainer>
        <Button onClick={handleClick}>Trang chủ</Button>
      </Wrapper>
    <Footer/>
    </Fragment>
  )
}

export default SuccessOrder