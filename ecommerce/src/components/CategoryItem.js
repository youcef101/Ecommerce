import React from 'react'
import styled from 'styled-components'

function CategoryItem({ item }) {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
const Container = styled.div`
height:80vh;
width:100%;
margin:5px;
display:flex;
position:relative;
`
const Image = styled.img`
height:90%;
width:100%;
object-fit:cover;
`
const Info = styled.div`
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

