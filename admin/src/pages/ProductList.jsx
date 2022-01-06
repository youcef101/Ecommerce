import React from 'react'
import styled from 'styled-components'
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Link } from 'react-router-dom'

function ProductList({ products_data, setProductsData }) {
    const handleDelete = (id) => {
        const res = products_data?.filter(row => row.id !== id)
        setProductsData(res)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product',
            headerName: 'Product',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 250,

            renderCell: (params) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={params.row.productImage} alt='' style={{ width: '70px', objectFit: 'cover', height: '60px', marginRight: '10px' }} />
                        {params.getValue(params.id, 'title') || ''}

                    </div>
                )
            }
        },

        {
            field: 'stock',
            headerName: 'Stock',
            width: 150,
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
                        <Link style={{ marginRight: '20px' }} to={`/product/${params.row.id}`}> <div style={{ display: 'flex', alignItems: 'center', }}><EditIcon fontSize='small' style={{ color: 'green', cursor: 'pointer' }} /></div></Link>
                        <div style={{ display: 'flex', alignItems: 'center', }} onClick={() => handleDelete(params.row.id)}><DeleteOutlinedIcon fontSize='small' style={{ color: '#cc0000', cursor: 'pointer' }} /></div>
                    </div >
                )
            }
        },



    ];
    return (
        <Container style={{ height: 550, width: '90%' }}>
            <DataGrid
                rows={products_data}
                columns={columns}
                rowHeight={70}
                pageSize={6}
                checkboxSelection
                disableSelectionOnClick
            />
        </Container>
    )
}

export default ProductList
const Container = styled.div`
flex:4;
margin:20px;
border-radius:5px;
padding:10px 15px;
-webkit-box-shadow: 0px 2px 15px 2px #8C8C8C; 
box-shadow: 0px 2px 15px 2px #8C8C8C;
`
