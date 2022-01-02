import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import axiosInstance from '../axios'
import Product from './Product'
function Random_Products() {
    const [random_products, setRandomProducts] = useState('')
    useEffect(async () => {
        try {
            const res = await axiosInstance.get(`/product/random/all/d`)
            const data = await res.data
            setRandomProducts(data)
        } catch (err) {
            console.log(err)
        }
    }, [])
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