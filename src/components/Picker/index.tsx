import React, { useState } from 'react';
import { Input } from '@material-ui/core';
import { ChromePicker } from 'react-color';
import StyledPicker from './Styled';

interface PickerProps {
  color: string
  getColor: any
  name: string
}

const Picker: React.FC<PickerProps> = ({ color, getColor, name }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [colorHex, setColorHex] = useState({ hex: color });

  const handleOpen = () => {
    setShowPicker(!showPicker);
  };

  const handleClose = () => {
    setShowPicker(false);
  };

  const handleChange = (color: string) => {
    setColorHex({ hex: color });
    getColor(colorHex.hex);
  };

  return (
    <StyledPicker>
      <span className="picker__title">{name}</span>
      <div className="picker__container">
        <div className="picker__swatch" onClick={handleOpen}>
          <div className="picker__swatch--color" style={{ background: color }} />
        </div>
        <Input className="picker__input" value={color} margin="dense" />
      </div>
      {showPicker && (
        <div className="picker_popover">
          <div className="picker_cover" onClick={handleClose} />
          <ChromePicker disableAlpha color={colorHex.hex} onChange={({ hex }) => handleChange(hex)} />
        </div>
      )}
    </StyledPicker>
  );
}

export default Picker;
