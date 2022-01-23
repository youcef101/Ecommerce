import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

function Announcements() {
    return (
        <Container>
            <AnnouncementContainer>
                <img src='https://tn.jumia.is/cms/0000_Refresh2022/Janvier/W3/GEN/SemaineTECH_GENERIC_TopStripDesktop.gif' alt='' />
            </AnnouncementContainer>
        </Container>
    )
}

export default Announcements
const Container = styled.div`
//height:57px;
//width:100%;
//background-color: teal;

`
const AnnouncementContainer = styled.div`
/* text-align:center;
span{
    color:white;
    font-weight:500;
    font-size:14px;
} */
img{
    width:100%;
    height:50px;
    ${mobile({ height: '35px' })}
}
`
