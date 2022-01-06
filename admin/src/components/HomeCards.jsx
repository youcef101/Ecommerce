import React from 'react'
import styled from 'styled-components'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function HomeCards() {
    return (
        <Container>
            <Cards>
                <CardTitle>Revenue</CardTitle>
                <CardPricing>
                    <Pricing>$ 25,415</Pricing>
                    <StacksContainer>
                        <StacksValue>- 5.25</StacksValue>
                        <IconContainer>
                            <ArrowDownwardIcon fontSize='small' />
                        </IconContainer>
                    </StacksContainer>
                </CardPricing>
                <CardText><span>Compared to last month</span></CardText>
            </Cards>
            <Cards>
                <CardTitle>Sales</CardTitle>
                <CardPricing>
                    <Pricing>$ 25,415</Pricing>
                    <StacksContainer>
                        <StacksValue>- 5.25</StacksValue>
                        <IconContainer>
                            <ArrowDownwardIcon fontSize='small' />
                        </IconContainer>
                    </StacksContainer>
                </CardPricing>
                <CardText><span>Compared to last month</span></CardText>
            </Cards>
            <Cards>
                <CardTitle>Coast</CardTitle>
                <CardPricing>
                    <Pricing>$ 25,415</Pricing>
                    <StacksContainer>
                        <StacksValue>+ 5.25</StacksValue>
                        <IconContainer>
                            <ArrowUpwardIcon fontSize='small' />
                        </IconContainer>
                    </StacksContainer>
                </CardPricing>
                <CardText><span>Compared to last month</span></CardText>
            </Cards>
        </Container>
    )
}

export default HomeCards
const Container = styled.div`
flex:4;
display:flex;
align-items:center;
justify-content:space-between;
margin:15px 15px;
`
const Cards = styled.div`
padding:15px 20px;
flex:1;
margin:5px 15px;
border-radius:5px;
-webkit-box-shadow: 0px 2px 15px 2px #8C8C8C; 
box-shadow: 0px 2px 15px 2px #8C8C8C;
`
const CardTitle = styled.div`
font-size:20px;
font-weight:500;
padding:10px 0px;
`
const CardPricing = styled.div`
padding:10px 0px;
display:flex;
align-items:center;
`
const Pricing = styled.span`
font-weight:600;
font-size:21px;
margin-right:10px;
`
const StacksContainer = styled.div`
display:flex;
align-items:center;
`
const StacksValue = styled.span`
font-size:14px;
`
const IconContainer = styled.div`
color:red;
display:flex;
align-items:center;
`
const CardText = styled.span`
color: #404040;

`