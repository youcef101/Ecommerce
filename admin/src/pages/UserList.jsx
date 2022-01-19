import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { format } from 'timeago.js'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteUser, getAllUsers } from '../Redux/apiCalls';
import { useSelector } from 'react-redux';

function UserList() {
    const PF = 'http://localhost:8001/public/uploads/'
    const dispatch = useDispatch()
    const users = useSelector(state => state.admin?.users)
    useEffect(() => {
        getAllUsers(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        deleteUser(id, dispatch)
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 130 },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 220,
            renderCell: (params) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={params.row.profileImage && PF + params?.row?.profileImage || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt='' style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                        {params.row.fullName}
                    </div>
                )
            }
        },

        {
            field: 'email',
            headerName: 'Email',
            width: 230,
            editable: true,
        },
        {
            field: 'createdAt',
            headerName: 'Date',
            width: 180,
            editable: true,
            renderCell: (params) => {
                return (
                    <div>
                        <p>{format(params.row.createdAt)}</p>
                    </div >
                )
            }
        },
        /*   {
              field: 'transactions',
              headerName: 'Transactions',
              width: 180,
              editable: true,
          }, */
        /*   {
              field: 'status',
              headerName: 'Status',
              width: 130,
              editable: true,
          }, */
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            editable: true,
            renderCell: (params) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Link style={{ marginRight: '20px' }} to={`/user/${params?.row?._id}`}> <div style={{ display: 'flex', alignItems: 'center', }}><EditIcon fontSize='small' style={{ color: 'green', cursor: 'pointer' }} /></div></Link>
                        <div style={{ display: 'flex', alignItems: 'center', }} onClick={() => handleDelete(params?.row?._id)}><DeleteOutlinedIcon fontSize='small' style={{ color: '#cc0000', cursor: 'pointer' }} /></div>
                    </div >
                )
            }
        },



    ];
    return (
        <Container style={{ height: 500, width: '90%' }}>
            {users &&
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={7}
                    checkboxSelection
                    getRowId={(row) => row && row?._id}
                    disableSelectionOnClick
                />
            }
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
