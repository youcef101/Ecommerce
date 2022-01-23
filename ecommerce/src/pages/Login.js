import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SignInValidation from '../authValidationForm/LoginValidation'
import { useDispatch } from 'react-redux'
import { LoginCall } from '../Redux/apiCalls'
import { Ipad, IpadMax, IpadMini, Medium, MediumMax, MediumMin, mobile, mobileMax, mobileMini } from '../responsive'


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
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input ref={emailRef} name='email' type='email' onChange={handleChange} placeholder='email' />
                    <Input ref={passwordRef} name='password' onChange={handleChange} type='password' placeholder='password' />
                    <Button onClick={Login}>LOGIN</Button>
                    <Lien>DO NOT YOU REMEMBER THE PASSWORD?</Lien>
                    <BottomContainer>
                        <span>Dont't have an account ? <Link to="/register">Register</Link></span>
                    </BottomContainer>
                </Form>
            </Wrapper>


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
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  min-width: 25%;
  padding: 20px;
  background-color: white;
  ${mobileMini({ minWidth: "90%", maxWidth: "95%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  &:focus{
      outline:none
    }
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
   &:hover{
      background-color:#00e6e6;
  }
`;

const Lien = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const BottomContainer = styled.div`
white-space:nowrap;
a{
    text-decoration:none;
    font-size:18px;
    color:black;
    cursor:pointer;
}
`