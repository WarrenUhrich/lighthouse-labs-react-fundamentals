import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import SayHello from './components/SayHello';
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>My First Create React App</h1>
    <Counter title="Our Counter Component" />
    <SayHello />
    <SayHello name="Jaqueline" />
    <SayHello name="Shilpa" />
    <SayHello name="Ahmed">
      <strong>Hey! This is an extra strong element.</strong>
    </SayHello>
  </React.StrictMode>
);
