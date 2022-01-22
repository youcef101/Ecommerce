import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import styled from 'styled-components';

function HomeSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <Container>
            <Slide>
                <SliderContainer {...settings}>
                    <Wrap >
                        <img style={{ borderRadius: '10px' }} src='https://tn.jumia.is/cms/0000_Refresh2022/Janvier/W3/Sliders/CAN2022-CPR-TV---Slider.jpg' alt='' />
                    </Wrap>
                    <Wrap >
                        <img style={{ borderRadius: '10px' }} src='https://tn.jumia.is/cms/0000_Refresh2022/Janvier/W3/Sliders/SemaineTECH_GENERIC_Slider.jpg' alt='' />
                    </Wrap>
                    <Wrap >
                        <img style={{ borderRadius: '10px' }} src='https://tn.jumia.is/cms/0000_Refresh2022/Janvier/W3/Sliders/SemaineTECH_Smartphone_Slider.jpg' alt='' />
                    </Wrap>
                    <Wrap >
                        <img style={{ borderRadius: '10px' }} src='https://tn.jumia.is/cms/0000_Refresh2022/Janvier/W3/Sliders/W3_Jexpress_Slider.jpg' alt='' />
                    </Wrap>
                    <Wrap >
                        <img style={{ borderRadius: '10px' }} src='https://tn.jumia.is/cms/0000_Refresh2022/Janvier/W3/Sliders/SemaineTECH_Bluetooth_Slider.jpg' alt='' />
                    </Wrap>

                </SliderContainer>
            </Slide>
        </Container>
    )
}

export default HomeSlider
const Container = styled.div`
margin-top:20px;
`
const Slide = styled.div`
width:100%;
display:flex;
justify-content:center;

`
const SliderContainer = styled(Slider)`
width:90%;
//border-radius:15px;
&:focus{
    outline:none;
}
.slick-arrow.slick-prev,
.slick-arrow.slick-next {
    display:none;
 /*  background: #fcfcfc;
  width: 47px;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  box-shadow: 1px 2px 10px -1px rgb(0 0 0 / 30%); */
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
li {
  width: 30px;
  height: 50px;
  filter: grayscale(100%);
}
li.slick-active {
  filter: grayscale(0%);
  
}
li.slick-active button:before{
    color:white;
}

`
const Wrap = styled.div`
width:100%;
height:100%;
img{
    width:100%;
    height:70vh;
    margin:0px 2px;
    //object-fit:contain;

}
`