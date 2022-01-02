import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
//import Products from '../components/Products'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Random_Products from '../components/Random_Products'


function Home() {

    return (
        <Container>
            <Announcements />
            <Header />
            <Slider />
            <Categories />
            <Random_Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Home
const Container = styled.div`

`
