import React, { useState } from 'react'
import styled from 'styled-components'
import PublishIcon from '@material-ui/icons/Publish';
import { adminRequest } from '../axios';
import { getStorage, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import app from '../Firebase';



function AddUser() {
    const [inputs, setInputs] = useState({
        profileImage: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password_confirm: '',
        country: '',
        city: '',
        codePostal: '',
        adresse: '',
        phone: '',
        isAdmin: false
    })
    const [selected, setSelected] = useState(inputs.isAdmin)
    const [radio, setRadio] = useState({
        radioMale: false,
        radioFemale: false,
        radioOthers: false
    })
    const handleInputs = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const handleFile = (e) => {
        setInputs({ ...inputs, profileImage: e.target.files[0] });
    }
    const handleSelected = (e) => {
        setSelected({
            ...inputs,
            [e.target.name]: e.target.value === 'Yes' ? true : false
        })
    }

    const CreateNewUser = async (e) => {
        e.preventDefault();
        if (inputs?.profileImage) {
            const fileName = new Date().getTime() + inputs?.profileImage.name;
            const storage = getStorage(app);
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, inputs?.profileImage);
            uploadTask.on('state_changed',
                (snapshot) => {

                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                    }
                },
                (error) => { },
                () => {

                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        const newUser = {
                            firstName: inputs.firstName,
                            lastName: inputs.lastName,
                            email: inputs.email,
                            password: inputs.password,
                            password_confirm: inputs.password_confirm,
                            country: inputs.country,
                            city: inputs.city,
                            codePostal: inputs.codePostal,
                            adresse: inputs.adresse,
                            phone: inputs.phone,
                            isAdmin: inputs.isAdmin,
                            profileImage: downloadURL
                        }
                        try {
                            adminRequest.post('/auth/register', newUser);
                            setInputs(
                                {
                                    ...inputs,
                                    [e.target.name]: ''
                                }
                            )
                        } catch { }
                    });
                }
            );
        } else {
            const newUser = {
                firstName: inputs.firstName,
                lastName: inputs.lastName,
                email: inputs.email,
                password: inputs.password,
                password_confirm: inputs.password_confirm,
                country: inputs.country,
                city: inputs.city,
                codePostal: inputs.codePostal,
                adresse: inputs.adresse,
                phone: inputs.phone,
                isAdmin: inputs.isAdmin,

            }
            try {
                adminRequest.post('/auth/register', newUser);
                setInputs(
                    {
                        ...inputs,
                        [e.target.name]: ''
                    }
                )
            } catch { }
        }
    }

    return (
        <Container>
            <TitleContainer>New User</TitleContainer>
            <FormContainer>

                {/*  <TopContainer>
                    <ProfileImageContainer>
                        <ProfileImage>
                            <img src='/images/user/my-image.jpg' alt='' />
                        </ProfileImage>
                    </ProfileImageContainer>
                </TopContainer> */}
                <LeftRight>
                    <LeftContainer>
                        <InputContainer>
                            <LabelContainer>Firstname</LabelContainer>
                            <FirstNameInput type='text' name='firstName' onChange={handleInputs} />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Lastname</LabelContainer>
                            <LastNameInput type='text' name='lastName' onChange={handleInputs} />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Country</LabelContainer>
                            <EmailInput type='text' name='country' onChange={handleInputs} />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Code Postal</LabelContainer>
                            <AdresseInput type='text' name='codePostal' onChange={handleInputs} />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>isAdmin</LabelContainer>
                            <SelectContainer name='isAdmin' onChange={handleSelected}>
                                <OptionContainer>No</OptionContainer>
                                <OptionContainer >Yes</OptionContainer>
                            </SelectContainer>
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Gender</LabelContainer>
                            <Radio>
                                <RadioContainer>
                                    <MaleInput type='radio' id='Male' name='Male' value='Male' />
                                    <LabelContainer htmlFor="Male">Male</LabelContainer>
                                </RadioContainer>
                                <RadioContainer>
                                    <MaleInput type='radio' id='Female' name='Female' value='Female' />
                                    <LabelContainer htmlFor="Female">Female</LabelContainer>
                                </RadioContainer>
                                <RadioContainer>
                                    <MaleInput type='radio' id='Others' name='Others' value='Others' />
                                    <LabelContainer htmlFor="Others">Others</LabelContainer>
                                </RadioContainer>
                            </Radio>
                        </InputContainer>

                    </LeftContainer>
                    <RightContainer>
                        <InputContainer>
                            <LabelContainer>Email</LabelContainer>
                            <EmailInput type='email' name='email' onChange={handleInputs} />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Password</LabelContainer>
                            <PasswordInput type='password' name='password' onChange={handleInputs} />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Password Confirm</LabelContainer>
                            <PasswordInput type='password' name='password_confirm' onChange={handleInputs} />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>City</LabelContainer>
                            <AdresseInput type='text' name='city' onChange={handleInputs} />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Adresse</LabelContainer>
                            <AdresseInput type='text' name='adresse' onChange={handleInputs} />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Phone</LabelContainer>
                            <PhoneInput type='text' name='phone' onChange={handleInputs} />
                        </InputContainer>
                        <InputContainer style={{ marginTop: '15px' }}>
                            <LabelFile htmlFor='file'><PublishIcon fontSize='small' />Upload Profile Image</LabelFile>
                            <input type='file' id='file' name='file' style={{ display: 'none' }} onChange={handleFile} />
                        </InputContainer>
                    </RightContainer>
                </LeftRight>
                <CreateContainer onClick={CreateNewUser}>
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
const LabelFile = styled.label`
cursor:pointer;
background-color:teal;
color:white;
border-radius:5px;
padding:10px 10px;
display:flex;
align-items:center;
justify-content:center;
//width:20%;
`
/* const TopContainer = styled.div`
//width:100%;
display:flex;
justify-content:center;
align-items:center;
`
const ProfileImageContainer = styled.div`

`
const ProfileImage = styled.div`
img{
    width:30%;
    height:30%;
    border-radius:50%;
}
` */
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