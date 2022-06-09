import React, { useState } from 'react'
import styled from 'styled-components'
import PublishIcon from '@material-ui/icons/Publish';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { addProduct, getAllCategories } from '../Redux/apiCalls';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import HtmlReactParser from 'html-react-parser'
import { adminRequest } from '../axios';
import { getStorage, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import app from '../Firebase';

function AddProduct() {
    const categories = useSelector(state => state.product.categories)
    const dispatch = useDispatch()
    const [addData, setAddData] = useState('')
    const [color, setColor] = useColor("hex", "#121212");
    const [product_colors, setProductColors] = useState([])
    const [product_size, setProductsSize] = useState([])
    const [category, setCategory] = useState(categories[0]?._id)
    const arr = []

    useEffect(() => {
        getAllCategories(dispatch)
    }, [dispatch])


    //console.log(category)
    //handle inputs
    const [inputs, setInputs] = useState({
        productImage: '',
        categoryId: category,
        title: '',
        desc: '',
        color: [],
        size: [],
        price: 0,
        stock: 0

    })
    const handleInfo = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const handleFile = (e) => {
        setInputs({ ...inputs, productImage: e.target.files[0] });
    }

    const handleEditor = (e, editor) => {
        const data = editor.getData();
        setAddData(data)
    }


    ////



    const handleProductsColors = (e) => {
        arr.push(color.hex)
        setProductColors(prev => [...prev, color.hex])

    }
    //console.log(product_colors)
    //console.log(color)
    const handleCheckBox = (e) => {
        let index = product_size.indexOf(e.target.name)
        if (!e.target.checked && product_size.indexOf(e.target.name) > -1) {
            const x = product_size.splice(index, 1)
            setProductsSize(product_size.filter(item => item !== x))
        } else {
            setProductsSize([
                ...product_size,
                e.target.name

            ])
        }

    }

    const CreateProduct = async (e) => {
        e.preventDefault();
        if (inputs?.productImage) {
            const fileName = new Date().getTime() + inputs?.productImage.name;
            const storage = getStorage(app);
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, inputs?.productImage);
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
                        const newProduct = {
                            categoryId: inputs.categoryId,
                            title: inputs.title,
                            desc: addData,
                            color: product_colors,
                            size: product_size,
                            stock: inputs.stock,
                            price: inputs.price,
                            productImage: downloadURL
                        }
                        addProduct(newProduct, dispatch)
                        setInputs(
                            {
                                productImage: '',
                                categoryId: category,
                                title: '',
                                desc: '',
                                color: [],
                                size: [],
                                price: 0,
                                stock: 0

                            }
                        )
                    });
                }
            );
        } else {
            const newProduct = {
                categoryId: inputs.categoryId,
                title: inputs.title,
                desc: addData,
                color: product_colors,
                size: product_size,
                stock: inputs.stock,
                price: inputs.price,

            }
            addProduct(newProduct, dispatch)
            setInputs(
                {

                    categoryId: category,
                    title: '',
                    desc: '',
                    color: [],
                    size: [],
                    price: 0,
                    stock: 0

                }
            )
        }

    }

    const deleteColor = (color) => {
        const res = product_colors.filter(col => col !== color)
        setProductColors(res)
    }


    return (
        <Container>
            <TitleContainer>New Product</TitleContainer>
            <InputContainer>
                <LabelFile htmlFor='file'><PublishIcon fontSize='small' />Upload Product Image</LabelFile>
                <input type='file' id='file' name='file' style={{ display: 'none' }} onChange={handleFile} />
            </InputContainer>

            <InputContainer>
                <LabelContainer>Category</LabelContainer>
                <SelectContainer value={category} onChange={(e) => setCategory(e.target.value)}>
                    {categories &&
                        categories.map(item => <React.Fragment key={Math.random()}>
                            <OptionContainer name='category' value={item?._id} >{item?.title}</OptionContainer>
                        </React.Fragment>)}
                </SelectContainer>
            </InputContainer>
            <InputContainer>
                <LabelContainer >Title</LabelContainer>
                <ProductTitleInput type='text' name='title' onChange={handleInfo} />
            </InputContainer>
            <InputContainer style={{ marginTop: '30px', marginBottom: '30px' }} >
                <LabelContainer style={{ marginBottom: '15px' }} >Description</LabelContainer>
                <CKEditor
                    editor={ClassicEditor}
                    //data={addData}
                    onChange={handleEditor}
                />
                {/* <div>{HtmlReactParser(addData)}</div> */}
            </InputContainer>
            <InputContainer style={{ marginTop: '30px', marginBottom: '30px' }}>
                <LabelContainer style={{ marginBottom: '15px' }} >Color</LabelContainer>
                <ColorPicker
                    width={300}
                    height={150}
                    color={color}
                    onChange={setColor}
                    hideHSV
                    hideRGB
                    dark />
                <ColorContainer>
                    {product_colors !== [] &&
                        product_colors.map(item =>
                            <ProductColor style={{ cursor: 'pointer' }} key={Math.random()} color={item} onClick={() => deleteColor(item)} />
                        )}
                </ColorContainer>
                <PickProductColors onClick={handleProductsColors}>Pick Colors</PickProductColors>
            </InputContainer>

            <InputContainer>
                <LabelContainer >Size</LabelContainer>
                <CheckBoxContainer>

                    <Check>
                        <CheckBoxInput type='checkbox' name='X'
                            onChange={handleCheckBox}

                        />
                        <CheckBoxLabel htmlFor='x'>X</CheckBoxLabel>
                    </Check>

                    <Check>
                        <CheckBoxInput type='checkbox' name='XS' onChange={handleCheckBox} />
                        <CheckBoxLabel htmlFor='xs'>XS</CheckBoxLabel>
                    </Check>
                    <Check>
                        <CheckBoxInput type='checkbox' name='L' onChange={handleCheckBox} />
                        <CheckBoxLabel htmlFor='l'>L</CheckBoxLabel>
                    </Check>
                    <Check>
                        <CheckBoxInput type='checkbox' name='S' onChange={handleCheckBox} />
                        <CheckBoxLabel htmlFor='s'>S</CheckBoxLabel>
                    </Check>
                    <Check>
                        <CheckBoxInput type='checkbox' name='M' onChange={handleCheckBox} />
                        <CheckBoxLabel htmlFor='m'>M</CheckBoxLabel>
                    </Check>
                    <Check>
                        <CheckBoxInput type='checkbox' name='XXL' onChange={handleCheckBox} />
                        <CheckBoxLabel htmlFor='xxl'>XXL</CheckBoxLabel>
                    </Check>
                    <Check>
                        <CheckBoxInput type='checkbox' name='NONE' onChange={handleCheckBox} />
                        <CheckBoxLabel htmlFor='none'>NONE</CheckBoxLabel>
                    </Check>
                </CheckBoxContainer>
                <CheckedSizeContainer>
                    <Label>checked size:</Label>
                    {product_size &&
                        product_size.map(item =>
                            <CheckedSize key={Math.random()}>[ {item} ]</CheckedSize>
                        )}

                </CheckedSizeContainer>
            </InputContainer>

            <InputContainer>
                <LabelContainer >Price</LabelContainer>
                <ProductTitleInput type='text' name='price' onChange={handleInfo} />
            </InputContainer>

            <InputContainer>
                <LabelContainer >Stock</LabelContainer>
                <ProductTitleInput type='text' name='stock' onChange={handleInfo} />
            </InputContainer>
            <InputContainer>
                <LabelContainer>Active</LabelContainer>
                <SelectContainer>
                    <OptionContainer>Yes</OptionContainer>
                    <OptionContainer>No</OptionContainer>
                </SelectContainer>
            </InputContainer>
            <CreateContainer onClick={CreateProduct}>
                <CreateBtn>Create</CreateBtn>
            </CreateContainer>
        </Container >
    )
}

export default AddProduct
const Container = styled.div`
                flex:4;
                margin:15px;
                border-radius:5px;
                padding:10px 15px;

                `
const CheckBoxContainer = styled.div`
                display:flex;
                align-items:center;
                justify-content:space-between;
                width:60%;
                `
const Check = styled.div`
                display:flex;
                align-items:center;
                `
const CheckBoxInput = styled.input`

                `
const CheckBoxLabel = styled.label`

                `
const CheckedSizeContainer = styled.div`
                display:flex;
                align-items:center;
                margin:15px 5px;
                `
const CheckedSize = styled.div`
                margin:0px 5px;
                `
const Label = styled.span``
const PickProductColors = styled.button`
                background-color:teal;
                border:none;
                margin:15px 0px;
                border-radius:5px;
                width:100px;
                height:35px;
                color:white;
                font-weight:600;
                cursor:pointer;
                &:hover{
                    background - color:#00cccc;
}
                `
const ColorContainer = styled.div`
                display:flex;
                align-items:center;
                margin:15px 0px;
                `
const ProductColor = styled.div`
                margin-right:10px;
                width:20px;
                height:20px;
                border-radius:50%;
                background-color:${props => props.color}
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
                    background - color:blue;
}
                `