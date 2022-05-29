import React,{useState} from 'react'
import {Navbar, Nav, Container, Form, NavDropdown, FormControl, Button} from "react-bootstrap"
import styled from '@emotion/styled';
import Badge from '@mui/material/Badge';
import {mobile} from "../responsive"
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MenuItem = styled.div`
    
    font-size: 20px;
    color:white;
    cursor: pointer;
    margin-left: 20px;
    ${mobile({ fontSize: "12px", marginTop: "20px", marginBottom: "20px" })}
`;

const StyledLink = styled(Link)`
  &:focus, &:hover, &:visited, &:link {
    color:black;
    text-decoration: none;
  }
`

const NewNavbar = () => {

    // const quantity = useSelector(state=>state.cart.quantity)
    const [keyword, setKeyword] = useState("");
    const history = useNavigate()

    const handleSearch = (e) =>{
 
        // e.preventDefault();
        // if (keyword.trim()) {
        //     history.push(`/products/${keyword}`);
        // } else {
        // history.push("/products");
        // }
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand href="/" style={{fontSize:'30px'}}>Shibamasi</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >

                    <NavDropdown title="Đồng hồ nam" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Brand 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Brand 2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Other</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Đồng hồ nữ" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Brand 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Brand 2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Other</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Phụ kiện" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Brand 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Brand 2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Other</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Thông tin" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/aboutus">Về chúng tôi</NavDropdown.Item>
                        <NavDropdown.Item href="/">Chính sách bảo hành</NavDropdown.Item>
                        <NavDropdown.Item href="/">Chính sách vận chuyển</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Dịch vụ khác</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Tìm kiếm"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setKeyword(e.target.value)}
                    />
                    <Button variant="outline-secondary" style={{width:'200px'}} onClick={handleSearch} >Tìm kiếm</Button>
                </Form>


                <StyledLink to={`/login`}>
                    <MenuItem>
                        <Badge>
                            <AccountCircleIcon/>
                        </Badge>
                    </MenuItem>
                </StyledLink>

                <StyledLink to="/cart">
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </StyledLink>
               
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
  };

export default NewNavbar