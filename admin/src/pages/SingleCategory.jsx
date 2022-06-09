import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import PublishIcon from '@material-ui/icons/Publish';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategoryInfo } from '../Redux/apiCalls'
import { adminRequest } from '../axios';
import { getStorage, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import app from '../Firebase';



function SingleCategory() {
    const PF = 'http://localhost:8001/public/uploads/'
    const dispatch = useDispatch()
    const titleRef = useRef()
    const catImageRef = useRef()
    const location = useLocation();
    const categoryId = location.pathname.split("/")[2];
    const [current_category, setCurrentCategory] = useState(null)
    //const current_category = useSelector(state => state.product.current_category)
    const [inputs, setInputs] = useState({
        title: current_category?.title,
        categoryImage: current_category?.categoryImage
    })
    const handleTitle = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const handleFile = (e) => {
        setInputs({ ...inputs, categoryImage: e.target.files[0] });
    }

    const getCurrentCategory = async () => {
        try {
            const res = await adminRequest.get(`/category/get/${categoryId}/d`)
            const data = await res.data
            setCurrentCategory(data)
        } catch { }
    }
    useEffect(() => {
        getCurrentCategory()
    }, [categoryId])
    //console.log(current_category)

    const EditCategory = async (e) => {
        e.preventDefault();
        if (inputs?.categoryImage) {
            const fileName = new Date().getTime() + inputs?.categoryImage.name;
            const storage = getStorage(app);
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, inputs?.categoryImage);
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
                        const editedCat = {
                            title: inputs?.title,
                            categoryImage: downloadURL
                        }
                        updateCategoryInfo(categoryId, editedCat, dispatch)
                        getCurrentCategory()
                    });
                }
            );
        } else {
            const editedCat = {
                title: inputs?.title,
            }
            updateCategoryInfo(categoryId, editedCat, dispatch)
            getCurrentCategory()
        }

        /*  const editedCat = {
             title: inputs.title,
         }
         if (catImageRef.current.value) {
             const formData = new FormData();
             const filename = `IMAGE-${Date.now()}` + `${inputs.categoryImage?.name}`.split(' ').join('').toLowerCase()
             formData.append('filename', filename);
             formData.append('file', inputs.categoryImage);
             editedCat.categoryImage = filename;
             try {
                 await adminRequest.post('/upload', formData);
             } catch { }
         }
         updateCategoryInfo(categoryId, editedCat, dispatch)
         getCurrentCategory() */
    }

    return (
        <Container>
            <TopContainer>
                <TitleContainer>Category</TitleContainer>
                <CreateNewUserBtn><Link to='/AddCategory'>Create</Link> </CreateNewUserBtn>
            </TopContainer>
            <Category>

                <CategoryContainer>

                    <CategoryTitleContainer>
                        <TitleLabel>Title</TitleLabel>
                        <TitleInput ref={titleRef} type='text' name='title' defaultValue={current_category?.title} /* value={inputs.title} */ onChange={handleTitle} />
                    </CategoryTitleContainer>

                    <UserProfileImageContainer>
                        <UserProfileImage>
                            <img src={/* PF + */ current_category?.categoryImage} alt='' />
                        </UserProfileImage>

                    </UserProfileImageContainer>

                    <InputContainer>
                        <LabelFile htmlFor='file' ><PublishIcon fontSize='small' />Upload Category Image</LabelFile>
                        <input ref={catImageRef} type='file' id='file' style={{ display: 'none' }} name='file' onChange={handleFile} />
                    </InputContainer>



                    <EditContainer>
                        <EditBtn onClick={EditCategory} type='submit'>Edit</EditBtn>
                    </EditContainer>

                </CategoryContainer>
            </Category>
        </Container>
    )
}

export default SingleCategory
const Container = styled.div``
const TopContainer = styled.div`
//padding:10px 15px;
margin:0px 15px;
display:flex;
justify-content:space-between;
align-items:center;
`
const TitleContainer = styled.h2``
const Cat = styled.div`
display:flex;
align-items:center;

`
const EditBtnCat = styled.button`
cursor:pointer;
background-color:teal;
color:white;
border-radius:5px;
padding:10px 10px;
display:flex;
align-items:center;
justify-content:center;
width:180px;
border:none;
&:hover{
    background-color:#00cccc;
}
`
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
const Category = styled.div`
width:55%
`
const CategoryContainer = styled.div`

margin:20px;
border-radius:5px;
padding:10px 15px;
-webkit-box-shadow: 0px 2px 15px 2px #8C8C8C; 
box-shadow: 0px 2px 15px 2px #8C8C8C;
display:flex;
flex-direction:column;
`
const Left = styled.div`

`
const Right = styled.div`

`
const InputContainer = styled.div`
margin:10px 0px;
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
width:180px;
&:hover{
    background-color:#00cccc;
}
`
const UserProfileImageContainer = styled.div`
display:flex;
flex-direction:column;
margin-top:20px;
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
const CategoryTitleContainer = styled.div`
display:flex;
flex-direction:column;
margin:15px 0px;
`
const TitleLabel = styled.label`
color:gray;
font-size:14px;
margin:5px 0px;
`
const TitleInput = styled.input`
border-top:0px;
border-right:0px;
border-left:0px;
border-bottom:1px solid gray;
width:80%;
&:focus{
    outline:none;
}
`
const EditContainer = styled.div`
//display:flex;
//justify-content:flex-end;
`
const EditBtn = styled.button`
border:none;
color:white;
background-color:teal;
font-size:17px;
font-weight:500;
padding:0px 15px;
border-radius:10px;
cursor:pointer;
height:30px;
width:30%;
&:hover{
    background-color:#00cccc;
}
`