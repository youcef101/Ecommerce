import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axiosInstance from '../axios.js'
function Products({ filters, cat, sort }) {
    const [category_products, setCategoryProducts] = useState([])
    const [filters_products, setFiltersProducts] = useState([])
    useEffect(async () => {
        try {
            const res = await axiosInstance.get(`/product/${cat}/all`)
            const data = await res.data
            setCategoryProducts(data)
        } catch (err) {
            console.log(err)
        }
    }, [cat])

    useEffect(() => {
        cat && setFiltersProducts(
            category_products.filter((item) =>
                Object.entries(filters).every(([key, value]) => {
                    return item[key].includes(value)
                })
            )
        )

    }, [category_products, filters])

    useEffect(() => {
        if (sort === 'newest') {
            setFiltersProducts(
                filters_products.sort((a, b) => a.createdAt - b.createdAt)
            )
        } else if (sort === 'asc') {
            setFiltersProducts(
                filters_products.sort((a, b) => a.price - b.price)
            )
        } else {
            setFiltersProducts(
                filters_products.sort((a, b) => b.price - a.price)
            )
        }

    }, [sort])

    return (
        <Container>
            {filters_products &&
                filters_products?.map(product =>
                    <Product product={product} key={Math.random()} />
                )}

        </Container>
    )
}

export default Products
const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
margin-bottom:40px;
`

