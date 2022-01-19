import React, { useEffect } from 'react'
import styled from 'styled-components'
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { deleteCategory, getAllCategories } from '../Redux/apiCalls';
import { useDispatch } from 'react-redux';
import { format } from 'timeago.js'

function CategoryList() {
    const PF = 'http://localhost:8001/public/uploads/'
    const dispatch = useDispatch()
    const Categories = useSelector(state => state.product?.categories)
    const handleDelete = (id) => {
        deleteCategory(id, dispatch)
    }

    useEffect(() => {
        getAllCategories(dispatch);
    }, [dispatch])


    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
            field: 'title',
            headerName: 'Title',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 250,
            renderCell: (params) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={PF + params.row.categoryImage} alt='' style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '10px' }} />
                        {params.row.title}
                    </div>
                )
            }
        },
        {
            field: 'createdAt',
            headerName: 'Date',
            width: 130,
            editable: true,
            renderCell: (params) => {
                return (
                    <div>
                        {format(params.row.createdAt)}
                    </div>
                )
            }
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
                        <Link style={{ marginRight: '20px' }} to={`/category/${params.row._id}`}> <div style={{ display: 'flex', alignItems: 'center', }}><EditIcon fontSize='small' style={{ color: 'green', cursor: 'pointer' }} /></div></Link>
                        <div style={{ display: 'flex', alignItems: 'center', }} onClick={() => handleDelete(params.row._id)}><DeleteOutlinedIcon fontSize='small' style={{ color: '#cc0000', cursor: 'pointer' }} /></div>
                    </div >
                )
            }
        },



    ];
    return (
        <Container >
            <TopContainer>
                <TitleContainer>Category</TitleContainer>
                <CreateNewUserBtn><Link to='/AddCategory'>Create</Link> </CreateNewUserBtn>
            </TopContainer>
            <CategoryListContainer style={{ height: 480, width: '75%' }}>
                {Categories &&
                    <DataGrid

                        rows={Categories}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        disableSelectionOnClick
                        rowHeight={70}
                        getRowId={(row) => row?._id}
                    />
                }
            </CategoryListContainer>
        </Container>
    )
}

export default CategoryList
const Container = styled.div`

`
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
const CategoryListContainer = styled.div`
flex:4;
margin:20px;
border-radius:5px;
padding:10px 15px;
-webkit-box-shadow: 0px 2px 15px 2px #8C8C8C; 
box-shadow: 0px 2px 15px 2px #8C8C8C;
`