// Carousel ..
// Top post ...
// External API Trending ...
// Gallery

import { Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CustomCarousel } from '../comps/Carousel'
import { LocalMultiSlides } from '../comps/LocalMultiSlides'
import { ExternalMultiSlides } from '../comps/ExternalMultiSlides'
import AdjustIcon from '@mui/icons-material/Adjust';


const Homepage = () => {
    const [localNews, setLocalNews] = useState([])
    const [loading, setloading] = useState(true);
    const [externalNews, setExternalNews] = useState([])
    const [nigeriaNews, setNigeriaNews] = useState([])

    useEffect(() => {
        const getLocalNews = async () => {
            const url = 'http://localhost:1234/news/'
            const result = await axios.get(url)
            try {
                setLocalNews(result.data.data)
                setloading(false)

            } catch (err) {
                console.log('error')
                console.log('There was an error')
                console.log(err)

            }
        }
        const getExternalNews = async () => {
            const url = 'http://api.mediastack.com/v1/news?access_key=b1ad7f8a441fccfd694b70aed02b872a&category=trending&languages=en&limit=20'
            const result = await axios.get(url)
            try {
                setExternalNews(result.data.data)
                // console.log(result.data.data)
            } catch (err) {
                console.log('error')
                console.log('There was an error')
                console.log(err)

            }
        }
        const getNigeriaNews = async () => {
            const url = 'http://api.mediastack.com/v1/news?access_key=b1ad7f8a441fccfd694b70aed02b872a&&countries=ng'
            const result = await axios.get(url)
            try {
                setNigeriaNews(result.data.data)
                setloading(false)
                // console.log(result.data.data)
            } catch (err) {
                console.log('error')
                console.log('There was an error')
                console.log(err)

            }
        }



        getLocalNews()
        // getExternalNews()
        // getNigeriaNews()

    }, []);

    return (
        <div
            style={{
                marginTop: 40,
                marginBottom: 100,
            }}
        >
            {/* <Typography align='center' variant='h2'>Homepage</Typography> */}
            <CustomCarousel />

            <br />
            <br />

            <Typography
                align='left'
                variant='h2'
                sx={{
                    mb: 6,
                    fontSize: '20px',
                    fontFamily: 'Alegreya',
                    fontWeight: '700',
                    lineHeight: '34px',
                }}

            ><AdjustIcon fontSize='20px' /> Latest News</Typography>
            {!loading && <LocalMultiSlides style={{ paddingLeft: 20 }} data={localNews} />}
            <br />
            <br />

            <Typography
                align='left'
                variant='h2'
                sx={{
                    mb: 6,
                    fontSize: '20px',
                    fontFamily: 'Alegreya',
                    fontWeight: '700',
                    lineHeight: '34px',
                }}

            ><AdjustIcon fontSize='20px' /> Nigerian API Trending</Typography>
            {/* {!loading && <ExternalMultiSlides data={nigeriaNews} />} */}

            <br />
            <br />

            <Typography
                align='left'
                variant='h2'
                sx={{
                    mb: 6,
                    fontSize: '20px',
                    fontFamily: 'Alegreya',
                    fontWeight: '700',
                    lineHeight: '34px',
                }}

            ><AdjustIcon fontSize='20px' /> External API Trending</Typography>
            {/* {!loading && <ExternalMultiSlides data={externalNews} />} */}

            <br />
            <br />

        </div >
    )
}

export { Homepage }