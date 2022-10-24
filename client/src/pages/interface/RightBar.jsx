import {
    Link,
    Avatar,
    Container,
    ImageList,
    ImageListItem,
    makeStyles,
    Typography,
    Divider,
} from "@mui/material";
import { AvatarGroup } from "@material-ui/lab";

const classes = {
    container: {
        // paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0,
        marginTop: 100,
        color: 'black'

    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        // color: 'white',
    },
    link: {
        // marginRight: theme.spacing(2),
        // color: 'white',
        fontSize: 16,
    },
}
const Rightbar = () => {

    return (
        <Container style={classes.container}>
            <Typography style={classes.title} gutterBottom>
                Gallery
            </Typography>
            <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
                <ImageListItem>
                    <img
                        src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://material-ui.com/static/images/image-list/burgers.jpg"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://material-ui.com/static/images/image-list/camera.jpg"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://material-ui.com/static/images/image-list/morning.jpg"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://material-ui.com/static/images/image-list/hats.jpg"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://material-ui.com/static/images/image-list/vegetables.jpg"
                        alt=""
                    />
                </ImageListItem>
            </ImageList>
        </Container>
    );
};

export default Rightbar;
