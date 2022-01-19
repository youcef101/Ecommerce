import React from 'react'
import styled from 'styled-components'
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report, Mail, } from "@material-ui/icons";
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import { NavLink } from 'react-router-dom'

function SideBar() {
    return (
        <Container>

            <MenuContainer>
                <MenuTitle>
                    DASHBOARD
                </MenuTitle>
                <MenuItems>
                    <NavLink to='/'>
                        <MenuItem>
                            <LineStyle fontSize='small' />
                            <span>HOME</span>
                        </MenuItem>
                    </NavLink>
                    <NavLink to='#'>
                        <MenuItem>
                            <Timeline fontSize='small' />
                            <span>ANALYTICS</span>
                        </MenuItem>
                    </NavLink>
                    <NavLink to='#'>
                        <MenuItem>
                            <TrendingUp fontSize='small' />
                            <span>SALES</span>
                        </MenuItem>
                    </NavLink>
                </MenuItems>
            </MenuContainer>
            <MenuContainer>
                <MenuTitle>
                    QUICK MENU
                </MenuTitle>
                <MenuItems>
                    <NavLink to='/users'>
                        <MenuItem>
                            <PermIdentity fontSize='small' />
                            <span>USERS</span>
                        </MenuItem>
                    </NavLink>
                    <NavLink to='/categories'>
                        <MenuItem>
                            <CategoryOutlinedIcon fontSize='small' />
                            <span>Categories</span>
                        </MenuItem>
                    </NavLink>
                    <NavLink to='/products'>
                        <MenuItem>
                            <Storefront fontSize='small' />
                            <span>PRODUCTS</span>
                        </MenuItem>
                    </NavLink>
                    <NavLink to='#'>
                        <MenuItem>
                            <AttachMoney fontSize='small' />
                            <span>TARNSACTIONS</span>
                        </MenuItem>
                    </NavLink>
                    <NavLink to='#'>
                        <MenuItem>
                            <BarChart fontSize='small' />
                            <span>REPORTS</span>
                        </MenuItem>
                    </NavLink>
                </MenuItems>
            </MenuContainer>
            <MenuContainer>
                <MenuTitle>
                    NOTIFICATIONS
                </MenuTitle>
                <MenuItems>
                    <NavLink to='#'>
                        <MenuItem>
                            <Mail fontSize='small' />
                            <span>MAIL</span>
                        </MenuItem>
                    </NavLink>
                    <NavLink to='#'>
                        <MenuItem>
                            <DynamicFeed fontSize='small' />
                            <span>FEEDBACK</span>
                        </MenuItem>
                    </NavLink>
                    <NavLink to='#'>
                        <MenuItem>
                            <ChatBubbleOutline fontSize='small' />
                            <span>MESSAGES</span>
                        </MenuItem>
                    </NavLink>
                </MenuItems>
            </MenuContainer>
            <MenuContainer>
                <MenuTitle>
                    STAFF
                </MenuTitle>
                <MenuItems>
                    <NavLink to='#'>
                        <MenuItem>
                            <WorkOutline fontSize='small' />
                            <span>MANAGE</span>
                        </MenuItem>
                    </NavLink>
                    <NavLink to='#'>
                        <MenuItem>
                            <Timeline fontSize='small' />
                            <span>ANALYTICS</span>
                        </MenuItem>
                    </NavLink>
                    <NavLink to='#'>
                        <MenuItem>
                            <Report fontSize='small' />
                            <span>REPORTS</span>
                        </MenuItem>
                    </NavLink>
                </MenuItems>
            </MenuContainer>
        </Container>
    )
}

export default SideBar
const Container = styled.div`
flex:1;
//height:calc(100vh - 50px);
position:sticky;
background-color: rgb(251, 251, 255);
top:50px;
`
const MenuContainer = styled.div`

`
const MenuTitle = styled.h3`
//margin-left:5px;
//margin-right:5px;
color: #737373;
padding:0px 15px;
`
const MenuItems = styled.ul`
margin-top:-10px;
a{
text-decoration:none;
color:#262626;

}
// a.active{
// background-color: rgb(240, 240, 255);
// border-radius:5px;
// }
}
`
const MenuItem = styled.li`

cursor:pointer;
margin-right:10px;
//margin-bottom:10px;
padding:5px 3px;
display:flex;
align-items:center;
list-style:none;
span{
    margin-left:3px;
    color:#262626
}
&:hover{
    background-color: rgb(240, 240, 255);
    border-radius:5px;
}

`
