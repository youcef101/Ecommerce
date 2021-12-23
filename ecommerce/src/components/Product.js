import React from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
function Product({ product }) {
    return (
        <Container>
            <ProductContainer>
                <ImageContainer>
                    <img src={product.img} alt='' />
                </ImageContainer>
                <IconContainer>
                    <Icon>
                        <FavoriteBorderIcon fontSize="small" />
                    </Icon>
                    <Icon>
                        <SearchIcon fontSize="small" />
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
width:100%;
display:flex;
position:relative;
`

const ImageContainer = styled.div`
margin:10px;
margin-bottom:5px;
background-color:#f5fbfd;
img{
width:20vw;
height:350px;
}

`

const Icon = styled.div`
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
