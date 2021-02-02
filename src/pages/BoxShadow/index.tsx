import React, { useState, useEffect } from 'react';
import Slide from '../../components/Slider';
import Picker from '../../components/Picker';
import './styles.css';

interface BoxShadowProps {
  getStyle(boxShadow: string): string
  getBackgroundColor(color: string): string
  getBoxColor(color: string): string
}

const BoxShadow: React.FC<BoxShadowProps> = ({ getStyle, getBackgroundColor, getBoxColor }) => {
  const INITIAL_STATE = {
    horizontal: 10,
    vertical: 10,
    blur: 5,
    spread: 1,
    shadowColor: '#3F51B5',
    bgColor: '#ececec',
    boxColor: '#888aea',
  };

  const INITIAL_STYLED = `${INITIAL_STATE.horizontal}px ${INITIAL_STATE.vertical}px ${INITIAL_STATE.blur}px ${INITIAL_STATE.spread}px ${INITIAL_STATE.shadowColor}`;

  const [boxOptions, setBoxOptions] = useState(INITIAL_STATE);
  const [styled, setStyled] = useState(INITIAL_STYLED);

  const minOffSet = -200;
  const maxOffSet = 200;
  const minBlur = 0;
  const maxBlur = 100;
  const minSpread = -100;
  const maxSpread = 100;

  const slideItens = [
    {
      title: 'Horizontal',
      initialValue: boxOptions.horizontal,
      min: minOffSet,
      max: maxOffSet,
    },
    {
      title: 'Vertical',
      initialValue: boxOptions.vertical,
      min: minOffSet,
      max: maxOffSet,
    },
    {
      title: 'Blur',
      initialValue: boxOptions.blur,
      min: minBlur,
      max: maxBlur,
    },
    {
      title: 'Spread',
      initialValue: boxOptions.spread,
      min: minSpread,
      max: maxSpread,
    },
  ];

  const pickerItens = [
    {
      title: 'Shadow Color',
      color: boxOptions.shadowColor,
    },
    {
      title: 'Background Color',
      color: boxOptions.bgColor,
    },
    {
      title: 'Box Color',
      color: boxOptions.boxColor,
    },
  ];

  useEffect(() => {
    getStyle(styled);
    getBackgroundColor(boxOptions.bgColor);
    getBoxColor(boxOptions.boxColor);
  });

  const resetCss = () => {
    setBoxOptions(INITIAL_STATE);
    setStyled(INITIAL_STYLED);
  };

  const setCss = () => {
    const {
      horizontal, vertical, blur, spread, shadowColor,
    } = boxOptions;
    setStyled(`${horizontal}px ${vertical}px ${blur}px ${spread}px ${shadowColor}`);
  };

  const minMax = (value:number, min:number, max:number) => {
    if (value > max) {
      return max;
    } if (value < min) {
      return min;
    }
    return value;
  };

  const handleChangeSlide = (name: string, value: number) => {
    switch (name) {
      case 'Horizontal':
        setBoxOptions((prev) => ({ ...prev, horizontal: minMax(value, minOffSet, maxOffSet) }));
        return setCss();
      case 'Vertical':
        setBoxOptions((prev) => ({ ...prev, vertical: minMax(value, minOffSet, maxOffSet) }));
        return setCss();
      case 'Blur':
        setBoxOptions((prev) => ({ ...prev, blur: minMax(value, minBlur, maxBlur) }));
        return setCss();
      case 'Spread':
        setBoxOptions((prev) => ({ ...prev, spread: minMax(value, minSpread, maxSpread) }));
        return setCss();
      default: return '';
    }
  };

  const handleInputColor = (name: string, color: string) => {
    switch (name) {
      case 'Shadow Color':
        setBoxOptions((prev) => ({ ...prev, shadowColor: color }));
        return setCss();
      case 'Background Color':
        return setBoxOptions((prev) => ({ ...prev, bgColor: color }));
      case 'Box Color':
        return setBoxOptions((prev) => ({ ...prev, boxColor: color }));
      default: return '';
    }
  };

  return (
    <div className="container-main">
      <h1>Css Box Shadow</h1>
      <div className="container-boxshadow">
        <div>
          {slideItens.map(({
            title, initialValue, min, max,
          }) => (
            <Slide
              key={title}
              name={title}
              value={initialValue}
              min={min}
              max={max}
              handleChange={(value) => handleChangeSlide(title, value)}
            />
          ))}
          {pickerItens.map(({ title, color }) => (
            <Picker
              key={title}
              name={title}
              color={color}
              getColor={(setColor) => handleInputColor(title, setColor)}
            />
          ))}
          <button type="button" onClick={resetCss}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default BoxShadow;
