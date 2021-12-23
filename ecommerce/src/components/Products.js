import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
function Products() {
    return (
        <Container>
            {popularProducts &&
                popularProducts.map(product =>
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

