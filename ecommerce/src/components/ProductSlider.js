import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import SliderCard from './SliderCard';


function ProductSlider({ products }) {


  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "gray", fontSize: "30px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "gray", fontSize: "30px" }} />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    autoplay: true,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        },
      },
    ]

  };
  return (
    <Container>
      <SliderContainer
        {...settings}
      >
        {products &&
          products.map(product =>
            <SliderCard key={Math.random()} product={product} />
          )}

      </SliderContainer>
    </Container>
  )
}

export default ProductSlider
const Container = styled.div`
margin:50px 0px;
`
const SliderContainer = styled(Slider)`
background-color: #f2f2f2;

&:focus{
    outline:none;
}
.slick-arrow.slick-prev,
.slick-arrow.slick-next {
  background: #fcfcfc;
  width: 47px;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  box-shadow: 1px 2px 10px -1px rgb(0 0 0 / 30%);
}
.slick-prev {
  left: 0;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
}
.slick-next {
  right: 0;
  border-bottom-left-radius: 7px;
  border-top-left-radius: 7px;
}
.slick-prev::before,
.slick-next::before {
  display: none;
}
.custom-indicator {
  bottom: -65px;
}
.custom-indicator li {
  width: 50px;
  height: 50px;
  filter: grayscale(100%);
}
.custom-indicator li.slick-active {
  filter: grayscale(0%);
}
`
