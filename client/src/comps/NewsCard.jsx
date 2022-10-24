import React from 'react'
import { Box, } from '@mui/system';
import { Paper, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'

const NewsCard = ({ data }) => {
    const shortDetail = data.detail.substring(0, 100);
    const history = useHistory()
    return (
        <>
            {/* <Paper 
            elevation={19}
            variant='elevation'
            > */}
            <Box
                onClick={() => {
                    history.push('/news/' + data._id)
                }}
                sx={{
                    bgcolor: '#d6d8ee',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 6,
                    minWidth: 300,
                    mb: 3,
                    // color: 'black',
                }}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            // gutterBottom
            >
                {/* News Details */}
                <Box
                    sx={{
                        color: 'black',
                    }}
                    style={{
                        flexGrow: 1,
                        // backgroundColor: '#cc2',
                    }}
                >
                    <Typography
                        align='left'
                        paragraph
                        variant='h4'
                        gutterBottom
                        // style={{
                        //     fontWeight: 500,
                        // }}
                        style={{
                            fontSize: '1.5rem',
                            fontFamily: ["Roboto", "Helvetica", "Arial", 'sans-serif'],
                            fontWeight: '400',
                            lineHeight: '1.334',
                            letterSpacing: '0em',
                        }}
                    >
                        {data.title}
                    </Typography>

                    <Typography
                        align='left'
                        paragraph
                        variant='p'
                        style={{
                            fontSize: '0.875rem',
                            fontFamily: ["Roboto", "Helvetica", "Arial", 'sans-serif'],
                            fontWeight: '400',
                            lineHeight: 1.43,
                            letterSpacing: '0.01071em',
                        }}
                        gutterBottom
                    >
                        {data.detail.length > 100 ? shortDetail + '.....' : data.detail}
                    </Typography>
                </Box>

                {/* News Images */}
                <Box
                    component="img"
                    sx={{
                        // width: 250,
                        width: '40%',
                        margin: 'auto',
                        // height: 347,
                        // maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 500, md: 1100 },
                    }}
                    alt="The house from the offer."
                    src={data.image}
                />
            </Box>
            {/* </Paper> */}
        </>
    )
}

export { NewsCard }
