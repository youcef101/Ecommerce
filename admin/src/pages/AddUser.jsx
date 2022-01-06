import React, { useState } from 'react'
import styled from 'styled-components'

function AddUser() {
    const [radio, setRadio] = useState({
        radioMale: false,
        radioFemale: false,
        radioOthers: false
    })
    return (
        <Container>
            <TitleContainer>New User</TitleContainer>
            <FormContainer>
                <LeftRight>
                    <LeftContainer>
                        <InputContainer>
                            <LabelContainer>Firstname</LabelContainer>
                            <FirstNameInput type='text' />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Lastname</LabelContainer>
                            <LastNameInput type='text' />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Email</LabelContainer>
                            <EmailInput type='email' />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Active</LabelContainer>
                            <SelectContainer>
                                <OptionContainer>Yes</OptionContainer>
                                <OptionContainer>No</OptionContainer>
                            </SelectContainer>
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Gender</LabelContainer>
                            <Radio>
                                <RadioContainer>
                                    <MaleInput type='radio' id='Male' name='Male' value='Male' />
                                    <LabelContainer for="Male">Male</LabelContainer>
                                </RadioContainer>
                                <RadioContainer>
                                    <MaleInput type='radio' id='Female' name='Female' value='Female' />
                                    <LabelContainer for="Female">Female</LabelContainer>
                                </RadioContainer>
                                <RadioContainer>
                                    <MaleInput type='radio' id='Others' name='Others' value='Others' />
                                    <LabelContainer for="Others">Others</LabelContainer>
                                </RadioContainer>
                            </Radio>
                        </InputContainer>

                    </LeftContainer>
                    <RightContainer>
                        <InputContainer>
                            <LabelContainer>Fullname</LabelContainer>
                            <FullNameInput type='text' />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Userame</LabelContainer>
                            <UsernameInput type='text' />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Adresse</LabelContainer>
                            <AdresseInput type='text' />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Phone</LabelContainer>
                            <PhoneInput type='text' />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Password</LabelContainer>
                            <PasswordInput type='password' />
                        </InputContainer>
                    </RightContainer>
                </LeftRight>
                <CreateContainer>
                    <CreateBtn>Create</CreateBtn>
                </CreateContainer>
            </FormContainer>
        </Container>
    )
}

export default AddUser
const Container = styled.div`
flex:4;
margin:20px;
border-radius:5px;
padding:10px 15px;
// -webkit-box-shadow: 0px 2px 15px 2px #8C8C8C; 
// box-shadow: 0px 2px 15px 2px #8C8C8C;
`
const TitleContainer = styled.h1``
const FormContainer = styled.form`
flex:4;
`
const LeftRight = styled.div`
flex:4;
display:flex;
`
const LeftContainer = styled.div`
flex:2;
`
const RightContainer = styled.div`
flex:2;
`
const InputContainer = styled.div`
display:flex;
flex-direction:column;
margin:0px 15px;
`
const LabelContainer = styled.label`
color:gray;
font-size:15px;
margin:5px 0px;
`
const FirstNameInput = styled.input`
//width:70%;
height:35px;
border-radius:5px;
&:focus{
    outline:none;
};
border:1px solid gray;
`
const LastNameInput = styled(FirstNameInput)``
const EmailInput = styled(FirstNameInput)``
const UsernameInput = styled(FirstNameInput)``
const FullNameInput = styled(FirstNameInput)``
const PasswordInput = styled(FirstNameInput)``
const PhoneInput = styled(FirstNameInput)``
const AdresseInput = styled(FirstNameInput)``
const SelectContainer = styled.select`
height:35px;
&:focus{
    outline:none;
};
border:1px solid gray;
border-radius:5px;
`
const OptionContainer = styled.option``
const Radio = styled.div`
display:flex;
`
const RadioContainer = styled.div`
display:flex;
align-items:center;
margin:10px 10px;
`
const MaleInput = styled.input``
const CreateContainer = styled.div`
margin-top:25px;
`
const CreateBtn = styled.button`
margin:0px 30px;
border:none;
height:35px;
border-radius:15px;
cursor:pointer;
width:200px;
color:white;
font-size:17px;
font-weight:600;
background-color:darkblue;
&:hover{
   background-color: #0000b3; 
}
`