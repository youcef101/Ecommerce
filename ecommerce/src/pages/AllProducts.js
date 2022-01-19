import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { axiosInstance } from '../axios'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Product from '../components/Product'
import { FilterStart } from '../Redux/searchSlice'



function AllProducts() {
    const dispatch = useDispatch()
    const all_products = useSelector(state => state.search.suggestions)
    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await axiosInstance.get(`/product/all/d`)
                const data = await res.data
                dispatch(FilterStart(data))
            } catch (err) {
                console.log(err)
            }
        }
        getAllProducts()
    }, [])

    return (
        <Container>
            <Header />
            <Announcements />
            <SearchedProducts >

                {all_products &&
                    all_products?.map(product =>
                        <Product key={Math.random()} product={product} />
                    )}
            </SearchedProducts>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default AllProducts
const Container = styled.div`

`
const SearchedProducts = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
margin-bottom:40px;
margin-top:20px;
`
