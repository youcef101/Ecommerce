import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SignInValidation from '../authValidationForm/LoginValidation'
import { useDispatch } from 'react-redux'
import { LoginCall } from '../Redux/apiCalls'


function Login() {
    const dispatch = useDispatch()
    const [errors, setErrors] = useState('')
    const emailRef = useRef()
    const passwordRef = useRef()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const Login = async (e) => {
        e.preventDefault()
        setErrors(SignInValidation(values))
        let user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        LoginCall(dispatch, user)
    }


    return (
        <Container>
            <LoginContainer>
                <InputContainer>
                    <InputCon>
                        <EmailInput ref={emailRef} name='email' type='email' onChange={handleChange} placeholder='Enter Your Email' />
                        {errors.email && <Errors><span>{errors.email}</span></Errors>}
                    </InputCon>
                    <InputCon>
                        <PasswordInput ref={passwordRef} name='password' onChange={handleChange} type='password' placeholder='Enter Your Password' />
                        {errors.password && <Errors><span>{errors.password}</span></Errors>}
                    </InputCon>
                    <LoginBtn onClick={Login}>
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
width:40%;

`
const InputContainer = styled.div`
width:97%;
display:flex;
flex-direction:column;
margin-bottom:10px;
margin-top:5px; 
`
const EmailInput = styled.input`
width:100%;
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
    color:black;
    cursor:pointer;
}
`
const Errors = styled.div`
display:flex;
align-items:start;
justify-content:start;
margin-top:-2px;
//margin-bottom:3px;
padding-left:15px;
span{
color:red;
font-size:11px;
text-align:start;
}
`
const InputCon = styled.div`
width:100%;
margin:5px;
` 