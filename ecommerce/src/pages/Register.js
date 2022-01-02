import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import SignUpFormValidation from '../authValidationForm/RegisterValidation'
import axiosInstance from '../axios.js'

function Register() {
    const history = useHistory()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password_confirm: ''
    })
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const Register = async (e) => {
        e.preventDefault()
        setErrors(SignUpFormValidation(values))
        let newUser = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirm: passwordConfirmRef.current.value
        }
        try {
            await axiosInstance.post(`/auth/register`, newUser)
            setValues({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                password_confirm: ''
            })
            history.push('/login')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <Container>
            <RegisterContainer>

                <InputContainer>

                    <InputCon>
                        <FirstNameInput ref={firstNameRef} name="firstName" value={values.firstName} onChange={handleChange} placeholder="FirstName" type="text" />
                        {errors.firstName && <Errors><span>{errors.firstName}</span></Errors>}
                    </InputCon>
                    <InputCon>
                        <LastNameInput ref={lastNameRef} name="lastName" value={values.lastName} onChange={handleChange} placeholder="LastName" type="text" />
                        {errors.lastName && <Errors><span>{errors.lastName}</span></Errors>}
                    </InputCon>
                    <InputCon>
                        <EmailInput ref={emailRef} name="email" value={values.email} onChange={handleChange} placeholder="Email" type="email" />
                        {errors.email && <Errors><span>{errors.email}</span></Errors>}
                    </InputCon>
                    <InputCon>
                        <PasswordInput ref={passwordRef} name="password" value={values.password} onChange={handleChange} placeholder="Password" type="password" />
                        {errors.password && <Errors><span>{errors.password}</span></Errors>}
                    </InputCon>
                    <InputCon>
                        <PasswordConfirmInput ref={passwordConfirmRef} name="password_confirm" value={values.password_confirm} onChange={handleChange} placeholder="Password Confirm" type="password" />
                        {errors.password_confirm && <Errors><span>{errors.password_confirm}</span></Errors>}
                    </InputCon>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <RegisterBtn onClick={Register}>
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
width:40%;

`
const InputContainer = styled.div`
width:100%;
display:flex;
margin-top:5px;
margin-bottom:5px;
margin-left:5px;
margin-right:5px;
justify-content:center;
flex-direction:column;
`

const FirstNameInput = styled.input`
width:100%;
margin-bottom:5px;
flex:1;
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
width:100%;
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
    color:black;
    cursor:pointer;
}
`
const Errors = styled.div`
display:flex;
align-items:start;
justify-content:start;
margin-top:-2px;
margin-bottom:3px;
padding-left:15px;
span{
color:red;
font-size:11px;
text-align:start;
}
`
const InputCon = styled.div`
width:96%;
margin:2px;
` 