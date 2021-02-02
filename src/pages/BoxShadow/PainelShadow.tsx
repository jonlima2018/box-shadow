import React, { useContext } from 'react';
import BoxShadowContext from '../../context/BoxShadow/Context';

const PainelShadow:React.FC = () => {
  const { boxOptions }: any = useContext(BoxShadowContext);

  return (
    <div
      className="box"
      style={{ backgroundColor: `${boxOptions.bgColor}` }}
    >
      <div
        className="box__color"
        style={{ backgroundColor: `${boxOptions.boxColor}`, boxShadow: `${boxOptions.styled}` }}
      >
        <ul className="box__code">
          <li className="box__items">{`-webkit-box-shadow: ${boxOptions.styled}`}</li>
          <li className="box__items">{`-moz-box-shadow: ${boxOptions.styled}`}</li>
          <li className="box__items">{`box-shadow: ${boxOptions.styled}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default PainelShadow;
