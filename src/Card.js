import React, {memo, useContext} from 'react';
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubble from '@mui/icons-material/ChatBubble';
import TextField from '@mui/material/TextField';
import { MyContext } from './Contexts/Main';
import './Card.css';

const ExpandMore = styled((props) => {
  
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotateY(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const PostCard = (props) => {
  var today = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    var x = '#' + n.slice(0, 6);
    if(x==='#FFFFFF')
    {
      x = '#000000'
    }
    return x;
  };

  const context = useContext(MyContext);

  const [expanded, setExpanded] = React.useState(false);
  const [like, setLike] = React.useState('grey');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const commentItem = (e,id) => {
    if(e.which === 13)
    {
      var temp = [...context.posts[0]];
      var input = document.getElementById('CommentText').value;
      temp[id].comments.unshift({name: context.signedUser[0], message : input});
      context.posts[1](temp);
      document.getElementById('CommentText').value = "";
    }
  }
  const operateLike = (id) => {
    if(like === 'grey') 
    {
      var temp = [...context.posts[0]];
      temp[id].likes += 1;
      context.posts[1](temp);
      setLike('red');
    } 
    else
    {
      temp = [...context.posts[0]];
      temp[id].likes -= 1;
      context.posts[1](temp);
      setLike('grey');
    }

  }
  return (
    <Card sx={{ width: '40vw', margin: '5vw' }}>
      <CardHeader sx={{fontSize: '2vw'}}
        avatar={
          <Avatar sx={{ bgcolor: random_hex_color_code }} aria-label="user">
            {context.posts[0][props.id].from.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={context.posts[0][props.id].from}
        subheader={months[today.getMonth()]+" "+today.getDate()+", "+today.getFullYear()}
      />
      <CardMedia
        component="img"
        height="194"
        image={context.posts[0][props.id].photo}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body" color="text.dark">
        {context.posts[0][props.id].text}
        </Typography>
      </CardContent>
      <CardContent><p style={{color: 'grey', fontSize: '1.65vw'}}>{context.posts[0][props.id].likes} Likes {context.posts[0][props.id].comments.length} Comments</p></CardContent>
      <CardActions >
        <IconButton sx={{color: like}} onClick={()=>operateLike(props.id)} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{marginRight: 'auto'}}
        >
        <IconButton aria-label="comment">
          <ChatBubble />
        </IconButton>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <TextField onKeyUp={(e)=>{commentItem(e,props.id)}} sx={{width: '90%'}} id="CommentText" label="Type your comment... press Enter to comment" variant="standard" />
        {context.posts[0][props.id].comments.map((item, index) => <div key={index} className='commentBody'><h6 className='person'>{item.name}</h6><p className='message'>{item.message}</p></div>)}
        <CardContent>
        </CardContent>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default memo(PostCard);