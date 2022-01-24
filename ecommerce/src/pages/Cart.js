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
import { Link, useHistory } from 'react-router-dom'
import { DeleteCart } from '../Redux/cartSlice'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { DeleteCartProduct } from '../Redux/apiCalls'
import { IpadMax, IpadMini, MediumMax, MediumMin, mobile, mobileMax, Surface } from '../responsive'

function Cart() {
    const PF = 'https://e-shop-mern-clone.herokuapp.com/public/uploads/'
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
                const res = await axiosInstance.post(`/checkout/payment/d`, {
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

    const deleteCartItem = (id) => {
        DeleteCartProduct(id, dispatch)
        // console.log(cart.products.filter(product => product._id != id))
    }
    //console.log(cart.products)
    //console.log(cart.quantity)
    //console.log(stripe_token)
    return (
        <Container>
            <Announcements />
            <Header />

            <CartContainer>
                <Title>YOUR BAG</Title>
                <TopContainer>
                    <Link to="/all/products"><Shopping>CONTINUE SHOPPING</Shopping></Link>
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
                                                <img src={PF + product.productImage} alt='' />
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
                                                <DecrementIc style={{ display: 'none' }} onClick={(Decrement)}>
                                                    <RemoveOutlinedIcon fontSize="small" />
                                                </DecrementIc>

                                                <QtyInput name='quantity' min={0} value={product.quantity} onChange={handleQuantity} />
                                                <IncrementIc style={{ display: 'none' }} onClick={Increment}>
                                                    <AddOutlinedIcon fontSize='small' />
                                                </IncrementIc>

                                            </QuantityContainer>
                                            <Price>
                                                $ {product.price * product.quantity}
                                            </Price>
                                            <DeleteItem style={{ margin: '10px 0px' }} onClick={() => deleteCartItem(product._id)}>
                                                <DeleteForeverOutlinedIcon fontSize='small' style={{ color: '#800000', cursor: 'pointer' }} />
                                            </DeleteItem>

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
                            <SubTotal><span>SubTotal</span><span style={{ whiteSpace: 'nowrap' }}>$ {cart.total}</span></SubTotal>
                            <Estimated><span>Estimated Shipping</span><span style={{ whiteSpace: 'nowrap' }}>$ 5.90</span></Estimated>
                            <Shipping><span>Shipping Discount</span><span style={{ whiteSpace: 'nowrap' }}>-$ 5.90</span></Shipping>
                            <Total><span>Total</span><span style={{ whiteSpace: 'nowrap' }}>$ {cart.total}</span></Total>
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
const Container = styled.div`
overflow:hidden
`
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
//align-items:center;
@media only screen and (min-width:644px){
    align-items:center;
}
@media only screen and (min-width:790px){
    align-items:center;
}
@media only screen and (min-width:993px){
    align-items:center;
}
@media only screen and (min-width:1200px){
    align-items:center;
}
a{
    text-decoration:none;
    color:black;
}
${mobile({ flexDirection: 'column' })}
${mobileMax({ flexDirection: 'column' })}
${MediumMin({ flexDirection: 'column' })}
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
font-size:15px;
&:hover{
    background-color:#d9d9d9;
}

`
const Action = styled.div`
display:flex;
${mobileMax({ justifyContent: 'space-between' })}
${MediumMin({ justifyContent: 'space-between' })}
`
const Bag = styled.div`
margin:10px;
a{
    color:#000;
    font-size:14px;
    cursor:pointer;
    @media only screen and (min-width:683px){
    display:none;
}
@media only screen and (min-width:1000px){
    display:flex;
}
}
  
}
`
const Wishlist = styled(Bag)``
const Checkout = styled(Shopping)`
background-color:#000;
color:white;
&:hover{
    background-color:#262626;
}
${mobile({ display: 'none' })}
${mobileMax({ display: 'none' })}
${MediumMin({ display: 'none' })}
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
${mobile({ width: '80%' })}
${mobileMax({ width: '80%' })}
${MediumMin({ width: '80%' })}
`
const ProductImg = styled.div`
width:50%;
img{
width:100%;
height:200px;
object-fit:contain;
${mobile({ height: '200px' })}
${mobileMax({ height: '250px' })}
${MediumMin({ height: '300px' })}
}
`
const ProductInfo = styled.div`
width:50%;
`
const ProductName = styled.div`
width:'100%';
${mobile({ width: '100%' })}
${mobileMax({ width: '100%' })}
${MediumMin({ width: '100%' })}
`
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
${mobile({ flexDirection: 'column' })}
${mobileMax({ flexDirection: 'column' })}
${MediumMin({ flexDirection: 'column' })}
`
const CartProduct = styled.div`
flex:1;
width:70%;
${mobile({ width: '100%' })}
${mobileMax({ width: '100%' })}
${MediumMin({ width: '100%' })}
`
const OrderCheckout = styled.div`
width:25%;
margin:10px;
${mobile({ width: '95%' })}
${mobileMax({ width: '95%' })}
${MediumMin({ width: '95%' })}
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
${MediumMax({ fontSize: '20px' })}
`
const SubTotal = styled.div`
margin-bottom:25px;
span{
    font-size:17px;
    ${MediumMax({ fontSize: '13px' })}
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
font-size:15px;
&:hover{
    background-color:#d9d9d9;
};
@media only screen and (max-width:1112px){
    width:80%;
    font-size:13px
};
${MediumMax({ width: '80%', fontSize: '13px' })}
${IpadMini({ width: '80%', fontSize: '13px' })}
${IpadMax({ width: '80%', fontSize: '13px' })}
`
const DeleteItem = styled.div``