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
import Latest_products from '../components/Latest_products'
import HomeSlider from '../components/HomeSlider'


function Home() {

    return (
        <Container>
            <Announcements />
            <Header />
            {/*  <Slider /> */}
            <HomeSlider />
            <div>
                <h1 style={{ margin: '20px 15px' }}>Latest Collections</h1>
                <Categories />
            </div>
            <div>
                <h1 style={{ margin: '0px 15px' }}>Picked Products</h1>
                <Random_Products />
            </div>
            <div>
                <h1 style={{ margin: '0px 15px' }}>Latest Products</h1>
                <Latest_products />
            </div>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Home
const Container = styled.div`
overflow:hidden;
`
