import React from 'react'
import { TextField,Button } from '@mui/material';
import './Form.css'

function Form({handleSubmit,handleChange,addFormData}) {
  return (
    <div className='form'>
     <h2>Add a Card</h2>   
     <form  onSubmit={handleSubmit} className='myform'>
     <TextField
          required
          id="Name"
          name='Name'
          label="Name"
          placeholder="Enter a name"
          variant="outlined"
         onChange={handleChange}
         value={addFormData.Name}
        /> 
     <TextField
          required
          id="link"
          name='Link'
          label="link"
         placeholder="Enter a link"
          variant="outlined"
          onChange={handleChange}
          value={addFormData.Link}
        />
        <label id="Bucket" >Select Video Type of Your Choice :</label>
        <select aria-labelledby ='Bucket' className='bucket' onChange={handleChange} value={addFormData.Bucket} 
        name="Bucket">
          <option value='all'>All</option>
          <option value='educational'>Educational Videos</option>
          <option value='entertainment'>entertainment Videos</option>
          <option value='other'>Other Videos</option>
        </select> <br/>

      <Button variant='contained' type='submit' sx={{bgcolor:'black',color:'white',mt:'10px', width: 100, padding: 0.8, margin: 2}}>Add</Button>
     </form>
    </div>
  )
}

export default Form