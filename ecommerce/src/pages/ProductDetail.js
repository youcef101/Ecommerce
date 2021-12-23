import React, { useState } from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';

function ProductDetail() {
    const [quantity, setQuantity] = useState(0)
    const Increment = () => {
        setQuantity(quantity + 1)
    }
    const Decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }

    }
    return (
        <Container>
            <Header />
            <Announcements />
            <DetailContainer>
                <ProductImg>
                    <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt='' />
                </ProductImg>
                <ProductInfoContainer>
                    <ProductTitle>
                        Denim Jumpsuit
                    </ProductTitle>
                    <ProductDesc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </ProductDesc>
                    <ProductPrice>$ 20</ProductPrice>
                    <FilterContainer>
                        <FilterColorContainer>
                            <Color>Color</Color>
                            <FilterColor color="black" />
                            <FilterColor color="red" />
                            <FilterColor color="blue" />
                            <FilterColor color="purple" />
                        </FilterColorContainer>
                        <FilterSizeContainer>
                            <Size>Size</Size>
                            <SelectContainer>
                                <select>
                                    <option disabled selected>size</option>
                                    <option>XS</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                            </SelectContainer>
                        </FilterSizeContainer>
                    </FilterContainer>

                    <AddToCartContainer>
                        <QuantityContainer>
                            <DecrementIc onClick={Decrement}>
                                <RemoveOutlinedIcon fontSize="large" />
                            </DecrementIc>

                            <QtyInput min={0} value={quantity} readOnly />
                            <IncrementIc onClick={Increment}>
                                <AddOutlinedIcon fontSize='large' />
                            </IncrementIc>

                        </QuantityContainer>
                        <AddBTN>
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