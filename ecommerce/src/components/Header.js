import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';//logout
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';//cart
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Container>
            <HeaderContainer>

                <LogoContainer>
                    <Link to='/'>
                        <span>E-SHOP</span>
                    </Link>
                </LogoContainer>

                <MiddleContainer>
                    <SearchContainer>
                        <SearchInput type='text' placeholder='search...' />
                        <SearchIc>
                            <SearchIcon fontSize="small" />
                        </SearchIc>

                    </SearchContainer>
                </MiddleContainer>
                <RightContainer>
                    <MenuItem>
                        <SelectContainer>
                            <Lang>EN</Lang>
                            <Arrow>
                                <ArrowDropDownIcon fontSize="small" />
                            </Arrow>
                        </SelectContainer>
                        <RegisterBtn>
                            <span>REGISTER</span>
                        </RegisterBtn>
                        <LoginBtn>
                            <span>LOGIN</span>
                        </LoginBtn>
                        <CartBtn>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlinedIcon fontSize="small" />
                            </Badge>

                        </CartBtn>
                    </MenuItem>
                </RightContainer>


            </HeaderContainer>
        </Container>
    )
}

export default Header
const Container = styled.div`
height:50px;
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
`
const LogoContainer = styled.div`
a{text-decoration:none;color:black}
cursor:pointer;
width:20%;
span{
    font-weight:700;
    font-size:20px;
}
`
const MiddleContainer = styled.div`
width:20%;
`
const SearchContainer = styled.div`
width:100%;
display:flex;
align-items:center;
border:1px solid #000;
height:30px;
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
const CartBtn = styled.div`
cursor:pointer;
`

