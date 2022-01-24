import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';//logout
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';//cart
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { axiosInstance } from '../axios';
import { FilterProducts } from '../Redux/searchSlice';
import { LogoutCall } from '../Redux/apiCalls';
import { Ipad, IpadMax, Medium, MediumMin, mobile, mobileMini } from '../responsive';
function Header() {
    const cart = useSelector(state => state.cart)

    const user = useSelector(state => state.user.current_user)
    const suggestions = useSelector(state => state.search.suggestions)
    const dispatch = useDispatch()
    const searchRef = useRef()
    const [search, setSearch] = useState('')
    const [all_products, setAllProducts] = useState([])
    const [matched_product, setMatchedProduct] = useState('')

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await axiosInstance.get(`/product/all/d`)
                const data = await res.data
                setAllProducts(data)
            } catch (err) {
                console.log(err)
            }
        }
        getAllProducts()
    }, [])

    const handleSearch = (e) => {
        let matches = []
        if (search.length > 0) {
            matches = all_products?.filter(product => {
                const regex = new RegExp(`${search}`, "gi")
                return product.title.match(regex)
            })
        }
        dispatch(FilterProducts(matches))
        setSearch(e.target.value)
    }
    const Logout = () => {
        LogoutCall(dispatch)
    }
    return (
        <Container>
            <HeaderContainer>
                <LeftContainer>
                    <LogoContainer>
                        <Link to='/'>
                            <span>E-SHOP</span>
                        </Link>
                    </LogoContainer>
                    <ProductsContainer>
                        <Link to="/all/products">
                            <span>PRODUCTS</span>
                        </Link>
                    </ProductsContainer>
                </LeftContainer>
                <MiddleContainer>

                    <SearchContainer>
                        <SearchInput ref={searchRef} type='text' value={search} onChange={handleSearch} placeholder='search products...' />
                        <SearchIc>
                            <SearchIcon fontSize="small" />
                        </SearchIc>

                    </SearchContainer>
                    {search.length !== 0 ?
                        <MatchedProductNameContainer  >
                            {
                                suggestions?.map(product =>
                                    <Link key={Math.random()} to={`/${product._id}/search`}>
                                        <Suggestion onClick={() => setMatchedProduct(product)}>{product.title}</Suggestion>
                                    </Link>
                                )}
                        </MatchedProductNameContainer>
                        : null}
                </MiddleContainer>
                <RightContainer>


                    {!user ? <>
                        <RegisterBtn>
                            <Link to='/register'>
                                <span>REGISTER</span>
                            </Link>
                        </RegisterBtn>
                        <LoginBtn>
                            <Link to='/login'>
                                <span>LOGIN</span>
                            </Link>
                        </LoginBtn>
                    </> :
                        <LogoutBtn onClick={Logout}>
                            <span>LOGOUT</span>
                        </LogoutBtn>
                    }

                    <CartBtn>
                        <Link to='/cart'>
                            {cart.products.length === 0 ? <>
                                <Badge badgeContent={0} color="primary">
                                    <ShoppingCartOutlinedIcon fontSize="small" />
                                </Badge>
                            </> :
                                <Badge badgeContent={cart.quantity} color="primary">
                                    <ShoppingCartOutlinedIcon fontSize="small" />
                                </Badge>
                            }
                        </Link>
                    </CartBtn>

                </RightContainer>


            </HeaderContainer>
        </Container>
    )
}

export default Header
const Container = styled.div`
height:60px;
background-color:white;
display:flex;
align-items:center;

`
const HeaderContainer = styled.div`
flex:5;
padding:0 10px;
display:flex;
align-items:center;
justify-content:space-between;
z-index:100;

`
const LogoContainer = styled.div`
margin:0px 10px;
a{
    text-decoration:none;
    color:black
}
cursor:pointer;
span{
   
    font-weight:700;
    font-size:20px;
    ${mobile({ fontSize: '18px', fontWeight: '500' })};
    ${Medium({ fontSize: '18px', fontWeight: '700' })}
}
`
const MiddleContainer = styled.div`
flex:1;
${mobileMini({ display: 'none' })};
${mobile({ display: 'none' })};
`
const SearchContainer = styled.div`
display:flex;
align-items:center;
border:1px solid #000;
height:30px;
padding-left:10px;
padding-right:10px;
position:relative;

`
const SearchInput = styled.input`
width:100%;
display:flex;
align-items:center;
border:none;
:focus{
    outline:none;
}
`
const SearchIc = styled.div`
display:flex;
align-items:center;
cursor:pointer;
`
const RightContainer = styled.div`
flex:1;
display:flex;
justify-content:flex-end;

`
const MenuItem = styled.div`
display:flex;
justify-content:space-between;
`

const RegisterBtn = styled.div`
margin:0px 5px;
cursor:pointer;
a{
    text-decoration:none;
    color:black;
   font-size:13px;
}
`
const LoginBtn = styled(RegisterBtn)``
const LogoutBtn = styled(RegisterBtn)``
const CartBtn = styled.div`
margin:0px 5px;
cursor:pointer;
a{
    color:black;
}
`
const MatchedProductNameContainer = styled.div`
background-color:white;
width:30%;
border:1px solid gray;
padding-left:7px;
padding-right:7px;
position:absolute;
a{text-decoration:none;
color:black
}
`
const Suggestion = styled.div`
cursor:pointer;
&:hover{
    background-color:#e6e6e6;
}
`
const ProductsContainer = styled.div`
${mobile({ display: 'none' })};
${Medium({ display: 'none' })};
${MediumMin({ marginRight: '10px' })}
margin:0px 10px;
cursor:pointer;
a{
    text-decoration:none;
    color:black;
    span{

    }
}

`
const LeftContainer = styled.div`
flex:1;
display:flex;
align-items:center;
${Ipad({ width: '25%' })};
${IpadMax({ width: '25%' })};

`

