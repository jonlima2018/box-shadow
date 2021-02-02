import React, { useContext } from 'react';
import BoxShadowContext from '../../context/BoxShadow/Context';

const PainelShadow:React.FC = () => {
  const { boxOptions }: any = useContext(BoxShadowContext);

  return (
    <div
      className="mainBox"
      style={{ backgroundColor: `${boxOptions.bgColor}` }}
    >
      <div
        className="box"
        style={{
          backgroundColor: `${boxOptions.boxColor}`,
          boxShadow: `${boxOptions.styled}`,
        }}
      >
        <ul>
          <li>
            {`-webkit-box-shadow: ${boxOptions.styled}`}
          </li>
          <li>
            {`-moz-box-shadow: ${boxOptions.styled}`}
          </li>
          <li>
            {`box-shadow: ${boxOptions.styled}`}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PainelShadow;
