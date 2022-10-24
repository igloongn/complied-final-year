import React, { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const SingleNews = () => {
    const [singleNews, setsingleNews] = useState({
        loading: true,
        payload: {}
    })
    const { newsId } = useParams()

    useEffect(() => {
        const url = 'http://localhost:1234/news/' + newsId
        axios.get(url)
            .then((res) => {
                setsingleNews({
                    // loading: false,
                    payload: res.data.singleNews
                })
            })
            .catch((err) => {
                console.log("There is an error in the Request")
                console.log(err)
            })
    }, [])


    return (
        <div>
            {singleNews.loading ? <h1>Loading</h1> :
                <div>
                    <Typography
                        variant='h2'
                        align='center'
                        sx={{
                            fontWeight: 700,
                            my: 2,
                            fontFamily: 'Alegreya',
                            fontStyle: 'normal',
                            fontSize: '35px',
                            lineHeight: '40px',
                            color: '#333',
                        }}

                    >
                        {singleNews.payload.title}
                    </Typography>

                    {/* Image */}
                    <Box
                        sx={{
                            // bgcolor: '#454',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                // height: 347,
                                flexGrow: 1,
                                // maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 500, md: 1100 },
                            }}
                            alt="The house from the offer."
                            src={singleNews.payload.image}
                        />
                    </Box>
                    <br />
                    <br />
                    <Typography
                        variant='p'
                        align='center'
                        paragraph
                        style={{
                            textAlign: 'justify',
                        }}
                        sx={{
                            fontFamily: 'Open Sans',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '17px',
                            lineHeight: '155.19%',
                            color: '#333',
                        }}

                    >
                        {'    ' + singleNews.payload.detail}
                    </Typography>



                </div>
            }
        </div >
    )
}

export { SingleNews }