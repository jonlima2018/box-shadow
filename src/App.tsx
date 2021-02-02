import React, { useContext } from 'react';
import BoxShadow from './pages/BoxShadow';
import './App.css';
import BoxShadowContext from './context/BoxShadow/Context';

const App:React.FC = () => {
  const { boxOptions }: any = useContext(BoxShadowContext);

  return (
    <div className="container">
      <BoxShadow />
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
    </div>
  );
};

export default App;
