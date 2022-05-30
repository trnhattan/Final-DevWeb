
import styled from "@emotion/styled";
import { mobile } from "../responsive";
import React, { Fragment, useState } from "react";
import NewNavbar from "../components/NewNavbar";
import {useDispatch} from 'react-redux'
import { register } from "../redux/callAPI/userCall";
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction:column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Button = styled.button`
    margin-top: 20px;
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;



const Register = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const history = useNavigate();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 

    const redirect = location.search ? location.search.split("=")[1] : "/login";

    const registerSubmit = (e) => {
        e.preventDefault();
        dispatch(register({name,email,password}));
        history(redirect);
    }    





    return (
        <Fragment>
            <NewNavbar/>
            <Container>
                <Wrapper>
                    <Title>Đăng ký tài khoản tài khoản</Title>
                    <Form onSubmit={registerSubmit}>
                        <Input
                            placeholder="Tên"
                            type="text"
                            required
                            name="name"
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <Input 
                            placeholder="Email" 
                            type='email'
                            required
                            name="email"
                            onChange={(e)=>setEmail(e.target.value)}
                        />

                        <Input 
                            placeholder="Mật khẩu"
                            type="password"
                            required
                            name="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        {/* <Input placeholder="Xác nhận mật khẩu"
                            type="password"
                            
                            onChange={registerDataChange}
                        />  */}

                        <Button type="submit">
                            Tạo tài khoản
                        </Button>
                        
                    </Form>
                    <br></br>
                    <p>Đã có tài khoản ? <Link href="/login">Đăng nhập</Link> </p>
                </Wrapper>
            </Container>
        </Fragment>
    )
}

export default Register