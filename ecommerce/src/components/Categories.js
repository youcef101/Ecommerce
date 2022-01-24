import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getLatestCategory } from '../Redux/apiCalls'
import { Ipad, IpadMax } from '../responsive'
import CategoryItem from './CategoryItem'
function Categories() {
    const categories = useSelector(state => state.product.latest_category)
    const dispatch = useDispatch()
    useEffect(() => {
        getLatestCategory(dispatch)
    }, [dispatch])
    //console.log(categories)
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
${Ipad({ justifyContent: 'center' })};
${IpadMax({ justifyContent: 'center' })};
`