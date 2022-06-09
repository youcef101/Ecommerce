import React, { useEffect } from 'react'
import styled from 'styled-components'
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getAllProducts } from '../Redux/apiCalls.js';



function ProductList() {
    const PF = 'http://localhost:8001/public/uploads/'
    const products_data = useSelector(state => state.product?.products)

    const dispatch = useDispatch()
    useEffect(() => {
        getAllProducts(dispatch);
    }, [dispatch])

    const handleDelete = (id) => {
        deleteProduct(id, dispatch)
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
            field: 'product',
            headerName: 'Product',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 280,

            renderCell: (params) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={/* PF + */ params.row.productImage} alt='' style={{ width: '90px', objectFit: 'cover', height: '90px', marginRight: '10px' }} />
                        <p style={{ maxWidth: '250px', height: '100%', display: 'flex', flexDirection: 'column' }}>{params.row.title}</p>

                    </div>
                )
            }
        },
        /*  {
             field: 'desc',
             headerName: 'Description',
             description: 'This column has a value getter and is not sortable.',
             sortable: false,
             minWidth: 300,
             textAlign: 'center'
 
         }, */
        {
            field: 'stock',
            headerName: 'Stock',
            width: 130,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 130,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 130,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            editable: true,
            renderCell: (params) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Link style={{ marginRight: '20px' }} to={`/product/${params.row?._id}`}> <div style={{ display: 'flex', alignItems: 'center', }}><EditIcon fontSize='small' style={{ color: 'green', cursor: 'pointer' }} /></div></Link>
                        <div style={{ display: 'flex', alignItems: 'center', }} onClick={() => handleDelete(params.row?._id)}><DeleteOutlinedIcon fontSize='small' style={{ color: '#cc0000', cursor: 'pointer' }} /></div>
                    </div >
                )
            }
        },
    ];

    return (
        <Container >
            <TopContainer>
                <TitleContainer>Product</TitleContainer>
                <CreateNewUserBtn><Link to='/AddProduct'>Create</Link> </CreateNewUserBtn>
            </TopContainer>
            <ProductContainer style={{ height: 550, width: '90%' }}>
                {products_data &&
                    <DataGrid
                        rows={products_data}
                        columns={columns}
                        rowHeight={100}
                        pageSize={4}
                        checkboxSelection
                        disableSelectionOnClick
                        getRowId={(row) => row?._id}

                    />
                }
            </ProductContainer>
        </Container>
    )
}

export default ProductList

const Container = styled.div``
const TopContainer = styled.div`
//padding:10px 15px;
margin:0px 15px;
display:flex;
justify-content:space-between;
align-items:center;
`
const TitleContainer = styled.h2``
const CreateNewUserBtn = styled.button`
color:white;
background-color:teal;
border:none;
height:30px;
font-weight:500;
border-radius:5px;
font-size:16px;
cursor:pointer;
&:hover{
    background-color:#00cccc;
}
a{
    color:white;
    text-decoration:none;
}
`
const ProductContainer = styled.div`
flex:4;
margin:20px;
border-radius:5px;
padding:10px 15px;
-webkit-box-shadow: 0px 2px 15px 2px #8C8C8C; 
box-shadow: 0px 2px 15px 2px #8C8C8C;
`
