import React, { useState, useEffect } from 'react';
import Slide from '../../components/Slider';
import Picker from '../../components/Picker';
import './styles.css';


function BoxShadow(props){

  const [shadowColor, setShadowColor] = useState('#3F51B5');
  const [backgroundColor, setBackgroundColor] = useState('#ececec');
  const [boxColor, setBoxColor] = useState('#888aea');

  const [styleboxshadow, setStyleboxshadow] = useState({ boxShadow: `10px 10px 5px 1px ${shadowColor}` });

  const [horizontal, setHorizontal] = useState(10);
  const [vertical, setVertical] = useState(10);
  const [blur, setBlur] = useState(5);
  const [spread, setSpread] = useState(1);

  const minOffSet = -200;
  const maxOffSet = 200;
  const minBlur = 0;
  const maxBlur = 100;
  const minSpread = 0;
  const maxSpread = 100;
  

  useEffect(() => {
    props.getStyle(styleboxshadow);
    props.getBackgroundColor(backgroundColor);
    props.getBoxColor(boxColor);
  })

  

  const resetCss = () =>{
    setStyleboxshadow({ boxShadow: `10px 10px 5px 1px ${shadowColor}` });
    setHorizontal(10);
    setVertical(10);
    setBlur(5);
    setSpread(1);
    setShadowColor('#3F51B5');
    setBackgroundColor('#ececec');
    setBoxColor('#888aea');
  }

  const setCss = () => {
    setStyleboxshadow({boxShadow: `${horizontal}px ${vertical}px ${blur}px ${spread}px ${shadowColor}`});
  }

  const handleChangeShadowColor = (event) =>{
    setShadowColor(event);
    setCss();
  }

  const handleChangeBackgroundColor = (event) =>{
    setBackgroundColor(event);
  }

  const handleChangeBoxColor = (event) =>{
    setBoxColor(event);
  }

  const minMax = (event, min, max) => {
    if(event.target.value > max){
      event.target.value = max;
    }
    else if(event.target.value < min){
      event.target.value = min;
    }
    return event.target.value === '' ? '' : Number(event.target.value);
  }

  const handleChangeHorizontal = (event, newValue) => {
    setHorizontal(newValue);
    setCss();
  };

  const handleInputHorizontal = (event) => {
    setHorizontal(minMax(event, minOffSet, maxOffSet));
    setCss();
  };

  const handleChangeVertical = (event, newValue) => {
    setVertical(newValue);    
    setCss();
  };

  const handleInputVertical = (event) => {  
    setVertical(minMax(event, minOffSet, maxOffSet));
    setCss();
  };

  const handleChangeBlur = (event, newValue) => {
    setBlur(newValue);    
    setCss();
  };

  const handleInputBlur = (event) => {  
    setBlur(minMax(event, minBlur, maxBlur));
    setCss();
  };

  const handleChangeSpread = (event, newValue) => {
    setSpread(newValue);    
    setCss();
  };

  const handleInputSpread = (event) => {  
    setSpread(minMax(event, minSpread, maxSpread));
    setCss();
  };

  return(
    <div className="container-main">
      <h1>Css Box Shadow</h1>

      <div className="container-boxshadow">
        <div>
          <Slide 
            name={'Horizontal'}
            value={horizontal}
            min={minOffSet}
            max={maxOffSet}
            handleChange={handleChangeHorizontal}
            handleInputChange={handleInputHorizontal} 
          />

          <Slide 
            name={'Vertical'}
            value={vertical}
            min={minOffSet}
            max={maxOffSet}
            handleChange={handleChangeVertical}
            handleInputChange={handleInputVertical} 
          />

          <Slide 
            name={'Blur'}
            value={blur}
            min={minBlur}
            max={maxBlur}
            handleChange={handleChangeBlur}
            handleInputChange={handleInputBlur} 
          />

          <Slide 
            name={'Spread'}
            value={spread}
            min={minSpread}
            max={maxSpread}
            handleChange={handleChangeSpread}
            handleInputChange={handleInputSpread} 
          />
          
          <Picker
            name={'Shadow Color'}
            color={shadowColor}
            getColor={handleChangeShadowColor}
          />
          <Picker
            name={'Background Color'}
            color={backgroundColor}
            getColor={handleChangeBackgroundColor}
          />
          <Picker
            name={'Box Color'}
            color={boxColor}
            getColor={handleChangeBoxColor}
          />
          <button onClick={resetCss}>Reset</button>
        </div>
 
      </div>

    </div>
  );
}

export default BoxShadow;