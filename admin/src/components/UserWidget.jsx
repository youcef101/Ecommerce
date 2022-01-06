import React from 'react'
import styled from 'styled-components'
import VisibilityIcon from '@material-ui/icons/Visibility';

function UserWidget() {
    return (
        <Container>
            <WidgetTitle><span>New join Members</span></WidgetTitle>
            <MembersContainer>
                <MembersItems>
                    <MembersItem>
                        <MemberImage>
                            <img src='/images/user/my-image.jpg' alt='' />
                        </MemberImage>
                        <MemberInfo>
                            <MemberName>Youcef ben khadem</MemberName>
                            <MemberInf> Software Engineer</MemberInf>
                        </MemberInfo>
                        <ShowMemberBtn>
                            <VisibilityIcon fontSize='small' />
                            <span>Display</span>
                        </ShowMemberBtn>
                    </MembersItem>
                </MembersItems>
                <MembersItems>
                    <MembersItem>
                        <MemberImage>
                            <img src='/images/user/my-image.jpg' alt='' />
                        </MemberImage>
                        <MemberInfo>
                            <MemberName>Youcef ben khadem</MemberName>
                            <MemberInf> Software Engineer</MemberInf>
                        </MemberInfo>
                        <ShowMemberBtn>
                            <VisibilityIcon fontSize='small' />
                            <span>Display</span>
                        </ShowMemberBtn>
                    </MembersItem>
                </MembersItems>
                <MembersItems>
                    <MembersItem>
                        <MemberImage>
                            <img src='/images/user/my-image.jpg' alt='' />
                        </MemberImage>
                        <MemberInfo>
                            <MemberName>Youcef ben khadem</MemberName>
                            <MemberInf> Software Engineer</MemberInf>
                        </MemberInfo>
                        <ShowMemberBtn>
                            <VisibilityIcon fontSize='small' />
                            <span>Display</span>
                        </ShowMemberBtn>
                    </MembersItem>
                </MembersItems>
                <MembersItems>
                    <MembersItem>
                        <MemberImage>
                            <img src='/images/user/my-image.jpg' alt='' />
                        </MemberImage>
                        <MemberInfo>
                            <MemberName>Youcef ben khadem</MemberName>
                            <MemberInf> Software Engineer</MemberInf>
                        </MemberInfo>
                        <ShowMemberBtn>
                            <VisibilityIcon fontSize='small' />
                            <span>Display</span>
                        </ShowMemberBtn>
                    </MembersItem>
                </MembersItems>
                <MembersItems>
                    <MembersItem>
                        <MemberImage>
                            <img src='/images/user/my-image.jpg' alt='' />
                        </MemberImage>
                        <MemberInfo>
                            <MemberName>Youcef ben khadem</MemberName>
                            <MemberInf> Software Engineer</MemberInf>
                        </MemberInfo>
                        <ShowMemberBtn>
                            <VisibilityIcon fontSize='small' />
                            <span>Display</span>
                        </ShowMemberBtn>
                    </MembersItem>
                </MembersItems>
                <MembersItems>
                    <MembersItem>
                        <MemberImage>
                            <img src='/images/user/my-image.jpg' alt='' />
                        </MemberImage>
                        <MemberInfo>
                            <MemberName>Youcef ben khadem</MemberName>
                            <MemberInf> Software Engineer</MemberInf>
                        </MemberInfo>
                        <ShowMemberBtn>
                            <VisibilityIcon fontSize='small' />
                            <span>Display</span>
                        </ShowMemberBtn>
                    </MembersItem>
                </MembersItems>
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
`
const MembersItem = styled.li`
list-style:none;
display:flex;
justify-content:space-between;
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
