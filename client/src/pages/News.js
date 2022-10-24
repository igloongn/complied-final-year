import React, { useEffect, useState } from 'react'
import { NewsCard } from '../comps/NewsCard'
import axios from 'axios'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Typography } from '@mui/material';


export const News = () => {

    const [payload, setPayload] = useState({
        isLoading: true,
        data: {}
    })


    const [page, setPage] = React.useState(1);
    const handleChange = async (event, value) => {
        setPage(value);
        setPayload({
            isLoading: true
        })
        setTimeout(async () => {
            try {
                const result = await axios.get('http://localhost:1234/news/?page=' + value)
                console.log(result)
                setPayload({
                    isLoading: false,
                    data: result.data
                })
            } catch (err) {
                console.log(err)
            }
        }, 500);

    };

    useEffect(() => {
        // const url = 'http://localhost:1234/news/?page=1'
        const url = 'http://localhost:1234/news'
        axios.get(url)
            .then((res) => {
                // console.log(res.data)
                setPayload({
                    data: res.data,
                    isLoading: false
                })
                console.log('payload.totalPages')
                console.log(res.data.totalPages)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            {payload.isLoading
                ?
                <h2 style={{ marginLeft: 100 }}>Loading.....</h2>
                :
                <div
                    style={{
                        marginTop: 40,
                        marginBottom: 80,
                        zIndex: 455
                    }}
                >
                    {payload.data.data.map(item => <NewsCard
                        key={item.id} data={item} />
                    )}

                    <Stack spacing={2} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                    }}
                        style={{
                            backgroundColor: '#99a599',

                        }}
                    >
                        <Pagination
                            size='large'
                            count={payload.data.totalPages}
                            page={page}
                            onChange={handleChange}
                            color='error'
                            variant='outlined'
                        />
                    </Stack>
                </div>
            }
        </div>
    )
}
