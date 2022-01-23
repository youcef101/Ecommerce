import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import SignUpFormValidation from '../authValidationForm/RegisterValidation'
import { axiosInstance } from '../axios.js'
import { Ipad, IpadMax, IpadMini, Medium, MediumMax, MediumMin, mobile, mobileMax, mobileMini } from '../responsive'

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
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="first Name" type='text' ref={firstNameRef} name="firstName" value={values.firstName} onChange={handleChange} />
                    <Input placeholder="last name" type='text' ref={lastNameRef} name="lastName" value={values.lastName} onChange={handleChange} />
                    <Input placeholder="email" type='email' ref={emailRef} name="email" value={values.email} onChange={handleChange} />
                    <Input placeholder="password" type='password' ref={passwordRef} name="password" value={values.password} onChange={handleChange} />
                    <Input placeholder="confirm password" type='password' ref={passwordConfirmRef} name="password_confirm" value={values.password_confirm} onChange={handleChange} />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={Register}>CREATE</Button>
                    <LoginContainer>
                        <span>Already have an account ? <Link to="/login">Login</Link></span>
                    </LoginContainer>
                </Form>
            </Wrapper>

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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  min-width: 40%;
  padding: 20px;
  background-color: white;
  
${mobileMini({ minWidth: "90%", maxWidth: "95%" })};

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  &:focus{
      outline:none;
  }
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:hover{
      background-color:#00e6e6;
  }
`;
const LoginContainer = styled.div`
margin:5px;
a{
    text-decoration:none;
    font-size:18px;
    color:black;
    cursor:pointer;
}
`