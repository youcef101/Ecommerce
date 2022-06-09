
import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PublishIcon from '@material-ui/icons/Publish';
import Chart from '../components/Chart'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useDispatch } from 'react-redux';
import { getAllCategories, updateProduct } from '../Redux/apiCalls';
import { useSelector } from 'react-redux';
import HtmlReactParser from 'html-react-parser'
import { adminRequest } from '../axios';
import { product_data } from '../dummyData.js'
import { getStorage, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import app from '../Firebase';


function SingleProduct() {
    const PF = 'http://localhost:8001/public/uploads/'
    const dispatch = useDispatch()
    const [color, setColor] = useColor("hex", "#121212");
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const categories = useSelector(state => state?.product?.categories)
    const [current_product, setCurrentProduct] = useState(null)
    const [category, setCategory] = useState(current_product?.categoryId)
    const [product_colors, setProductColors] = useState([])
    const [product_size, setProductsSize] = useState([])
    const [addData, setAddData] = useState(current_product?.desc)

    console.log(current_product)


    const getCurrentProduct = async () => {
        const res = await adminRequest.get(`/product/${productId}`)
        const data = await res.data
        setCurrentProduct(data)
        setProductsSize(data?.size)
        setProductColors(data?.color)
    }
    useEffect(() => {
        getCurrentProduct()
    }, [productId])


    useEffect(() => {
        getAllCategories(dispatch)
    }, [dispatch])



    //handle inputs
    const [inputs, setInputs] = useState({
        productImage: current_product?.productImage,
        title: current_product?.title,
        price: current_product?.price,
        stock: current_product?.stock

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


    const handleProductsColors = (e) => {
        setProductColors(prev => [...prev, color.hex])
    }
    //console.log(product_colors)
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

    const EditProduct = async (e) => {
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
                        const editedProduct = {
                            categoryId: category,
                            title: inputs.title,
                            desc: addData,
                            color: product_colors,
                            size: product_size,
                            stock: inputs.stock,
                            price: inputs.price,
                            productImage: downloadURL
                        }
                        updateProduct(productId, editedProduct, dispatch)
                        getCurrentProduct()
                    });
                }
            );
        } else {
            const editedProduct = {
                categoryId: category,
                title: inputs.title,
                desc: addData,
                color: product_colors,
                size: product_size,
                stock: inputs.stock,
                price: inputs.price,

            }
            updateProduct(productId, editedProduct, dispatch)
            getCurrentProduct()
        }

    }

    return (
        <Container>

            <MiddleContainer>
                <ChartContainer>
                    <Chart data={product_data} title='Sales Performence' grid dataKey='Sales' />
                </ChartContainer>
                <ProductInfoContainer>

                    <ProductImageContainer>
                        <ProductImage>
                            <img src={/* PF + */ current_product?.productImage} alt='' />
                        </ProductImage>
                        <ProductTitle>
                            <span>{current_product?.title} </span>
                        </ProductTitle>
                    </ProductImageContainer>
                    <ProductInfo>
                        <SalesInfo>
                            <Sales>Sales</Sales>
                            <SalesValue>$ 4523</SalesValue>
                        </SalesInfo>
                        <SalesInfo>
                            <Sales>Active</Sales>
                            {current_product?.status ?
                                <SalesValue>Yes</SalesValue>
                                : <SalesValue>No</SalesValue>}
                        </SalesInfo>
                        <SalesInfo>

                            <Sales>inStock</Sales>
                            {current_product?.stock !== 0 ?
                                <SalesValue>Yes</SalesValue>
                                : <SalesValue>No</SalesValue>}
                        </SalesInfo>
                    </ProductInfo>

                </ProductInfoContainer>
            </MiddleContainer>
            <BottomContainer>
                {current_product && <>
                    <UserProfileImageContainer>
                        <UserProfileImage>
                            <img src={/* PF +  */current_product?.productImage} alt='' />
                        </UserProfileImage>
                        <UploadContainer >
                            <LabelContainer htmlFor='file' style={{
                                cursor: 'pointer',
                                width: '200px', height: '35px', backgroundColor: 'teal', color: 'white',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '5px'
                            }}>
                                <PublishIcon fontSize='small' />Upload</LabelContainer>
                            <input type='file' id='file' style={{ display: 'none' }} onChange={handleFile} />
                        </UploadContainer>

                    </UserProfileImageContainer>
                    <Row>
                        <InputContainer type='category'>
                            <LabelContainer>Category</LabelContainer>
                            <SelectContainer value={category} onChange={(e) => setCategory(e.target.value)}>
                                {categories &&
                                    categories.map(item => <React.Fragment key={Math.random()}>
                                        <OptionContainer name='category' value={item._id} >{item.title}</OptionContainer>
                                    </React.Fragment>)}
                            </SelectContainer>
                        </InputContainer>
                        <InputContainer type='title'>
                            <LabelContainer >Title</LabelContainer>
                            <ProductTitleInput type='text' name='title' defaultValue={current_product?.title} onChange={handleInfo} />
                        </InputContainer>
                    </Row>
                    <InputContainer style={{ marginTop: '30px', marginBottom: '30px', width: '90%' }} type='editor'>
                        <LabelContainer style={{ marginBottom: '15px' }} >Description</LabelContainer>
                        <CKEditor
                            style={{ display: 'flex', justifyContent: 'center' }}
                            editor={ClassicEditor}
                            data={current_product?.desc}

                            onChange={(e, editor) => {
                                const data = editor.getData();
                                setAddData(data)
                            }}
                        />
                        {/* <div>{HtmlReactParser(addData)}</div> */}
                    </InputContainer>
                    <InputContainer style={{ marginTop: '30px', marginBottom: '30px' }} >
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
                            {product_colors &&
                                product_colors?.map(item =>
                                    <ProductColor style={{ cursor: 'pointer' }} key={Math.random()} color={item} />
                                )}
                        </ColorContainer>
                        <PickProductColors onClick={handleProductsColors} >Pick Colors</PickProductColors>
                    </InputContainer>

                    <InputContainer>
                        <LabelContainer >Size</LabelContainer>
                        <CheckBoxContainer>


                            <Check>
                                <CheckBoxInput type='checkbox' name='X' onChange={handleCheckBox} checked={current_product?.size.indexOf('X') > -1 ? true : null} />
                                <CheckBoxLabel htmlFor='x'>X</CheckBoxLabel>
                            </Check>

                            <Check>
                                <CheckBoxInput type='checkbox' name='XS' onChange={handleCheckBox} checked={current_product?.size.indexOf('XS') > -1 ? true : null} />
                                <CheckBoxLabel htmlFor='xs'>XS</CheckBoxLabel>
                            </Check>
                            <Check>
                                <CheckBoxInput type='checkbox' name='L' onChange={handleCheckBox} checked={current_product?.size.indexOf('L') > -1 ? true : null} />
                                <CheckBoxLabel htmlFor='l'>L</CheckBoxLabel>
                            </Check>
                            <Check>
                                <CheckBoxInput type='checkbox' name='S' onChange={handleCheckBox} checked={current_product?.size.indexOf('S') > -1 ? true : null} />
                                <CheckBoxLabel htmlFor='s'>S</CheckBoxLabel>
                            </Check>
                            <Check>
                                <CheckBoxInput type='checkbox' name='M' onChange={handleCheckBox} checked={current_product?.size.indexOf('M') > -1 ? true : null} />
                                <CheckBoxLabel htmlFor='m'>M</CheckBoxLabel>
                            </Check>
                            <Check>
                                <CheckBoxInput type='checkbox' name='XXL' onChange={handleCheckBox} checked={current_product?.size.indexOf('XXL') > -1 ? true : null} />
                                <CheckBoxLabel htmlFor='xxl'>XXL</CheckBoxLabel>
                            </Check>
                            <Check>
                                <CheckBoxInput type='checkbox' name='XL' onChange={handleCheckBox} checked={current_product?.size.indexOf('XL') > -1 ? true : null} />
                                <CheckBoxLabel htmlFor='xl'>XL</CheckBoxLabel>
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
                        <ProductTitleInput type='text' name='price' defaultValue={current_product?.price} onChange={handleInfo} />
                    </InputContainer>

                    <InputContainer>
                        <LabelContainer >Stock</LabelContainer>
                        <ProductTitleInput type='text' name='stock' defaultValue={current_product?.stock} onChange={handleInfo} />
                    </InputContainer>
                    <InputContainer>
                        <LabelContainer>Active</LabelContainer>
                        <SelectContainer>
                            {current_product?.status ?
                                <OptionContainer>Yes</OptionContainer>
                                :
                                <OptionContainer>No</OptionContainer>}
                        </SelectContainer>
                    </InputContainer>
                    <CreateContainer onClick={EditProduct} >
                        <CreateBtn>Edit Product</CreateBtn>
                    </CreateContainer>
                </>}
            </BottomContainer >
        </Container >
    )
}

