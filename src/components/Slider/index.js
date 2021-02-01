import React from 'react';
import { Slider, Input } from '@material-ui/core';
import StyledSlider from './Styled';

const Slide = ({ name, value, min, max, handleInputChange, handleChange }) => {
  return (
    <StyledSlider>
      <div className="container--slider">
        <span className="slider--title">{name}</span>
        <Input
          value={value}
          margin="dense"
          onChange={handleInputChange}
          inputProps={{ step: 1, min, max, type: 'number' }}
        />
      </div>
      <Slider
        step={1}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </StyledSlider>
  );
};

export default Slide;
