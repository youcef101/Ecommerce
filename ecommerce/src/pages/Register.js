import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Register() {
    return (
        <Container>
            <RegisterContainer>
                <InputContainer>
                    <TopContainer>
                        <FirstNameInput type='text' placeholder='Enter Your First Name' />
                        <LastNameInput type='text' placeholder='Enter Your Last Name' />
                    </TopContainer>
                    <MiddleContainer>
                        <EmailInput type='email' placeholder='Enter Your Email' />
                    </MiddleContainer>
                    <BottomContainer>
                        <PasswordInput type='password' placeholder='Enter Your Password' />
                        <PasswordConfirmInput type='password' placeholder='Confirm Your Password' />
                    </BottomContainer>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <RegisterBtn>
                        REGISTER
                    </RegisterBtn>
                    <LoginContainer>
                        <span>Already have an account ? <Link to="/login">Login</Link></span>
                    </LoginContainer>
                </InputContainer>

            </RegisterContainer>

        </Container>
    )
}

export default Register
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
const RegisterContainer = styled.div`
background-color:white;
width:60%;

`
const InputContainer = styled.div`
margin:10px;

`
const TopContainer = styled.div`
display:flex;
justify-content:space-between;
margin-bottom:10px;
`
const MiddleContainer = styled.div`
width:100%;
margin-bottom:10px;
`
const BottomContainer = styled.div`
display:flex;
margin-bottom:10px;
`
const FirstNameInput = styled.input`
padding-left:5px;
flex:1;
margin:3px;
border-radius:4px;
background-color: #f2f2f2;
height:40px;
border:1px solid #000;
&:focus{
    outline:none;
}
`
const LastNameInput = styled(FirstNameInput)``
const EmailInput = styled(FirstNameInput)`
width:98%;

`
const PasswordInput = styled(FirstNameInput)``
const PasswordConfirmInput = styled(FirstNameInput)``
const Agreement = styled.div`
margin:10px;

`
const RegisterBtn = styled.div`
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
const LoginContainer = styled.div`
margin:5px;

a{
    text-decoration:none;
    font-size:18px;
    //font-weight:500;
    color:black;
    cursor:pointer;
}
`
