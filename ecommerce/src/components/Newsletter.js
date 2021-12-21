import React from 'react'
import styled from 'styled-components'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
function Newsletter() {
    return (
        <Container>
            <NewsLetterContainer>
                <Title>Newsletter</Title>
                <Desc>Get timely updates from your favorite products.</Desc>
                <InputContainer>
                    <EmailContainer>
                        <EmailInput placeholder='Enter your email' />
                    </EmailContainer>
                    <SendBtnContainer>
                        <SendBtn>SEND</SendBtn>
                        <SendOutlinedIcon fontSize='small' />
                    </SendBtnContainer>
                </InputContainer>

            </NewsLetterContainer>
        </Container>
    )
}

export default Newsletter
const Container = styled.div`
margin-bottom:5px;
margin-top:10px;
background-color: #fcf5f5;
height:60vh;
display:flex;
align-items:center;
justify-content:center;
`
const NewsLetterContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
`
const Title = styled.div`
font-size:70px;
font-weight:700;
`
const Desc = styled.div`
font-size:40px;
font-weight:500;
margin-bottom:15px;
`
const InputContainer = styled.div`
display:flex;
width:70%;
`
const EmailContainer = styled.div`
width:60%;
flex:1;
`
const EmailInput = styled.input`
width:100%;
padding:10px;
:focus{
    outline:none;
}
`
const SendBtnContainer = styled.div`
width:10%;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
background-color:teal;
color:white;
padding:10px;
&:hover{
    background-color:#00b3b3;
}
`
const SendBtn = styled.div``