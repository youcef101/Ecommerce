import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { axiosInstance } from '../axios'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import { getRandomProduct } from '../Redux/apiCalls'
function Random_Products() {
    const dispatch = useDispatch()
    const random_products = useSelector(state => state.product.picked_products)
    useEffect(() => {
        getRandomProduct(dispatch)
    }, [dispatch])
    //console.log(random_products)
    return (
        <Container>
            {random_products &&
                random_products?.map(product =>
                    <Product product={product} key={Math.random()} />
                )}
        </Container>
    )
}

export default Random_Products
const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
margin-bottom:40px;
`