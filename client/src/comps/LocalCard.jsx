import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useHistory } from 'react-router-dom'



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function RecipeReviewCard({ data, index }) {

  const [expanded, setExpanded] = React.useState(false);

  const shortDetail = data.detail.substring(0, 100);
  let history = useHistory();



  const handleExpandClick = ({ data }) => {
    setExpanded(!expanded);
  };

  return (
    <Card onClick={() => {
      console.log('Clicked')
    }} sx={{
      maxWidth: 345,
      bgcolor: '#c4c4c4b6',
      color: '#333',
      marginTop: 7,
    }}>
      <CardMedia
        component="img"
        height="194"
        image={data.image}
        alt="Image Here"
        onClick={() => {
          history.push("/news/" + data._id);
        }}
      />
      <CardContent >
        <Typography variant="body2" color="#333" fontSize={15}>
          {data.detail.length > 100 ? shortDetail + '.....' : data.detail}
        </Typography>
      </CardContent>
    </Card>
  );
}