export default SingleProduct
const Container = styled.div`
flex:4;
margin:15px;
border-radius:5px;
`

const ChartContainer = styled.div`
flex:2;
margin-top:-25px;
`
const MiddleContainer = styled.div`
flex:4;
display:flex;
align-items:flex-start;
`
const ProductInfoContainer = styled.div`
flex:2;
padding:13px 15px;
-webkit-box-shadow: 0px 2px 15px 2px #8C8C8C; 
box-shadow: 0px 2px 15px 2px #8C8C8C;
margin-top:5px;
border-radius:5px;

`
const ProductImageContainer = styled.div`
display:flex;
align-items:center;
`
const ProductImage = styled.div`
img{
    width:50px;
    height:50px;
    border-radius:50%;
    object-fit:cover;
}
`
const ProductTitle = styled.div`
margin-left:10px;
span{
    font-weight:600;
    font-size:19px;
}
`
const ProductInfo = styled.div`
display:flex;
flex-direction:column;
`
const SalesInfo = styled.div`
display:flex;
align-items:center;
margin:5px 5px;
justify-content:space-between;
`
const Sales = styled.span`
font-weight:600;
font-size:18px;

`
const SalesValue = styled.span``
const BottomContainer = styled.div`
flex:4;
margin-right:3px;
margin-left:30px;
margin-bottom:30px;
border-radius:5px;
padding:10px 10px;
-webkit-box-shadow: 0px 2px 15px 2px #8C8C8C; 
box-shadow: 0px 2px 15px 2px #8C8C8C;
display:flex;
flex-direction:column;
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

const InputContainer = styled.div`
                margin:10px;
                display:flex;
                flex-direction:column;
               width: ${props => props.type === 'category' ? '30%' : '50%'}
                `

const LabelContainer = styled.label`
                color:gray;
                margin:5px 0px;
                `
const ProductTitleInput = styled.input`
                width:100%;
                height:35px;
                &:focus{
                    outline:none;
}
                `
const SelectContainer = styled.select`
               // width:40%;
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
const UserProfileImageContainer = styled.div`
display:flex;
align-items:center;
flex-direction:column;
`
const UserProfileImage = styled.div`
img{
    width:300px;
    height:300px;
    //border:1px solid gray;
    border-radius:5px;
    object-fit:cover;
}
`
const Row = styled.div`
display:flex;
justify-content:center;
width:100%;
`
const UploadContainer = styled.div``