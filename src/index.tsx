import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalStyles';
import BoxShadowProvider from './context/BoxShadow/Provider';

ReactDOM.render(
  <React.StrictMode>
    <BoxShadowProvider>
      <GlobalStyles />
      <App />
    </BoxShadowProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
