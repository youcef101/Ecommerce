import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function SliderCard({ product }) {
    const PF = 'https://e-shop-mern-clone.herokuapp.com/public/uploads/'
    return (
        <Container>
            <Link to={`/product_detail/${product._id}`}>
                <Card>
                    <Wrap>
                        <img src={/* PF + */ product?.productImage} alt='' />
                    </Wrap>
                    <CardTitle>{product?.title}</CardTitle>
                    <CardPrice>$ {product?.price}</CardPrice>
                </Card>
            </Link>
        </Container >
    )
}

export default SliderCard
const Container = styled.div`
a{
    text-decoration:none;
    color:black;
}
`
const Card = styled.div`
display:flex;
align-items:center;
flex-direction:column;
text-align:center;

&:hover{
    transform:scale(0.9);
    transition:400ms;
    box-shadow: 1px 2px 10px -1px rgb(0 0 0 / 30%);
    border-radius:5px;
}
`
const Wrap = styled.div`

 &:focus{
    outline:none;
}
cursor:pointer;
img{
    width:100%;
    height:300px;
    object-fit:contain;
   
}
`
const CardTitle = styled.span``
const CardPrice = styled.span``