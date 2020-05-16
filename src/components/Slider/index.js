import React from 'react';
import { Slider, Input } from '@material-ui/core';
import './styles.css';

const Slide = (props) => {  
  return(
  <>
  <div className="container-slider">
    <div className="section-slider">
      <span>{props.name}</span>
      <Input
        value={props.value}
        margin="dense"
        onChange={props.handleInputChange}
        inputProps={{
          step: 1,
          min: props.min,
          max: props.max,
          type: 'number'
        }}
      />
    </div>
    
    <Slider
      value={props.value}
      min={props.min} 
      step={1} 
      max={props.max}
      onChange={props.handleChange}
      valueLabelDisplay="auto"
    />
    
    
  </div>
  </>    
  
  )
};

export default Slide;
