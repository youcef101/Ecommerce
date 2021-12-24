import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <Container>
            <LoginContainer>
                <InputContainer>
                    <EmailInput type='email' placeholder='Enter Your Email' />
                    <PasswordInput type='password' placeholder='Enter Your Password' />
                    <LoginBtn>
                        LOGIN
                    </LoginBtn>
                    <BottomContainer>
                        <span>Dont't have an account ? <Link to="/register">Register</Link></span>
                    </BottomContainer>
                </InputContainer>
            </LoginContainer>

        </Container>
    )
}

export default Login
const Container = styled.div`
 width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display:flex;
  align-items:center;
  justify-content:center;
`
const LoginContainer = styled.div`
background-color:white;
width:60%;

`
const InputContainer = styled.div`
 display:flex;
 flex-direction:column;
 margin:15px;
`
const EmailInput = styled.input`
padding-left:5px;
//flex:1;
margin:3px;
border-radius:4px;
background-color: #f2f2f2;
height:40px;
border:1px solid #000;
&:focus{
    outline:none;
}

`
const PasswordInput = styled(EmailInput)``
const LoginBtn = styled.div`
height:40px;
border-radius:4px;
cursor:pointer;
background-color:teal;
color:white;
font-size:18px;
font-weight:500;
display:flex;
align-items:center;
justify-content:center;
width:20%;
margin:5px;
`
const BottomContainer = styled.div`
margin:5px;
a{
    text-decoration:none;
    font-size:18px;
    //font-weight:500;
    color:black;
    cursor:pointer;
}
`