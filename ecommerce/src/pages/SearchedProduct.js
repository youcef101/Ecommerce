import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { axiosInstance } from '../axios'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Product from '../components/Product'

function SearchedProduct() {
    const { productId } = useParams()
    const [product, setProduct] = useState('')

    useEffect(async () => {
        try {

            const res = await axiosInstance.get(`/product/${productId}`);
            const data = await res.data
            setProduct(data)

        } catch (err) {
            console.log(err)
        }
    }, [productId])
    return (
        <Container>
            <Header />
            <Announcements />
            <SearchProduct>
                <Product key={Math.random()} product={product} />
            </SearchProduct>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default SearchedProduct
const Container = styled.div``
const SearchProduct = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
margin-bottom:40px;
margin-top:20px;
`
