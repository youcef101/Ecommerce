import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Header from '../components/Header'
function Home() {
    return (
        <Container>
            <Announcements />
            <Header />
        </Container>
    )
}

export default Home
const Container = styled.div``
