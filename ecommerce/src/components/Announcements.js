import React from 'react'
import styled from 'styled-components'

function Announcements() {
    return (
        <Container>
            <AnnouncementContainer>
                <span>Super Deal! Free Shipping on Orders Over $50</span>
            </AnnouncementContainer>
        </Container>
    )
}

export default Announcements
const Container = styled.div`
height:25px;
background-color: teal;
`
const AnnouncementContainer = styled.div`
text-align:center;
span{
    color:white;
    font-weight:500;
    font-size:14px;
}
`
