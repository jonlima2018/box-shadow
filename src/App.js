import React, { useState } from 'react';
import BoxShadow from './pages/BoxShadow';
import './App.css';

function App() {

  const [styleboxshadow, setStyleboxshadow] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [boxColor, setBoxColor] = useState('#c4c4c4');

  return (
    <div className="container">
      <BoxShadow
        getStyle={setStyleboxshadow}
        getBackgroundColor={setBackgroundColor}
        getBoxColor={setBoxColor}
      />
        <div className="mainBox" style={{backgroundColor: `${backgroundColor}`}}>
          <div className="box" style={{backgroundColor: `${boxColor}`, boxShadow: `${styleboxshadow.boxShadow}`}}>
            <ul>
              <li>-webkit-box-shadow: {styleboxshadow.boxShadow}</li>
              <li>-moz-box-shadow: {styleboxshadow.boxShadow}</li>
              <li>box-shadow: {styleboxshadow.boxShadow}</li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default App;
