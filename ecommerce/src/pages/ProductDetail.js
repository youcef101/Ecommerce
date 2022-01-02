import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import { useParams } from 'react-router-dom'
import axiosInstance from '../axios'
import { useDispatch } from 'react-redux'
import { AddCart } from '../Redux/cartSlice'

function ProductDetail() {
    const { productId } = useParams()
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const [current_product, setCurrentProduct] = useState('')
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const quantityRef = useRef()

    const Increment = (e) => {
        e.preventDefault()
        setQuantity(quantity + 1)
    }
    const Decrement = (e) => {
        e.preventDefault()
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }

    }

    const handleQuantity = (e) => {
        setQuantity({
            ...quantity,
            [e.target.name]: e.target.value
        })
    }

    const AddToCart = async () => {
        dispatch(AddCart({
            ...current_product,
            quantity,
            color,
            size
        }))

    }

    useEffect(async () => {
        try {
            const res = await axiosInstance.get(`/product/${productId}`)
            const data = await res.data
            setCurrentProduct(data)
        } catch (err) {
            console.log(err)
        }
    }, [productId])

    const handleSize = (e) => {
        //e.preventDefault()
        setSize(e.target.value)
    }

    //console.log(size)
    return (
        <Container>
            <Header />
            <Announcements />
            <DetailContainer>
                <ProductImg>
                    <img src={current_product.productImage} alt='' />
                </ProductImg>
                <ProductInfoContainer>
                    <ProductTitle>
                        {current_product.title}
                    </ProductTitle>
                    <ProductDesc>
                        {current_product.desc}
                    </ProductDesc>
                    <ProductPrice>$ {current_product.price}</ProductPrice>
                    <FilterContainer>
                        <FilterColorContainer>
                            <Color>Color</Color>
                            {current_product &&
                                current_product.color?.map(color =>
                                    <FilterColor key={Math.random()} onClick={() => setColor(color)} color={color} />

                                )}
                        </FilterColorContainer>
                        <FilterSizeContainer>
                            <Size>Size</Size>
                            <SelectContainer>
                                <select onChange={handleSize}>
                                    {
                                        current_product.size?.map((size) =>
                                            <option key={size}>{size}</option>

                                        )}
                                </select>
                            </SelectContainer>
                        </FilterSizeContainer>
                    </FilterContainer>

                    <AddToCartContainer>
                        <QuantityContainer>
                            <DecrementIc onClick={Decrement}>
                                <RemoveOutlinedIcon fontSize="large" />
                            </DecrementIc>

                            <QtyInput ref={quantityRef} name='quantity' min={0} value={quantity} onChange={handleQuantity} readOnly />
                            <IncrementIc onClick={Increment}>
                                <AddOutlinedIcon fontSize='large' />
                            </IncrementIc>

                        </QuantityContainer>
                        <AddBTN onClick={AddToCart}>
                            ADD TO CART
                        </AddBTN>
                    </AddToCartContainer>
                </ProductInfoContainer>

            </DetailContainer>

            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductDetail
const Container = styled.div``
const DetailContainer = styled.div`
margin:15px;
display:flex;
//align-items:center;
//justify-content:center;
`
const ProductImg = styled.div`
margin:15px;
img{
    height:600px;
    width:40vw;
}
`
const ProductInfoContainer = styled.div`
margin:10px;
display:flex;
flex-direction:column;
`
const ProductTitle = styled.div`
font-size:25px;
margin-bottom:20px;
`
const ProductDesc = styled.div`
margin-bottom:20px;
font-size:18px;
max-width:40vw;
text-align:justify;
`
const ProductPrice = styled.div`
font-size:25px;
`
const FilterContainer = styled.div`
display:flex;
`
const FilterColorContainer = styled.div`
display:flex;
align-items:center;
margin:10px;
`
const Color = styled.div`
font-size:18px;
margin-right:10px;
`
const FilterColor = styled.div`
cursor:pointer;
margin:5px;
height:20px;
width:20px;
border-radius:50%;
background-color:${props => props.color};
`
const FilterSizeContainer = styled.div`
display:flex;
align-items:center;
margin:10px;
`
const Size = styled(Color)``
const SelectContainer = styled.div`
margin-left:15px;
select{
    width:80px;
    font-size:16px;
:focus{
outline:none;
}
}
`
const AddToCartContainer = styled.div`
display:flex;
`
const QuantityContainer = styled.div`
display:flex;
margin:10px;
`
const IncrementIc = styled.div`
cursor:pointer;
`
const DecrementIc = styled(IncrementIc)``
const QtyInput = styled.input`
width:30px;
height:30px;
border-radius:6px;
text-align:center;
font-size:16px;
border:1px solid black;
&:focus{
    outline:none;
}
`
const AddBTN = styled.div`
margin:10px;
cursor:pointer;
height:25px;
padding:5px;
background-color:#cccccc;
border:1px solid #000;
display:flex;
align-items:center;
justify-content:center;
border-radius:4px;
&:hover{
    background-color:#e6e6e6;
}
`