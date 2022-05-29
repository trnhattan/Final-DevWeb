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


const Info = styled.p`
    font-family: "Roboto";
    font-size: 2vmax;
    margin: 1vmax 0.5vmax;
    margin-bottom: 0;
`

const Price = styled.span`
    margin: 0.5vmax;
    color: tomato;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1.5vmax;
`

const ProductCard = ({ product }) => {
  return (
    <Fragment>
        <StyledLink to={`/product/${product._id}`}>
            <Image src = {product.image[0].url} alt={product.name}/>
            <Info>
                {product.name}
                <br/>
                {product.brand}
            </Info>
            <Price>Giá: {product.price}</Price>
        </StyledLink>
    </Fragment>
  );
};

export default ProductCard;