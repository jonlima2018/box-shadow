import React, { useContext } from 'react';
import Slide from '../../components/Slider';
import Picker from '../../components/Picker';
import './styles.css';
import BoxShadowContext, { BoxOptions } from '../../context/BoxShadow/Context';

const BoxShadow: React.FC = () => {
  const { boxOptions, setBoxOptions, reset } :any = useContext(BoxShadowContext);

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

  const resetCss = () => {
    setBoxOptions(reset);
  };

  const setCss = () => {
    const {
      horizontal, vertical, blur, spread, shadowColor,
    } = boxOptions;
    setBoxOptions((prev:BoxOptions) => ({ ...prev, styled: `${horizontal}px ${vertical}px ${blur}px ${spread}px ${shadowColor}` }));
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
        setBoxOptions((prev:BoxOptions) => ({ ...prev, horizontal: minMax(value, minOffSet, maxOffSet) }));
        return setCss();
      case 'Vertical':
        setBoxOptions((prev: BoxOptions) => ({ ...prev, vertical: minMax(value, minOffSet, maxOffSet) }));
        return setCss();
      case 'Blur':
        setBoxOptions((prev:BoxOptions) => ({ ...prev, blur: minMax(value, minBlur, maxBlur) }));
        return setCss();
      case 'Spread':
        setBoxOptions((prev:BoxOptions) => ({ ...prev, spread: minMax(value, minSpread, maxSpread) }));
        return setCss();
      default: return '';
    }
  };

  const handleInputColor = (name: string, color: string) => {
    switch (name) {
      case 'Shadow Color':
        setBoxOptions((prev:BoxOptions) => ({ ...prev, shadowColor: color }));
        return setCss();
      case 'Background Color':
        return setBoxOptions((prev:BoxOptions) => ({ ...prev, bgColor: color }));
      case 'Box Color':
        return setBoxOptions((prev:BoxOptions) => ({ ...prev, boxColor: color }));
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
