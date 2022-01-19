import React from 'react'
import styled from 'styled-components'
function TransactionWidget() {
    const Button = ({ type }) => {
        return <StatusBtn type={type}>{type}</StatusBtn >;
    };

    return (
        <Container>
            <WidgetTitle><span>Latest Transactions</span></WidgetTitle>
            <TableContainer >
                <TableHead>
                    <TableRow>
                        <TableH>Customer</TableH>
                        <TableH>Date</TableH>
                        <TableH>Amount</TableH>
                        <TableH>Status</TableH>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCols>
                            <CustomerImage>
                                <img src='/images/user/my-image.jpg' alt='' />
                            </CustomerImage>
                            <CustomerName>
                                Susan Carol
                            </CustomerName>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderDate>
                                <span>20 jun 2021</span>
                            </CustomerOrderDate>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderAmount>
                                <span>$ 253.452</span>
                            </CustomerOrderAmount>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderStatus>
                                <Button type='Pending' />
                            </CustomerOrderStatus>
                        </TableCols>
                    </TableRow>
                    <TableRow>
                        <TableCols>
                            <CustomerImage>
                                <img src='/images/user/my-image.jpg' alt='' />
                            </CustomerImage>
                            <CustomerName>
                                Susan Carol
                            </CustomerName>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderDate>
                                <span>20 jun 2021</span>
                            </CustomerOrderDate>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderAmount>
                                <span>$ 253.452</span>
                            </CustomerOrderAmount>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderStatus>
                                <Button type='Approved' />
                            </CustomerOrderStatus>
                        </TableCols>
                    </TableRow>
                    <TableRow>
                        <TableCols>
                            <CustomerImage>
                                <img src='/images/user/my-image.jpg' alt='' />
                            </CustomerImage>
                            <CustomerName>
                                Susan Carol
                            </CustomerName>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderDate>
                                <span>20 jun 2021</span>
                            </CustomerOrderDate>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderAmount>
                                <span>$ 253.452</span>
                            </CustomerOrderAmount>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderStatus>
                                <Button type='Pending' />
                            </CustomerOrderStatus>
                        </TableCols>
                    </TableRow>
                    <TableRow>
                        <TableCols>
                            <CustomerImage>
                                <img src='/images/user/my-image.jpg' alt='' />
                            </CustomerImage>
                            <CustomerName>
                                Susan Carol
                            </CustomerName>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderDate>
                                <span>20 jun 2021</span>
                            </CustomerOrderDate>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderAmount>
                                <span>$ 253.452</span>
                            </CustomerOrderAmount>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderStatus>
                                <Button type='Declined' />
                            </CustomerOrderStatus>
                        </TableCols>
                    </TableRow>
                    <TableRow>
                        <TableCols>
                            <CustomerImage>
                                <img src='/images/user/my-image.jpg' alt='' />
                            </CustomerImage>
                            <CustomerName>
                                Susan Carol
                            </CustomerName>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderDate>
                                <span>20 jun 2021</span>
                            </CustomerOrderDate>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderAmount>
                                <span>$ 253.452</span>
                            </CustomerOrderAmount>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderStatus>
                                <Button type='Approved' />
                            </CustomerOrderStatus>
                        </TableCols>
                    </TableRow>
                    <TableRow>
                        <TableCols>
                            <CustomerImage>
                                <img src='/images/user/my-image.jpg' alt='' />
                            </CustomerImage>
                            <CustomerName>
                                Susan Carol
                            </CustomerName>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderDate>
                                <span>20 jun 2021</span>
                            </CustomerOrderDate>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderAmount>
                                <span>$ 253.452</span>
                            </CustomerOrderAmount>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderStatus>
                                <Button type='Pending' />
                            </CustomerOrderStatus>
                        </TableCols>
                    </TableRow>
                    <TableRow>
                        <TableCols>
                            <CustomerImage>
                                <img src='/images/user/my-image.jpg' alt='' />
                            </CustomerImage>
                            <CustomerName>
                                Susan Carol
                            </CustomerName>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderDate>
                                <span>20 jun 2021</span>
                            </CustomerOrderDate>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderAmount>
                                <span>$ 253.452</span>
                            </CustomerOrderAmount>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderStatus>
                                <Button type='Declined' />
                            </CustomerOrderStatus>
                        </TableCols>
                    </TableRow>
                    <TableRow>
                        <TableCols>
                            <CustomerImage>
                                <img src='/images/user/my-image.jpg' alt='' />
                            </CustomerImage>
                            <CustomerName>
                                Susan Carol
                            </CustomerName>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderDate>
                                <span>20 jun 2021</span>
                            </CustomerOrderDate>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderAmount>
                                <span>$ 253.452</span>
                            </CustomerOrderAmount>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderStatus>
                                <Button type='Pending' />
                            </CustomerOrderStatus>
                        </TableCols>
                    </TableRow>
                    <TableRow>
                        <TableCols>
                            <CustomerImage>
                                <img src='/images/user/my-image.jpg' alt='' />
                            </CustomerImage>
                            <CustomerName>
                                Susan Carol
                            </CustomerName>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderDate>
                                <span>20 jun 2021</span>
                            </CustomerOrderDate>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderAmount>
                                <span>$ 253.452</span>
                            </CustomerOrderAmount>
                        </TableCols>
                        <TableCols>
                            <CustomerOrderStatus>
                                <Button type='Pending' />
                            </CustomerOrderStatus>
                        </TableCols>
                    </TableRow>
                </TableBody>
            </TableContainer>
        </Container>
    )
}

export default TransactionWidget
const Container = styled.div`
margin:10px;
border-radius:5px;
padding:10px 15px;
flex:2.5;
-webkit-box-shadow: 0px 2px 15px 2px #8C8C8C; 
box-shadow: 0px 2px 15px 2px #8C8C8C;

`
const WidgetTitle = styled.div`
margin-bottom:10px;
span{
    font-size:20px;
    font-weight:500;
}
`
const TableContainer = styled.table`
width:100%;
//display:flex;
// align-items:flex-start;
// flex-direction:column;
// justify-content:space-between;
`
const TableHead = styled.thead``
const TableBody = styled.tbody``
const TableRow = styled.tr`
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
`
const TableH = styled.th`
width:25%;
display:flex;
align-items:center;
//justify-content:center;
`
const TableCols = styled.td`
width:25%;
display:flex;
align-items:center;
//justify-content:center;
`
const CustomerImage = styled.div`
margin-right:5px;
img{
    width:30px;
    height:30px;
    border-radius:50%;
}
`
const CustomerName = styled.span`
font-size:15px;
`
const CustomerOrderDate = styled.div`
font-size:15px;
`
const CustomerOrderAmount = styled.div`
font-size:15px;
`
const CustomerOrderStatus = styled.div`
width:70%;
`
const StatusBtn = styled.button`
border:none;
border-radius:5px;
cursor:pointer;
padding:5px 10px;
font-weight:600;
width:100%;
background-color:${(props) => {
        if (props.type === 'Pending') {
            return '#e6e6ff'
        } else if (props.type === 'Approved') {
            return '#99ffbb'
        } else {
            return '#ffcccc'
        }
    }};
color:${(props) => {
        if (props.type === 'Pending') {
            return '#1a1aff'
        } else if (props.type === 'Approved') {
            return '#004d00'
        } else {
            return '#990000'
        }
    }}
`
