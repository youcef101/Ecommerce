import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { axiosInstance } from '../axios'
import Product from './Product'
function Latest_products() {
    const [latest_products, setLatestProducts] = useState([])
    useEffect(async () => {
        try {
            const res = await axiosInstance.get(`/product/get/latest/?new=true`)
            const data = await res.data
            setLatestProducts(data)
        } catch (err) {
            console.log(err)
        }
    }, [])
    //console.log(random_products)
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