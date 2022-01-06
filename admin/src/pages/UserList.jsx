import React, { useState } from 'react'
import styled from 'styled-components'
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import { Link } from 'react-router-dom'

function UserList({ users_data, setUsersData }) {

    const handleDelete = (id) => {
        const res = users_data?.filter(row => row.id !== id)
        setUsersData(res)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 180,
            valueGetter: (params) =>
                `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
                }`,
            renderCell: (params) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={params.row.profileImage} alt='' style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                        {params.getValue(params.id, 'firstName') || ''} {params.getValue(params.id, 'lastName') || ''
                        }
                    </div>
                )
            }
        },

        {
            field: 'email',
            headerName: 'Email',
            width: 180,
            editable: true,
        },
        {
            field: 'transactions',
            headerName: 'Transactions',
            width: 180,
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
                        <Link style={{ marginRight: '20px' }} to={`/user/${params.row.id}`}> <div style={{ display: 'flex', alignItems: 'center', }}><EditIcon fontSize='small' style={{ color: 'green', cursor: 'pointer' }} /></div></Link>
                        <div style={{ display: 'flex', alignItems: 'center', }} onClick={() => handleDelete(params.row.id)}><DeleteOutlinedIcon fontSize='small' style={{ color: '#cc0000', cursor: 'pointer' }} /></div>
                    </div >
                )
            }
        },



    ];
    return (
        <Container style={{ height: 500, width: '90%' }}>
            <DataGrid
                rows={users_data}
                columns={columns}
                pageSize={7}
                checkboxSelection
                disableSelectionOnClick
            />
        </Container>
    )
}

export default UserList
const Container = styled.div`
flex:4;
margin:20px;
border-radius:5px;
padding:10px 15px;
-webkit-box-shadow: 0px 2px 15px 2px #8C8C8C; 
box-shadow: 0px 2px 15px 2px #8C8C8C;
`
