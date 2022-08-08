import React, { useContext, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import './Home.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Card from './Card';
import { MyContext } from './Contexts/Main';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 50,
  borderRadius: 1,
  p: 4,
};

const Home = () => {
   
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const context = useContext(MyContext);
  const navigate = useNavigate();
  

  useEffect(()=> {
    if(context.signedUser[0] === "")
    {
      navigate('/');
    }
  });
  
  
  const uploadImage = (e) => {
    var image = URL.createObjectURL(e.target.files[0]);
    context.imageAddress[1](image);
  }
  const addNewPost = () => {
    var newID = context.idCounter[0];
    var newtext = document.getElementById('TextUpdate').value;
    var imageURL = context.imageAddress[0];
    var newEntry = [{id: newID, from: context.signedUser[0], text: newtext, photo: imageURL , likes: 0, comments: []}];
    var temp = [...newEntry,...context.posts[0]];
    context.posts[1](temp);
    context.idCounter[1](context.idCounter[0]+1);
    handleClose();
  }
  return (
    <div className="Home">
      <Navbar />
      <div className="centerAlign">
        <Sidebar/>
        <div className="cardsArea">
          {context.posts[0].map((item, index) => <Card key={index} id={item.id} />)}                   
        </div>        
      </div>
      <button className='Add' onClick={()=>{context.imageAddress[1]("");handleOpen()}}> + </button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" sx={{fontSize: '3vw', color: '#4977F2', fontWeight: '800'}}>
              What's on your mind?
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <textarea id="TextUpdate" placeholder='Tell the world, how you are feeling !!'/>
              {context.imageAddress[0]==="" ? null : <div className="uploadedImage">
                <img src={context.imageAddress[0]} alt="" />
              </div>}              
              <input type="file" onChange={uploadImage}/>
              <br />
              <button className="NewPost" onClick={addNewPost}>Post</button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default Home