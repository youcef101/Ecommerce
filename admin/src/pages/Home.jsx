import React from 'react'
import styled from 'styled-components'
import Chart from '../components/Chart'
import HomeCards from '../components/HomeCards'
import UserWidget from '../components/UserWidget'
import TransactionWidget from '../components/TransactionWidget'
import { user_data } from '../dummyData.js'
function Home() {
    return (
        <Container>
            <HomeCards />
            <Chart data={user_data} title='User Analytics' grid dataKey='Active User' />
            <Widgets>
                <UserWidget />
                <TransactionWidget />
            </Widgets>
        </Container>
    )
}

export default Home
const Container = styled.div`
`
const Widgets = styled.div`
margin:20px 20px;
flex:4;
display:flex;
align-items:flex-start;
`
