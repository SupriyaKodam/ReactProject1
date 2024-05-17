import React from 'react'
import TextField from '@mui/material/TextField';
import './TextBox.css';

const Textboxp = ({label}) => {
  return (
    <div className='field'>
        <TextField label={label}/>
        </div>
      
  )
}

export default Textboxp
