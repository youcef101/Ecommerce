import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function CategoryItem({ item }) {
    const PF = 'http://localhost:8001/public/uploads/'
    return (
        <Container>
            <ImageContainer>
                <img src={PF + item?.categoryImage} alt='' />
            </ImageContainer>
            <Info>
                <Title>{item.title}</Title>
                <Link to={`/products/${item.title}`}>
                    <Button>SHOP NOW</Button>
                </Link>
            </Info>
        </Container>
    )
}

export default CategoryItem
const Container = styled.div`
margin:5px;
display:flex;
position:relative;
`
const ImageContainer = styled.div`
width:100%;
height:100%;
background-color:#f5fbfd;
img{
width:100%;
height:300px;
object-fit:contain;
}

`
const Info = styled.div`
a{
    color:white;
    text-decoration:none;
}
height:100%;
width:100%;
position:absolute;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Title = styled.h1`
color:white;
text-align:center;
`
const Button = styled.div`
padding:8px;
background-color:#a6a6a6;
cursor:pointer;
font-weight:500;
&:hover{
    background-color:#cccccc;
}
`

