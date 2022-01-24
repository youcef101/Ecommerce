import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { axiosInstance } from '../axios'
import { getLatestProduct } from '../Redux/apiCalls'
import Product from './Product'
function Latest_products() {
    const dispatch = useDispatch()
    const latest_products = useSelector(state => state.product.latest_products)
    useEffect(() => {
        getLatestProduct(dispatch)
    }, [dispatch])
    //console.log(latest_products)
    return (
        <Container>
            {latest_products &&
                latest_products?.map(product =>
                    <Product product={product} key={Math.random()} />
                )}
        </Container>
    )
}

export default Latest_products
const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
margin-bottom:40px;
`