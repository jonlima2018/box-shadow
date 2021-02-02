import React from 'react';
import { Slider, Input } from '@material-ui/core';
import StyledSlider from './Styled';

interface SlideProps {
  name: string
  value: number
  min: number
  max: number
  handleChange(value: number): void;

}

const Slide: React.FC<SlideProps> = ({
  name, value, min, max, handleChange,
}) => (
  <StyledSlider>
    <div className="container__slider">
      <span className="slider__title">{name}</span>
      <Input
        value={value}
        margin="dense"
        onChange={({ target }) => handleChange(Number(target.value))}
        inputProps={{
          step: 1, min, max, type: 'number',
        }}
      />
    </div>
    <Slider
      step={1}
      min={min}
      max={max}
      value={value}
      onChange={(_, values) => handleChange(Number(values))}
      valueLabelDisplay="auto"
    />
  </StyledSlider>
);

export default Slide;
