import { Button, Container, makeStyles, Typography } from "@mui/material";
import {
    Home,
    Feed,
    AdminPanelSettings
} from "@mui/icons-material";

const classes = {
    container: {
        height: "100vh",
        // color: "white",
        marginTop: 100,
        // backgroundColor: theme.palette.primary.main,
        position: "sticky",
        top: 0,
        // borderRight: "5px solid #ece7e7",
        // color: 'black'
        color: '#555'
        // [theme.breakpoints.up("sm")]: {
        //     backgroundColor: "white",
        //     color: "#555",
        //     border: "1px solid #ece7e7",
        // },
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: 50,
        // marginLeft: '-10px',
        cursor: "pointer",
        // [theme.breakpoints.up("sm")]: {
        //     marginBottom: theme.spacing(3),
        //     cursor: "pointer",
        // },
    },
    icon: {
        marginRight: 10,
        //     [theme.breakpoints.up("sm")]: {
        //         fontSize: "18px",
        //     },
    },
    text: {
        fontWeight: 500,
        // [theme.breakpoints.down("sm")]: {
        //     display: "none",
        // },
    },

}


const Leftbar = ({ history }) => {



    return (
        <Container style={classes.container}>
            <Button style={classes.item}
                onClick={() => {
                    console.log(history)
                    // history.push('/')
                }}
            >
                <Home style={classes.icon} />
                <Typography style={classes.text}>Home</Typography>
            </Button>
            <Button style={classes.item}
                onClick={() => {
                    console.log(history)
                    // history.push('/')
                }}
            >
                <Feed style={classes.icon} />
                <Typography style={classes.text}>News</Typography>
            </Button>
            <Button style={classes.item}
                onClick={() => {
                    console.log(history)
                    // history.push('/')
                }}
            >                
            <AdminPanelSettings style={classes.icon} />
                <Typography style={classes.text}>Admin</Typography>
            </Button>
        </Container>
    );
};

export default Leftbar;
