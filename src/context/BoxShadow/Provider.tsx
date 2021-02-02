import React, { useState } from 'react';
import BoxShadowContext, { BoxOptions } from './Context';

interface Props {
  children: React.ReactNode
}

const INITIAL_STATE:BoxOptions = {
  horizontal: 10,
  vertical: 10,
  blur: 5,
  spread: 1,
  shadowColor: '#3F51B5',
  bgColor: '#ececec',
  boxColor: '#888aea',
  styled: '10px 10px 5px 1px #3F51B5',
};

const Provider:React.FC<Props> = ({ children }) => {
  const reset = INITIAL_STATE;
  const [boxOptions, setBoxOptions] = useState(INITIAL_STATE);
  return (
    <BoxShadowContext.Provider value={{ boxOptions, setBoxOptions, reset }}>
      {children}
    </BoxShadowContext.Provider>
  );
};

export default Provider;
