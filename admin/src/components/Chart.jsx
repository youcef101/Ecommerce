import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart({ data, title, dataKey, grid }) {
    return (
        <Container>
            <TitleContainer><span>{title}</span></TitleContainer>
            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <LineChart data={data}>
                    {grid && <CartesianGrid stroke='#e6e6e6' strokeDasharray="5 5" />}
                    <XAxis dataKey="name" stroke='#391326' />
                    <Tooltip />
                    <Line type="monotone" dataKey={dataKey} stroke="#73264d" />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default Chart
const Container = styled.div`
margin:30px 30px;
-webkit-box-shadow: 0px 2px 15px 2px #8C8C8C; 
box-shadow: 0px 2px 15px 2px #8C8C8C;
border-radius:5px;
padding:15px 20px;

`
const TitleContainer = styled.div`
font-size:25px;
font-weight:500;
margin-bottom:15px;
`

