import React, { useState } from 'react'
import styled from 'styled-components'
import Chart from '../components/Chart'
import HomeCards from '../components/HomeCards'
import UserWidget from '../components/UserWidget'
import TransactionWidget from '../components/TransactionWidget'
import { user_data } from '../dummyData.js'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { adminRequest } from '../axios'
function Home() {
    const [users_stats, setUsersStats] = useState([])
    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    );

    useEffect(() => {
        const getUsersStats = async () => {
            try {
                const res = await adminRequest.get(`/user/stats/d`)
                res.data.map((item) =>
                    setUsersStats((prev) => [
                        ...prev,
                        { name: MONTHS[item._id - 1], "Active User": item.total },
                    ])
                );
            } catch (err) {
                console.log(err)
            }
        }
        getUsersStats()
    }, [MONTHS])

    return (
        <Container>
            <HomeCards />
            {users_stats && <Chart data={users_stats} title='User Analytics' grid dataKey='Active User' />}
            <Widgets>
                <UserWidget />
                <TransactionWidget />
            </Widgets>
        </Container>
    )
}

export default Home
const Container = styled.div`
`
const Widgets = styled.div`
margin:20px 20px;
flex:4;
display:flex;
align-items:flex-start;
`
