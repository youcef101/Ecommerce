import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import PublishIcon from '@material-ui/icons/Publish';
import Chart from '../components/Chart'
import { product_data } from '../dummyData.js'

function SingleProduct({ products_data }) {
    const [current_product, setCurrentProduct] = useState({})
    const { id } = useParams()
    //console.log(id)
    useEffect(() => {
        const res = products_data?.find(item => item.id == id)
        setCurrentProduct(res)
    }, [id])
    console.log(current_product)
    return (
        <Container>
            <TopContainer>
                <TitleContainer>Product</TitleContainer>
                <CreateNewUserBtn><Link to='/AddProduct'>Create</Link> </CreateNewUserBtn>
            </TopContainer>
            <MiddleContainer>
                <ChartContainer>
                    <Chart data={product_data} title='Sales Performence' grid dataKey='Sales' />
                </ChartContainer>
                <ProductInfoContainer>
                    {current_product && <>
                        <ProductImageContainer>
                            <ProductImage>
                                <img src={current_product?.productImage} alt='' />
                            </ProductImage>
                            <ProductTitle>
                                <span>{current_product?.title}</span>
                            </ProductTitle>
                        </ProductImageContainer>
                        <ProductInfo>
                            <SalesInfo>
                                <Sales>Sales</Sales>
                                <SalesValue>$ 4523</SalesValue>
                            </SalesInfo>
                            <SalesInfo>
                                <Sales>Active</Sales>
                                <SalesValue>Yes</SalesValue>
                            </SalesInfo>
                            <SalesInfo>
                                <Sales>inStock</Sales>
                                <SalesValue>No</SalesValue>
                            </SalesInfo>
                        </ProductInfo>
                    </>}
                </ProductInfoContainer>
            </MiddleContainer>
            <BottomContainer>
                <Bottom>
                    <Left>
                        <InputContainer>
                            <LabelContainer>Product Name</LabelContainer>
                            <ProductNameInput type='text' />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>In Stock</LabelContainer>
                            <SelectContainer>
                                <OptionContainer>Yes</OptionContainer>
                                <OptionContainer>No</OptionContainer>
                            </SelectContainer>
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>Active</LabelContainer>
                            <SelectContainer>
                                <OptionContainer>Yes</OptionContainer>
                                <OptionContainer>No</OptionContainer>
                            </SelectContainer>
                        </InputContainer>
                    </Left>
                    <Right>
                        <UserProfileImageContainer>
                            <UserProfileImage>
                                <img src='/images/product/product.png' alt='' />
                            </UserProfileImage>
                            <InputContainer >
                                <LabelContainer htmlFor='file' style={{
                                    cursor: 'pointer',
                                    width: '100px', backgroundColor: 'teal', color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderRadius: '5px'
                                }}>
                                    <PublishIcon fontSize='small' />Upload</LabelContainer>
                                <input type='file' id='file' style={{ display: 'none' }} />
                            </InputContainer>

                        </UserProfileImageContainer>
                    </Right>
                </Bottom>
                <EditContainer>
                    <EditBtn type='submit'>Edit</EditBtn>
                </EditContainer>
            </BottomContainer>
        </Container>
    )
}

export default SingleProduct
const Container = styled.div`
flex:4;
margin:15px;
border-radius:5px;
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
const Bottom = styled.div`
display:flex;
flex:4;
`
const Left = styled.div`
flex:2;
`
const Right = styled.div`
flex:2;
`
const InputContainer = styled.div`
display:flex;
flex-direction:column;
`
const LabelContainer = styled.label`
color:gray;
margin:10px 0px;
`
const ProductNameInput = styled.input`
border:none;
border-bottom:1px solid gray;
//height:35px;
width:80%;
&:focus{
    outline:none;
   
}
`
const SelectContainer = styled.select`
width:60%;
&:focus{
    outline:none;
}
`
const OptionContainer = styled.option``
const UserProfileImageContainer = styled.div`
display:flex;
align-items:center;
flex-direction:column;
`
const UserProfileImage = styled.div`
img{
    width:200px;
    height:200px;
    //border:1px solid gray;
    border-radius:5px;
    object-fit:cover;
}
`

const EditContainer = styled.div`
display:flex;
//justify-content:flex-end;

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
width:200px;

&:hover{
    background-color:#00cccc;
}`