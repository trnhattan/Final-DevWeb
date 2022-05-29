import React, { Fragment, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../redux/callAPI/userCall';
import { Link , useNavigate, useLocation} from 'react-router-dom';
import {mobile} from "../responsive";
import NewNavbar from '../components/NewNavbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';



const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const StyledLink = styled(Link)`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  &:focus, &:hover, &:visited, &:link {
    color:black;
    text-decoration: none;
  }
`

const Login = () => {
  
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const {isLoading, error, isAuthenticated} = useSelector(state=>state.login)

  const [email,setEmail] = useState("")
  const [password, setPassword]  = useState("");

  const handleClick = (e) =>{
    e.preventDefault();
    dispatch(login(email,password));
  }


  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(()=>{
    // if(err){

    // }
    if (isAuthenticated){
      

      // history(redirect);
    }
  },[dispatch,history,isAuthenticated,redirect])

  return (
    <Fragment>
      <NewNavbar/>
      <Container>
        
        <Wrapper>
          <Title>ĐĂNG NHẬP</Title>
          <Form>
            <Input 
              placeholder='Nhập email:'
              onChange={(e)=>setEmail(e.target.value)}
            />

            <Input 
              placeholder='Nhập mật khẩu:'
              onChange={(e)=>setPassword(e.target.value)}
            />

            <Button onClick={handleClick}>Đăng nhập</Button>

          </Form>

          <StyledLink to={`/`}>Quên mật khẩu ?</StyledLink>
          &nbsp;
          <Link to={`/register`}>Đăng ký tài khoản</Link>
        </Wrapper>
      </Container>
    </Fragment>
  )
}

export default Login