import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { axiosInstance } from '../axios'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
function Categories() {
    const [categories, setCategories] = useState('')
    useEffect(async () => {
        try {
            const res = await axiosInstance.get(`/category/all`)
            const data = await res.data
            setCategories(data)
        } catch (err) {
            console.log(err)
        }

    }, [])

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
flex-wrap:wrap;
`