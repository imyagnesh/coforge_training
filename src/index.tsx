import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LocaleProvider from './context/localeContext';
import './rootStyles.css';

ReactDOM.render(
  <LocaleProvider>
    <App />
  </LocaleProvider>,
  document.getElementById('root'),
);
