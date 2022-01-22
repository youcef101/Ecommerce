import React from 'react'
import styled from 'styled-components'
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons";
function Footer() {
    return (
        <Container>
            <LeftContainer>
                <Title>E-SHOP</Title>
                <Desc> There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.</Desc>
                <SocialContainer>
                    <Icon color="3B5999" >
                        <Facebook />
                    </Icon>
                    <Icon color="E4405F" >
                        <Instagram />
                    </Icon>
                    <Icon color="55ACEE" >
                        <Twitter />
                    </Icon>
                    <Icon color="E60023">
                        <Pinterest />
                    </Icon>
                </SocialContainer>
            </LeftContainer>
            <MiddleContainer>
                <UsefulLink>
                    Useful Links
                </UsefulLink>
                <Links>
                    <Left>
                        <Lien>Home</Lien>
                        <Lien>Men Fashion</Lien>
                        <Lien>Accessories</Lien>
                        <Lien>Order Tracking</Lien>
                        <Lien>Wishlist</Lien>
                    </Left>
                    <Right>
                        <Lien>Cart</Lien>
                        <Lien>Women Fashion</Lien>
                        <Lien>my Account</Lien>
                        <Lien>Terms</Lien>

                    </Right>

                </Links>
            </MiddleContainer>
            <RightContainer>
                <Contact>Contact</Contact>
                <InfoContainer>
                    <InfoIcon>
                        <Room />
                    </InfoIcon>
                    <Text>622 Dixie Path , South Tobinchester 98336</Text>
                </InfoContainer>
                <InfoContainer>
                    <InfoIcon>
                        <Phone />
                    </InfoIcon>
                    <Text>+216 xx xxx xxx</Text>
                </InfoContainer>
                <InfoContainer>
                    <InfoIcon>
                        <MailOutline />
                    </InfoIcon>
                    <Text>belkadem.youcef@gmail.com</Text>
                </InfoContainer>
                <PayaimentInfo>
                    <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt='' />
                </PayaimentInfo>
            </RightContainer>
        </Container>
    )
}

export default Footer
const Container = styled.div`
display:flex;
justify-content:space-between;
height:40vh;
margin:30px;
`
const LeftContainer = styled.div`
width:30%;
`
const Title = styled.div`
font-size:30px;
font-weight:700;
margin-bottom:10px;
`
const Desc = styled.div`
max-width:100%;
text-align:justify;
font-size:20px;
margin-bottom:20px;

`
const SocialContainer = styled.div`
display:flex;
`
const Icon = styled.div`
margin:10px;
cursor:pointer;
color:white;
display:flex;
align-items:center;
justify-content:center;
width:40px;
height:40px;
border-radius:50%;
background-color:#${(props) => props.color};
`
const MiddleContainer = styled.div`
width:30%;
`
const UsefulLink = styled.div`
font-size:25px;
font-weight:500;
margin-bottom:20px;
`
const Links = styled.div`
display:flex;
width:100%;
`
const Lien = styled.div`
cursor:pointer;
margin:5px;
font-weight:400;
font-size:20px;
`
const Left = styled.div`
display:flex;
flex-direction:column;
width:50%;
`
const Right = styled(Left)``
const RightContainer = styled.div`
width:30%;
display:flex;
flex-direction:column;
`
const Contact = styled.div`
font-size:25px;
font-weight:500;
margin-bottom:20px;
`
const InfoContainer = styled.div`
display:flex;
margin-bottom:5px;
`
const InfoIcon = styled.div`
margin-right:5px;
`
const Text = styled.div``
const PayaimentInfo = styled.div`

`
