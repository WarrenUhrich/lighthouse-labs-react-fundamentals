import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Hello from './components/Hello';
import SayHello from './components/SayHello';
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));

// SayHello({name: 'Hope', greeting: 'Hola, '});

root.render(
  <React.StrictMode>
    <Counter />
    <SayHello name="Hope" />
    <SayHello greeting="Howdy, " name="Ed" />
    <Hello />
  </React.StrictMode>
);
