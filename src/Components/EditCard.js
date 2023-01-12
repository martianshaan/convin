import React from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CancelIcon from '@mui/icons-material/Cancel';

function EditCard({editFormData,handleEditFormChange,handleCancelClick}) {
  return (
    <div>
    <Card sx={{ maxWidth: 345,mb:"20px",bgcolor:'tomato',alignItems:"center"}}>
    <CardContent>
    <input type= "text"
          required
          id="Name"
          name='Name'
          label="Name"
          placeholder="Enter a name"
          variant="outlined"
         onChange={(e)=>handleEditFormChange(e)}
         value={editFormData.Name}
        /> <br/>
     <input type= "text"
          required
          id="link"
          name='Link'
          label="link"
         placeholder="Enter a link"
          variant="outlined"
          onChange={(e)=>handleEditFormChange(e)}
          value={editFormData.Link}
        /> <br/>
 <select  id='Bucket' className='bucket' onChange={(e)=>handleEditFormChange(e)} value={editFormData.Bucket} name="Bucket">
          <option value='all'>All</option>
          <option value='educational'>Educational Videos</option>
          <option value='entertainment'>entertainment Videos</option>
          <option value='other'>Other Videos</option>
        </select> <br/>

      <CardActions>
      <Button variant='contained' type='submit' sx={{bgcolor:'black',color:'white',alignItems:"center"}}><SaveAltIcon sx={{mr:'5px'}}/>Save</Button>
      <Button variant='contained'  onClick={handleCancelClick} sx={{bgcolor:'black',color:'white',alignItems:"center"}}> <CancelIcon sx={{mr:'5px'}}/>Cancel</Button>
      </CardActions>
    </CardContent>
  </Card>
         
    
    </div>
  )
}

export default EditCard