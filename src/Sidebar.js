import React, { useContext } from 'react';
import './Sidebar.css';
import Button from '@mui/material/Button';
import { MyContext } from './Contexts/Main';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const context = useContext(MyContext);
    const navigate = useNavigate();
  return (
    <div className="Sidebar">
        <h1 className="sidebarTitle">Friends</h1>
        <ul className='friendsList'>
        {context.posts[0].map((post, index) => <li className="friendItem" key={index}>{post.from}<img src="https://miro.medium.com/max/512/1*nZ9VwHTLxAfNCuCjYAkajg.png" alt="" /></li>)}
        </ul>
        <Button sx={{marginBottom: '5%', backgroundColor:'#1877F2'}} variant="contained" onClick={()=> {context.signedUser[1](""); navigate("/");}}>Logout</Button>
    </div>
  )
}

export default Sidebar