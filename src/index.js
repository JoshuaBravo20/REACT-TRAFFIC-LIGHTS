import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrafficLights from './TrafficLights';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TrafficLights />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
