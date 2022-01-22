import React from 'react'
import styled from 'styled-components'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';
import Badge from '@material-ui/core/Badge';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../Redux/adminSlice';

function Topbar() {
    const dispatch = useDispatch()
    const SignOut = () => {
        dispatch(LOGOUT())
    }
    return (
        <Container>

            <LeftMenuContainer>
                <LogoContainer>
                    <span>E-SHOPADMIN</span>
                </LogoContainer>
            </LeftMenuContainer>
            <RightMenuContainer>
                <MenuContainer>
                    <IconContainer>
                        <NotificationsNoneIcon fontSize='medium' />
                        <BadgeContainer>
                            <span>3</span>
                        </BadgeContainer>
                    </IconContainer>
                    <IconContainer>
                        <SettingsIcon fontSize='medium' />
                        <BadgeContainer>
                            <span>5</span>
                        </BadgeContainer>
                    </IconContainer>
                    <IconContainer>
                        <LanguageIcon fontSize='medium' />
                    </IconContainer>
                    <ProfileImage>
                        <img src='/images/user/my-image.jpg' />
                    </ProfileImage>
                    <LogoutContainer >
                        <LogoutIc><ExitToAppOutlinedIcon fontSize='small' /></LogoutIc>
                        <Logout onClick={SignOut}>
                            <span>LOGOUT</span>
                        </Logout>
                    </LogoutContainer>
                </MenuContainer>
            </RightMenuContainer>

        </Container>
    )
}

export default Topbar
const Container = styled.div`
height:50px;
width:100%;
top:0;
left:0;
right:0;
position:sticky;
z-index:999;
background-color:white;
display:flex;
align-items:center;
justify-content:space-between;
`
const LogoutContainer = styled.div`
display:flex;
align-items:center;
margin:0px 5px;
cursor:pointer;
`
const Logout = styled.div``
const LogoutIc = styled.div`
display:flex;
align-items:center;
`
const LeftMenuContainer = styled.div`
`
const LogoContainer = styled.div`
margin:5px;
span{
    font-size:30px;
    font-weight:bold;
    color:#000033;
}
`
const RightMenuContainer = styled.div``
const MenuContainer = styled.div`
display:flex;
align-items:center;
`
const IconContainer = styled.div`
margin-right:5px;
display:flex;
cursor:pointer;
`
const BadgeContainer = styled(Badge)`
border-radius:50%;
width:15px;
height:15px;
color:white;
background-color:red;
display:flex;
align-items:center;
justify-content:center;
left:-8px;
span{
    font-size:10px;
}
`
const ProfileImage = styled.div`
margin-right:5px;
img{
    border-radius:50%;
    width:40px;
    height:40px;
}
`

