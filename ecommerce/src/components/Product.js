import React from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { Ipad, IpadMini, Medium, mobile, mobileMax } from '../responsive';
function Product({ product }) {
    const PF = 'http://localhost:8001/public/uploads/'
    return (
        <Container>
            <ProductContainer>
                <ImageContainer>
                    <img src={PF + product?.productImage} alt='' />
                </ImageContainer>
                <IconContainer>
                    <Icon>
                        <FavoriteBorderIcon fontSize="small" />
                    </Icon>

                    <Icon>
                        <Link to={`/product_detail/${product._id}`}>
                            <SearchIcon fontSize="small" />
                        </Link>
                    </Icon>

                    <Icon>
                        <ShoppingCartOutlinedIcon fontSize="small" />
                    </Icon>
                </IconContainer>
            </ProductContainer>
        </Container>
    )
}

export default Product
const IconContainer = styled.div`
background-color: rgba(0, 0, 0, 0.2);
width:100%;
height:100%;
position:absolute;
display:flex;
align-items:center;
justify-content:center;
opacity:0;
ransition: all 0.5s ease;
cursor:pointer;
`
const Container = styled.div`
&:hover ${IconContainer}{
    opacity:1;
}

`
const ProductContainer = styled.div`

display:flex;
position:relative;

`

const ImageContainer = styled.div`

margin:10px;
margin-bottom:5px;
background-color:#f5fbfd;
${mobile({ margin: '10px 0px' })}
img{
width:100%;
height:200px;
object-fit:contain;
${mobile({ height: '350px', width: '380px' })}
${Medium({ height: '250px' })}
${Ipad({ height: '250px' })};
${mobileMax({ height: '230px' })};
${IpadMini({ height: '350px' })};
}

`

const Icon = styled.div`
a{
    color:black;
}
display:flex;
align-items:center;
justify-content:center;
margin:10px;
cursor:pointer;
background-color:white;
width:40px;
height:40px;
border-radius:50%;
transition: all 0.5s ease;
&:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`
