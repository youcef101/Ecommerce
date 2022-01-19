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
function Header() {
    const quantity = useSelector(state => state.cart.quantity)
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
    // console.log(matched_product)
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
                    <MenuItem>
                        {/*  <SelectContainer>
                            <Lang>EN</Lang>
                            <Arrow>
                                <ArrowDropDownIcon fontSize="small" />
                            </Arrow>
                        </SelectContainer> */}
                        {!user ? <>
                            <RegisterBtn>
                                <span>REGISTER</span>
                            </RegisterBtn>
                            <LoginBtn>
                                <span>LOGIN</span>
                            </LoginBtn>
                        </> :
                            <LogoutBtn>
                                <span>LOGOUT</span>
                            </LogoutBtn>
                        }

                        <CartBtn>
                            <Link to='/cart'>
                                <Badge badgeContent={quantity} color="primary">

                                    <ShoppingCartOutlinedIcon fontSize="small" />

                                </Badge>
                            </Link>
                        </CartBtn>
                    </MenuItem>
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
width:100%;
padding:0 10px;
display:flex;
align-items:center;
justify-content:space-between;
z-index:100;
`
const LogoContainer = styled.div`
a{text-decoration:none;color:black}
cursor:pointer;
width:40%;
span{
    font-weight:700;
    font-size:20px;
}
`
const MiddleContainer = styled.div`
width:30%;

`
const SearchContainer = styled.div`
width:100%;
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
width:20%;
`
const MenuItem = styled.div`
display:flex;
justify-content:space-evenly;
`
const SelectContainer = styled.div`
display:flex;
align-items:center;
cursor:pointer;
`
const Lang = styled.div``
const Arrow = styled.div`
display:flex;
align-items:center;
`
const RegisterBtn = styled.div`
cursor:pointer;
`
const LoginBtn = styled(RegisterBtn)``
const LogoutBtn = styled(RegisterBtn)``
const CartBtn = styled.div`
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
width:40%;
cursor:pointer;
a{
    text-decoration:none;
    color:black;
    span{

    }
}

`
const LeftContainer = styled.div`
width:30%;
display:flex;
align-items:center;
`

