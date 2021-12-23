import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
function ProductList() {
    return (
        <Container>
            <Header />
            <Announcements />

            <Filter>
                <Title> Filter Products:</Title>

                <SelectContainer>
                    <select>
                        <option disabled selected>
                            Color
                        </option>
                        <option>White</option>
                        <option>Black</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Yellow</option>
                        <option>Green</option>
                    </select>
                </SelectContainer>
                <SelectContainer>
                    <select>
                        <option disabled selected>
                            Size
                        </option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                </SelectContainer>
                <SelectContainer>
                    <select>
                        <option selected>Newest</option>
                        <option>Price (asc)</option>
                        <option>Price (desc)</option>
                    </select>
                </SelectContainer>
                <SelectContainer>
                    <select>
                        <option selected>Latest</option>
                        <option>Date (asc)</option>
                        <option>Date (desc)</option>
                    </select>
                </SelectContainer>
            </Filter>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
const Container = styled.div``
const Filter = styled.div`
display:flex;
margin-bottom:25px;
margin-top:25px;
`
const SelectContainer = styled.div`
margin:10px;
select{
    cursor:pointer;
    width:90px;
    height:30px;
    font-size:17px;
    //text-align:center;
   :focus{
        outline:none;
    }
}
`
const Title = styled.div`
margin:10px;
font-size:20px;
font-weight:500;
`
