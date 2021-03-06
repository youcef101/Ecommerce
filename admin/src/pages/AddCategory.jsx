import React, { useState } from 'react'
import styled from 'styled-components'
import PublishIcon from '@material-ui/icons/Publish';
import { useDispatch } from 'react-redux'
import { addCategory } from '../Redux/apiCalls';
import { adminRequest } from '../axios'
import { getStorage, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import app from '../Firebase';

function AddCategory() {
    const [title, setTitle] = useState('')
    const [categoryImage, setCategoryImage] = useState('')
    const dispatch = useDispatch()
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleFile = (e) => {
        //console.log(e.target.files[0])
        setCategoryImage(e.target.files[0]);
    }
    //console.log(`IMAGE-${Date.now()}` + `${categoryImage.name}`.split(' ').join('').toLowerCase())
    const CreateCategory = async (e) => {
        e.preventDefault();
        if (categoryImage) {
            const fileName = new Date().getTime() + categoryImage.name;
            const storage = getStorage(app);
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, categoryImage);
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
                        const newCat = {
                            title,
                            categoryImage: downloadURL
                        }
                        addCategory(newCat, dispatch)
                        setCategoryImage('')
                        setTitle('')
                    });
                }
            );
        } else {
            const newCat = {
                title,
            }
            addCategory(newCat, dispatch)
            setCategoryImage('')
            setTitle('')
        }

    }

    return (
        <Container>
            <TitleContainer>New Category</TitleContainer>
            <InputContainer>
                <LabelFile htmlFor='file'><PublishIcon fontSize='small' />Upload Category Image</LabelFile>
                <input type='file' id='file' name='file' style={{ display: 'none' }} onChange={handleFile} />
            </InputContainer>
            <InputContainer>
                <LabelContainer >Title</LabelContainer>
                <ProductTitleInput type='text' name='title' value={title} onChange={handleTitle} />
            </InputContainer>


            <CreateContainer>
                <CreateBtn onClick={CreateCategory}>Create</CreateBtn>
            </CreateContainer>
        </Container>
    )
}

export default AddCategory
const Container = styled.div`
flex:4;
margin:15px;
border-radius:5px;
padding:10px 15px;

`
const TitleContainer = styled.h1``
const InputContainer = styled.div`
margin:10px;
display:flex;
flex-direction:column;
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
width:20%;
`
const LabelContainer = styled.label`
color:gray;
margin:5px 0px;
`
const ProductTitleInput = styled.input`
width:30%;
height:35px;
&:focus{
    outline:none;
}
`
const SelectContainer = styled.select`
width:31%;
height:40px;
&:focus{
    outline:none;
}
`
const OptionContainer = styled.option``
const CreateContainer = styled.div`
margin:30px 20px;
`
const CreateBtn = styled.button`
background-color:darkblue;
color:white;
font-weight:600;
font-size:16px;
border:none;
border-radius:10px;
width:20%;
cursor:pointer;
height:30px;
&:hover{
    background-color:blue;
}
`
