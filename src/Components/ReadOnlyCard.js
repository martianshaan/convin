import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Link } from '@mui/material';
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player/lazy'
import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './ReadOnlyCard.css'
function ReadOnlyCard({person,handleEditClick,hanleDeleteClick, setHistory,history}) {

  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
 
  const style = {
    position:'absolute',
    transform: 'translate(-50%, -50%)',
    width: 650,
    height:450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    top: '50%',
    left: '50%',
    p:0,
  };


  return (
    <Card sx={{ maxWidth: 345,mb:"20px",bgcolor:'tomato',alignItems:"center",mt:'20px'}} className='card'>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Artist Name : {person.Name}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
       Video Type: {person.Bucket}
      </Typography>
     <Button  variant='contained' sx={{bgcolor:'black',color:'white'}}onClick={() => {setOpen(true); setPlaying(true);setHistory([person])}}>Play Video</Button>
      <Modal open={open} onClose={() => {setOpen(false); setPlaying(false);}}>
        <Box sx={style}>
        {/* <ReactPlayer url={person.Link}      
           playing={playing}
          width='100%' 
          height='100%'
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          controls= {true}/> */}
        <iframe  src={person.Link} 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        width="100%" height="100%"  allowfullscreen></iframe>
        </Box>
       
      </Modal>
      
      <CardActions sx={{alignItems:"center"}} className='cardactions'>
        <Button variant='contained' sx={{bgcolor:'black',color:'white'}}onClick={(e)=>handleEditClick(e,person)}><EditIcon/></Button>
        <Button variant='contained' sx={{bgcolor:'black',color:'white'}} onClick={()=>hanleDeleteClick(person.id)}><DeleteIcon/></Button>
      </CardActions>
    </CardContent>
  </Card>
  )
}

export default ReadOnlyCard