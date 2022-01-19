import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest, axiosInstance } from '../axios'
import { useHistory } from 'react-router-dom'
import { DeleteCart } from '../Redux/cartSlice'

function Cart() {
    const STRIPE_PUBLIC_KEY = 'pk_test_51KBMyHFWL49iTtC4ICYYoBkDwQsdALHlfw9r3Uz2FSJk4ekxAgZdaIFnuaXW5EB60jDcxSUmTYVInMNxRvNtysS400X91avrQ3'
    const cart = useSelector(state => state.cart)
    const history = useHistory()
    const [quantity, setQuantity] = useState(0)
    const [stripe_token, setStripeToken] = useState(null)
    const dispatch = useDispatch()

    const Increment = () => {
        setQuantity(quantity + 1)
    }
    const Decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }

    }

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axiosInstance.post(`/checkout/payment`, {
                    tokenId: stripe_token?.id,
                    amount: cart.total * 100

                })
                history.push('/success', { data: res.data })
            } catch { }
        }
        stripe_token && makeRequest()
    }, [stripe_token, cart.total, history])

    const handleQuantity = (e) => {
        setQuantity({
            ...quantity,
            [e.target.name]: e.target.value
        })
    }

    console.log(stripe_token)
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
                        {cart &&
                            cart.products.map(product =>
                                <React.Fragment key={Math.random()}>
                                    <MiddleContainer >
                                        <LeftContainer>
                                            <ProductImg >
                                                <img src={product.productImage} alt='' />
                                            </ProductImg>
                                            <ProductInfo>
                                                <ProductName><b>Product:</b> {product.title}</ProductName>
                                                <Color>
                                                    <b>Color:</b> <ProductColor color={product.color} />
                                                </Color>
                                                <Size><b>Size:</b> {product.size}</Size>
                                            </ProductInfo>
                                        </LeftContainer>
                                        <RightContainer>
                                            <QuantityContainer>
                                                <DecrementIc onClick={Decrement}>
                                                    <RemoveOutlinedIcon fontSize="small" />
                                                </DecrementIc>

                                                <QtyInput name='quantity' min={0} value={product.quantity} onChange={handleQuantity} />
                                                <IncrementIc onClick={Increment}>
                                                    <AddOutlinedIcon fontSize='small' />
                                                </IncrementIc>

                                            </QuantityContainer>
                                            <Price>
                                                $ {product.price * product.quantity}
                                            </Price>

                                        </RightContainer>
                                    </MiddleContainer>
                                    <DividerContainer>
                                        <Divider />
                                    </DividerContainer>
                                </React.Fragment>
                            )}

                    </CartProduct>
                    <OrderCheckout>
                        <Summary>
                            <SumTitle>ORDER SUMMARY</SumTitle>
                            <SubTotal><span>SubTotal</span><span>$ {cart.total}</span></SubTotal>
                            <Estimated><span>Estimated Shipping</span><span>$ 5.90</span></Estimated>
                            <Shipping><span>Shipping Discount</span><span>-$ 5.90</span></Shipping>
                            <Total><span>Total</span><span>$ {cart.total}</span></Total>
                            <StripeCheckout
                                name='E-SHOP'
                                /* image='' */
                                billingAddress
                                shippingAddress
                                description={`Your total is ${cart.total}`}
                                amount={cart.total * 100}
                                token={onToken}
                                stripeKey={STRIPE_PUBLIC_KEY}
                            >
                                <CheckoutBtn>
                                    CHECKOUT NOW
                                </CheckoutBtn>
                            </StripeCheckout>
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