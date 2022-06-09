import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GpsNotFixedIcon from '@material-ui/icons/GpsNotFixed';
import PublishIcon from '@material-ui/icons/Publish';
import { adminRequest, axiosInstance } from '../axios'
import { updateUser } from '../Redux/apiCalls'
import { useDispatch } from 'react-redux'
import { getStorage, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import app from '../Firebase';


function SingleUser() {
    const dispatch = useDispatch()
    const PF = 'http://localhost:8001/public/uploads/'
    const location = useLocation();
    const userId = location.pathname.split("/")[2];
    const [current_user, setCurrentUser] = useState(null)
    const [inputs, setInputs] = useState({
        profileImage: current_user?.profileImage,
        firstName: current_user?.firstName,
        lastName: current_user?.lastName,
        email: current_user?.email,
        country: current_user?.country,
        city: current_user?.city,
        codePostal: current_user?.codePostal,
        adresse: current_user?.adresse,
        phone: current_user?.phone,
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
    const getCurrentUser = async () => {
        try {
            const res = await axiosInstance.get(`/user/${userId}`);
            const data = await res.data
            setCurrentUser(data)
        } catch { }
    }
    useEffect(() => {
        getCurrentUser()
    }, [userId])

    const EditUser = async (e) => {
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
                        const edited_user = {
                            firstName: inputs.firstName,
                            lastName: inputs.lastName,
                            email: inputs.email,
                            country: inputs.country,
                            city: inputs.city,
                            codePostal: inputs.codePostal,
                            adresse: inputs.adresse,
                            phone: inputs.phone,
                            profileImage: downloadURL

                        }
                        updateUser(userId, edited_user, dispatch) &&
                            getCurrentUser()
                    });
                }
            );
        } else {
            const edited_user = {
                firstName: inputs.firstName,
                lastName: inputs.lastName,
                email: inputs.email,
                country: inputs.country,
                city: inputs.city,
                codePostal: inputs.codePostal,
                adresse: inputs.adresse,
                phone: inputs.phone,


            }
            updateUser(userId, edited_user, dispatch) &&
                getCurrentUser()
        }

    }

    console.log(current_user)
    return (
        <Container>
            <TopContainer>
                <TitleContainer>Edited User</TitleContainer>
                <CreateNewUserBtn><Link to='/create/new'>Create</Link> </CreateNewUserBtn>
            </TopContainer>

            <BottomContainer>
                <LeftContainer>
                    <UserImageContainer>
                        <UserImage>
                            <img src={current_user?.profileImage && /* PF + */ current_user?.profileImage || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt='' />
                        </UserImage>
                        <UserInfoContainer>
                            <Username>{current_user?.fullName}</Username>
                            <UserSub>Software Engineer</UserSub>
                        </UserInfoContainer>
                    </UserImageContainer>
                    <AccountDetailsContainer>
                        <Title>Account Details</Title>
                        <DetailsContainer>
                            <IconContainer><PermIdentityIcon fontSize='small' /></IconContainer>
                            <DetailsItem>{current_user?.fullName}</DetailsItem>
                        </DetailsContainer>
                        <DetailsContainer>
                            <IconContainer><MailOutlineIcon fontSize='small' /></IconContainer>
                            <DetailsItem>{current_user?.email}</DetailsItem>
                        </DetailsContainer>
                        <DetailsContainer>
                            <IconContainer><CalendarTodayIcon fontSize='small' /></IconContainer>
                            <DetailsItem>01.04.1998</DetailsItem>
                        </DetailsContainer>
                        <DetailsContainer>
                            <IconContainer><PhoneAndroidIcon fontSize='small' /></IconContainer>
                            <DetailsItem>+ 216 {current_user?.phone}</DetailsItem>
                        </DetailsContainer>
                        <DetailsContainer>
                            <IconContainer><GpsNotFixedIcon fontSize='small' /></IconContainer>
                            <DetailsItem>New York | USA</DetailsItem>
                        </DetailsContainer>
                    </AccountDetailsContainer>
                </LeftContainer>
                <RightContainer>
                    <FormContainer>
                        <Left>

                            <InputContainer>
                                <LabelContainer>First Name</LabelContainer>
                                <FirstNameInput type='text' name='firstName' onChange={handleInputs} defaultValue={current_user?.firstName} />
                            </InputContainer>
                            <InputContainer>
                                <LabelContainer>Last Name</LabelContainer>
                                <LastNameInput type='text' name='lastName' onChange={handleInputs} defaultValue={current_user?.lastName} />
                            </InputContainer>
                            <InputContainer>
                                <LabelContainer>Email</LabelContainer>
                                <EmailInput type='text' name='email' onChange={handleInputs} defaultValue={current_user?.email} />
                            </InputContainer>
                            <InputContainer>
                                <LabelContainer>Phone</LabelContainer>
                                <PhoneInput type='text' name='phone' onChange={handleInputs} defaultValue={current_user?.phone} />
                            </InputContainer>
                            <InputContainer>
                                <LabelContainer>City</LabelContainer>
                                <CityInput type='text' name='city' onChange={handleInputs} defaultValue={current_user?.city} />
                            </InputContainer>
                            <InputContainer>
                                <LabelContainer>Country</LabelContainer>
                                <CountryInput type='text' name='country' onChange={handleInputs} defaultValue={current_user?.country} />
                            </InputContainer>
                            <InputContainer>
                                <LabelContainer>Code Postal</LabelContainer>
                                <PostalInput type='text' name='codePostal' onChange={handleInputs} defaultValue={current_user?.codePostal} />
                            </InputContainer>
                            <InputContainer>
                                <LabelContainer>Adresse</LabelContainer>
                                <PostalInput type='text' name='adresse' onChange={handleInputs} defaultValue={current_user?.adresse} />
                            </InputContainer>

                        </Left>
                        <Right>
                            <UserProfileImageContainer>
                                <UserProfileImage>
                                    <img src={current_user?.profileImage &&/*  PF + */ current_user?.profileImage || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt='' />
                                </UserProfileImage>
                                <InputContainer style={{ marginTop: '15px' }}>
                                    <LabelFile htmlFor='file'><PublishIcon fontSize='small' />Edit Profile Image</LabelFile>
                                    <input type='file' id='file' name='file' style={{ display: 'none' }} onChange={handleFile} />
                                </InputContainer>
                                <EditContainer onClick={EditUser}>
                                    <EditBtn type='submit'>Edit</EditBtn>
                                </EditContainer>
                            </UserProfileImageContainer>
                        </Right>

                    </FormContainer>

                </RightContainer>
            </BottomContainer>

        </Container>
    )
}

export default SingleUser
const Container = styled.div`
flex:4;
margin:15px;
border-radius:5px;
//padding:10px 15px;
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
&:hover{
    background-color:#00cccc;
}
`
const TopContainer = styled.div`
//padding:10px 15px;
margin:0px 15px;
display:flex;
justify-content:space-between;
align-items:center;
`
const TitleContainer = styled.h2``
const CreateNewUserBtn = styled.button`
color:white;
background-color:teal;
border:none;
height:30px;
font-weight:500;
border-radius:5px;
font-size:16px;
cursor:pointer;
&:hover{
    background-color:#00cccc;
}
a{
    color:white;
    text-decoration:none;
}
`
const BottomContainer = styled.div`
flex:4;
display:flex;
align-items:flex-start;
`
const LeftContainer = styled.div`
flex:1;
//background-color:red;
padding:10px 15px;
-webkit-box-shadow: 0px 2px 15px 2px #8C8C8C; 
box-shadow: 0px 2px 15px 2px #8C8C8C;
margin:5px 15px;
border-radius:5px;
`
const RightContainer = styled.div`
flex:3;
//background-color:yellow;
padding:10px 15px;
-webkit-box-shadow: 0px 2px 15px 2px #8C8C8C; 
box-shadow: 0px 2px 15px 2px #8C8C8C;
margin:5px 10px;
border-radius:5px;

`
const UserImageContainer = styled.div`
display:flex;
align-items:center;
`
const UserImage = styled.div`
img{
    height:40px;
    width:40px;
    border-radius:50%;
    object-fit:cover;
}

`
const UserInfoContainer = styled.div`
display:flex;
flex-direction:column;
margin-left:20px;
`
const Username = styled.span`
font-weight:600;

`
const UserSub = styled.span`
color:gray;
font-weight:300;
`
const AccountDetailsContainer = styled.div``
const Title = styled.h3``
const DetailsContainer = styled.div`
display:flex;
align-items:center;
margin:15px 0px;
`
const IconContainer = styled.div`
margin-right:10px;
display:flex;
align-items:center;
`
const DetailsItem = styled.span``
const Left = styled.div`
flex:1.5;
//background-color:green;
padding:10px 10px;
`
const Right = styled.div`
flex:1.5;
padding:10px 10px;
display:flex;
justify-content:flex-end
`
const FormContainer = styled.form`
flex:3;
display:flex;
`
const InputContainer = styled.div`
margin:5px 0px;
display:flex;
flex-direction:column;
`
const LabelContainer = styled.label`
color:gray;
font-size:14px;
margin:5px 0px;
`
const FirstNameInput = styled.input`
border-top:0px;
border-right:0px;
border-left:0px;
border-bottom:1px solid gray;
width:90%;
&:focus{
    outline:none;
}
`

const LastNameInput = styled(FirstNameInput)``
const EmailInput = styled(FirstNameInput)``
const PhoneInput = styled(FirstNameInput)``
const CityInput = styled(FirstNameInput)``
const CountryInput = styled(FirstNameInput)``
const PostalInput = styled(FirstNameInput)``

const UserProfileImageContainer = styled.div`
display:flex;
flex-direction:column;
`
const UserProfileImage = styled.div`
img{
    width:200px;
    height:200px;
    border:1px solid gray;
    border-radius:5px;
    object-fit:cover;
}
`
const EditContainer = styled.div`
display:flex;
justify-content:flex-end;

`
const EditBtn = styled.button`
border:none;
color:white;
background-color:teal;
font-size:17px;
font-weight:500;
padding:0px 15px;
border-radius:5px;
cursor:pointer;
height:30px;
width:100px;
margin-top:130px;
&:hover{
    background-color:#00cccc;
}
`