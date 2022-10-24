import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as rdd from 'react-device-detect';
import ExternalCard from "./ExternalCard";
import { Typography } from "@mui/material";
import { useHistory } from 'react-router-dom'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
        slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        // partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        // partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
        slidesToSlide: 1 // optional, default to 1.
    }
}


const ExternalMultiSlides = ({ data }) => {
    const history = useHistory()
    return (
        <div
            style={{
                backgroundColor: 'hsla(0,0%,77%,.23)',
                paddingTop: 2,
                padding: 2,
                paddingBottom: 2,
            }}
        >
            <Carousel
                swipeable={true}
                // showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={rdd.isMobile ? true : false}
                autoPlay={false}
                // autoPlaySpeed={1000}
                keyBoardControl={true}
                // customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                deviceType={rdd.browserName}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-400-px"
                draggable={true}
                sliderClass='react-multi-carousel-track'
            >
                {data && data.map((item, index) => item.image && <ExternalCard key={index} data={item} index={index} />)}
            </Carousel>
            <Typography
                variant='h5'
                align="center"
                sx={{
                    py: 2,
                    fontSize: 20,
                }}
                onClick={() => {
                    history.replace('/news')
                }}
            >View More</Typography>
        </div>
    )
}


export { ExternalMultiSlides };