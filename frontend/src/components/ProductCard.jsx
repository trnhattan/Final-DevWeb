import styled from '@emotion/styled'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    width: 14vmax;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: rgb(48, 48, 48);
    margin: 2vmax;
    transition: all 0.5s;
    padding-bottom: 0.5vmax;
    &:hover {
        box-shadow: 0 0 5px rgba(15, 15, 15, 0.26);
        transform: translateY(-1vmax);
    }
`

const Image = styled.img`
    width: 14vmax;
`;


const Info = styled.div`
    font-family: "Roboto";
    font-size: 2vmax;
    margin: 1vmax 0.5vmax;
    margin-bottom: 0;
    text-align: center;
    
`
const ProductBrand = styled.h6`
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  color: #A9A9A9;
  font-size: 10px;
`;

const ProductName = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 15px;
`;


const Price = styled.span`
    margin: 0.5vmax;
    color: tomato;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    text-align: center;
    font-size: 15px;
`

const ProductCard = ({ product }) => {
  return (
    <Fragment>
        <div key={product._id}>
            <StyledLink to={`/product/${product._id}`}>
                <Image src = {product.image} alt={product.name}/>
                <Info>
                    <ProductBrand>{product.name}</ProductBrand>
                    <ProductName>{product.brand}</ProductName>
                </Info>
                <Price>{(product.price).toLocaleString()} đ</Price>
            </StyledLink>
        </div>
    </Fragment>
  );
};

export default ProductCard;