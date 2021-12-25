import React, { useState } from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';

function Cart() {
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
            <CartContainer>
                <Title>YOUR BAG</Title>
                <TopContainer>
                    <Shopping>CONTINUE SHOPPING</Shopping>
                    <Action>
                        <Bag><a href="#">SHOPPING BAG (2)</a></Bag>
                        <Wishlist><a href="#">YOUR WISHLIST (0)</a></Wishlist>
                    </Action>
                    <Checkout>CHECKOUT NOW</Checkout>
                </TopContainer>
                <Middle>
                    <CartProduct>
                        <MiddleContainer>

                            <LeftContainer>
                                <ProductImg>
                                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt='' />
                                </ProductImg>
                                <ProductInfo>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <Color>
                                        <b>Color:</b> <ProductColor color="black" />
                                    </Color>
                                    <Size><b>Size:</b> 37.5</Size>
                                </ProductInfo>
                            </LeftContainer>
                            <RightContainer>
                                <QuantityContainer>
                                    <DecrementIc onClick={Decrement}>
                                        <RemoveOutlinedIcon fontSize="small" />
                                    </DecrementIc>

                                    <QtyInput min={0} value={quantity} readOnly />
                                    <IncrementIc onClick={Increment}>
                                        <AddOutlinedIcon fontSize='small' />
                                    </IncrementIc>

                                </QuantityContainer>
                                <Price>
                                    $ 20
                                </Price>

                            </RightContainer>
                        </MiddleContainer>
                        <DividerContainer>
                            <Divider />
                        </DividerContainer>

                        <MiddleContainer>
                            <LeftContainer>
                                <ProductImg>
                                    <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt='' />
                                </ProductImg>
                                <ProductInfo>
                                    <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                                    <Color>
                                        <b>Color:</b> <ProductColor color="gray" />
                                    </Color>
                                    <Size><b>Size:</b> M</Size>
                                </ProductInfo>
                            </LeftContainer>
                            <RightContainer>
                                <QuantityContainer>
                                    <DecrementIc onClick={Decrement}>
                                        <RemoveOutlinedIcon fontSize="small" />
                                    </DecrementIc>

                                    <QtyInput min={0} value={quantity} readOnly />
                                    <IncrementIc onClick={Increment}>
                                        <AddOutlinedIcon fontSize='small' />
                                    </IncrementIc>

                                </QuantityContainer>
                                <Price>
                                    $ 20
                                </Price>

                            </RightContainer>
                        </MiddleContainer>
                        <DividerContainer>
                            <Divider />
                        </DividerContainer>
                        <MiddleContainer>
                            <LeftContainer>
                                <ProductImg>
                                    <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt='' />
                                </ProductImg>
                                <ProductInfo>
                                    <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                                    <Color>
                                        <b>Color:</b> <ProductColor color="gray" />
                                    </Color>
                                    <Size><b>Size:</b> M</Size>
                                </ProductInfo>
                            </LeftContainer>
                            <RightContainer>
                                <QuantityContainer>
                                    <DecrementIc onClick={Decrement}>
                                        <RemoveOutlinedIcon fontSize="small" />
                                    </DecrementIc>

                                    <QtyInput min={0} value={quantity} readOnly />
                                    <IncrementIc onClick={Increment}>
                                        <AddOutlinedIcon fontSize='small' />
                                    </IncrementIc>

                                </QuantityContainer>
                                <Price>
                                    $ 20
                                </Price>

                            </RightContainer>
                        </MiddleContainer>
                    </CartProduct>
                    <OrderCheckout>
                        <Summary>
                            <SumTitle>ORDER SUMMARY</SumTitle>
                            <SubTotal><span>SubTotal</span><span>$ 20</span></SubTotal>
                            <Estimated><span>Estimated Shipping</span><span>$ 5.90</span></Estimated>
                            <Shipping><span>Shipping Discount</span><span>-$ 5.90</span></Shipping>
                            <Total><span>Total</span><span>$ 80</span></Total>
                            <CheckoutBtn>
                                CHECKOUT NOW
                            </CheckoutBtn>
                        </Summary>
                    </OrderCheckout>
                </Middle>
            </CartContainer>
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default Cart
const Container = styled.div``
const CartContainer = styled.div`
width:100%;
`
const Title = styled.div`
margin-top:20px;
text-align:center;
font-size:25px;
color:#4d4d4d;
`
const TopContainer = styled.div`
margin:20px;
margin-top:50px;
display:flex;
justify-content:space-between;
`
const Shopping = styled.div`
background-color:#f2f2f2;
height:30px;
border:1px solid gray;
cursor:pointer;
display:flex;
align-items:center;
padding:10px;
justify-content:center;
&:hover{
    background-color:#d9d9d9;
}
`
const Action = styled.div`
display:flex;
`
const Bag = styled.div`
margin:10px;
a{
    color:#000;
    cursor:pointer;
   
}
`
const Wishlist = styled(Bag)``
const Checkout = styled(Shopping)`
background-color:#000;
color:white;
&:hover{
    background-color:#262626;
}
`
const MiddleContainer = styled.div`
display:flex;
justify-content:space-between;
width:95%;
`
const LeftContainer = styled.div`
display:flex;
align-items:center;
width:45%;
`
const ProductImg = styled.div`
width:50%;
img{
width:200px;

cursor:pointer;
object-fit:fit;
}
`
const ProductInfo = styled.div`
width:50%;
`
const ProductName = styled.div``
const Color = styled.div`
display:flex;
b{
    margin-right:5px;
}
`
const Size = styled.div`
display:flex;
b{
    margin-right:5px;
}
`
const RightContainer = styled.div`
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
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
width:20px;
height:20px;
border-radius:6px;
text-align:center;
font-size:16px;
border:none;
&:focus{
    outline:none;
}
`
const Price = styled.div``
const ProductColor = styled.div`
margin: 5px;
height: 20px;
width: 20px;
border-radius: 50%;
background-color:${props => props.color};
`
const DividerContainer = styled.div`
display:flex;
align-items:center;
//justify-content:center;
//width:100%;
`
const Divider = styled.div`
border:0.5px solid gray;
width:95%;
`
const Middle = styled.div`
display:flex;
width:100%;
`
const CartProduct = styled.div`
flex:1;
width:70%;
`
const OrderCheckout = styled.div`
width:25%;
margin:10px;
`
const Summary = styled.div`
width:100%;
border:1px solid gray;
border-radius:4px;
display:flex;
flex-direction:column;

`
const SumTitle = styled.div`
text-align:center;
color:gray;
font-size:25px;
margin-bottom:20px;
margin-top:15px;
`
const SubTotal = styled.div`
margin-bottom:25px;
span{
    font-size:17px
}
margin-left:5px;
margin-right:5px;
display:flex;
justify-content:space-between;
color:#4d4d4d;
`
const Estimated = styled(SubTotal)``
const Total = styled(SubTotal)``
const Shipping = styled(SubTotal)``
const CheckoutBtn = styled.div`
background-color:#f2f2f2;
width:50%;
margin:7px;
height:30px;
border:1px solid gray;
cursor:pointer;
display:flex;
align-items:center;
padding:10px;
justify-content:center;
&:hover{
    background-color:#d9d9d9;
}
`