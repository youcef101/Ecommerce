import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
function Categories() {
    return (
        <Container>
            {categories &&
                categories.map(item =>
                    <CategoryItem item={item} key={Math.random()} />
                )}

        </Container>
    )
}

export default Categories
const Container = styled.div`
display:flex;
padding:15px;
justify-content:space-between;

`