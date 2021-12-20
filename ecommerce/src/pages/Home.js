import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Header from '../components/Header'
import Slider from '../components/Slider'
function Home() {
    return (
        <Container>
            <Announcements />
            <Header />
            <Slider />
        </Container>
    )
}

export default Home
const Container = styled.div`

`
