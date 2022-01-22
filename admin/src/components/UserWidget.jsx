import React from 'react'
import styled from 'styled-components'
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useEffect } from 'react';

import { useState } from 'react';
import { adminRequest } from '../axios';
import { Link } from 'react-router-dom';

function UserWidget() {
    const [latest_users, setLatestUsers] = useState([])
    const PF = 'http://localhost:8001/public/uploads/'
    useEffect(() => {
        const getLatestUser = async () => {
            try {
                const res = await adminRequest.get(`/user/?new=true`)
                const data = await res.data
                setLatestUsers(data)
            } catch (err) {
                console.log(err)
            }
        }
        getLatestUser()
    }, [])
    // console.log(latest_users)
    return (
        <Container>
            <WidgetTitle><span>New join Members</span></WidgetTitle>
            <MembersContainer>
                {latest_users &&
                    latest_users?.map(user =>
                        <MembersItems key={Math.random()}>
                            <MembersItem>
                                <Left>
                                    <MemberImage>
                                        <img src={user?.profileImage && PF + user?.profileImage || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt='' />
                                    </MemberImage>
                                    <MemberInfo>
                                        <MemberName>{user.fullName}</MemberName>
                                        {/*  <MemberInf> Software Engineer</MemberInf> */}
                                    </MemberInfo>
                                </Left>
                                <Link to={`/user/${user?._id}`}>
                                    <ShowMemberBtn>
                                        <VisibilityIcon fontSize='small' />
                                        <span>Display</span>
                                    </ShowMemberBtn>
                                </Link>
                            </MembersItem>
                        </MembersItems>
                    )}

            </MembersContainer>
        </Container>
    )
}

export default UserWidget
const Container = styled.div`
margin:10px;
border-radius:5px;
padding:10px 15px;
flex:1.5;
-webkit-box-shadow: 0px 2px 15px 2px #8C8C8C; 
box-shadow: 0px 2px 15px 2px #8C8C8C;
`
const WidgetTitle = styled.div`
margin-left:15px;
span{
    font-size:20px;
    font-weight:500;
}
`
const MembersContainer = styled.div``
const MembersItems = styled.ul`
margin-left:-25px;
a{text-decoration:none;}
`
const MembersItem = styled.li`
list-style:none;
display:flex;
align-items:center;
justify-content:space-between;
`
const Left = styled.div`
display:flex;
align-items:center;
`
const MemberImage = styled.div`
cursor:pointer;
img{
    width:45px;
    height:45px;
    border-radius:50%;
    border:1px solid gray;
    object-fit:cover;
}
`
const MemberInfo = styled.div`
display:flex;
flex-direction:column;
margin-left:10px;
`
const MemberName = styled.span`
font-weight:500;
font-size:17px;
`
const MemberInf = styled.span`
color:gray;
`
const ShowMemberBtn = styled.button`
height:30px;
display:flex;
align-items:center;
cursor:pointer;
border:none;
border-radius:10px;
span{
    margin-left:5px;
    
}
`
