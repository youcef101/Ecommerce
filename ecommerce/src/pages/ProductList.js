import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
function ProductList() {
    const { category } = useParams()
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState('newest')
    const handleFilters = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Container>
            <Announcements />
            <Header />


            <Filter>
                <Title> Filter Products:</Title>

                <SelectContainer >
                    <select name="color" onChange={handleFilters}>
                        <option disabled >
                            Color
                        </option>
                        <option>white</option>
                        <option>black</option>
                        <option>red</option>
                        <option>blue</option>
                        <option>yellow</option>
                        <option>green</option>
                    </select>
                </SelectContainer>
                <SelectContainer>
                    <select name="size" onChange={handleFilters}>
                        <option disabled >
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
                    <select onChange={(e) => setSort(e.target.value)}>
                        <option value='newest'>Newest</option>
                        <option value='asc'>Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                    </select>
                </SelectContainer>

            </Filter>
            <Products cat={category} filters={filters} sort={sort} />
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
