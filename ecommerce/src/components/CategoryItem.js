import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Ipad, IpadMax, IpadMini, Medium, MediumMax, MediumMin, mobile, mobileMax, Surface } from '../responsive'

function CategoryItem({ item }) {
    const PF = 'https://e-shop-mern-clone.herokuapp.com/public/uploads/'

    return (
        <Container>
            {item && <>
                <ImageContainer>
                    <img src={PF + item.categoryImage} alt='' />
                </ImageContainer>
                <Info>
                    <Title>{item.title}</Title>
                    <Link to={`/products/${item.title}`}>
                        <Button>SHOP NOW</Button>
                    </Link>
                </Info>
            </>}
        </Container>
    )
}

export default CategoryItem
const Container = styled.div`
margin:5px;
display:flex;
position:relative;
${mobile({ margin: '5px 0px' })};
${Medium({ width: '100%' })}


`
const ImageContainer = styled.div`
width:100%;
height:100%;
background-color:#f5fbfd;
img{
width:100%;
height:300px;
object-fit:contain;
${mobile({ height: '400px' })};
${Ipad({ height: '300px' })};
${IpadMax({ height: '300px' })};

${mobileMax({ height: '200px' })};
${MediumMax({ height: '280px' })};
${MediumMin({ height: '250px' })};
${Surface({ height: '200px' })};
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

