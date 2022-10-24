import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box } from '@mui/material'
import { Redo, Undo } from '@mui/icons-material';
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'


function CustomCarousel(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: banner1
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: banner2
        },
        {
            name: "Random Name #3",
            description: "King Mufasa!",
            image: banner3
        }
    ]

    return (
        <Carousel
            NextIcon={<Redo />}
            PrevIcon={<Undo />}
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel >
    )
}

function Item(props) {
    return (
        <Paper>
            {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p> */}
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
                        maxWidth: { xs: 700, md: 1100 },
                    }}
                    alt="the offer."
                    src={props.item.image}
                />
            </Box>
            {/* <img src={banner1} alt={'img Here'} /> */}

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}


export { CustomCarousel }