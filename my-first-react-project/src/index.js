import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Hello from './components/Hello';
import SayHello from './components/SayHello';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SayHello name="Hope" />
    <SayHello greeting="Howdy, " name="Ed" />
    <Hello />
  </React.StrictMode>
);
