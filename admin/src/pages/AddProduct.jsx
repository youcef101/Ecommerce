import React from 'react'
import styled from 'styled-components'
import PublishIcon from '@material-ui/icons/Publish';

function AddProduct() {
    return (
        <Container>
            <TitleContainer>New Product</TitleContainer>
            <InputContainer>
                <LabelFile htmlFor='file'><PublishIcon fontSize='small' />Upload Product Image</LabelFile>
                <input type='file' id='file' style={{ display: 'none' }} />
            </InputContainer>
            <InputContainer>
                <LabelContainer >Title</LabelContainer>
                <ProductTitleInput type='text' />
            </InputContainer>
            <InputContainer>
                <LabelContainer >Stock</LabelContainer>
                <ProductTitleInput type='text' />
            </InputContainer>
            <InputContainer>
                <LabelContainer>Active</LabelContainer>
                <SelectContainer>
                    <OptionContainer>Yes</OptionContainer>
                    <OptionContainer>No</OptionContainer>
                </SelectContainer>
            </InputContainer>
            <CreateContainer>
                <CreateBtn>Create</CreateBtn>
            </CreateContainer>
        </Container>
    )
}

export default AddProduct
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