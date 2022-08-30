import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Hello from './components/Hello';
import SayHello from './components/SayHello';
import Counter from './components/Counter';
import ToDoList from './components/ToDoList';

const root = ReactDOM.createRoot(document.getElementById('root'));

// SayHello({name: 'Hope', greeting: 'Hola, '});

root.render(
  <React.StrictMode>
    <ToDoList heading="My Brand New Separate List!" />
    <ToDoList />
    <Counter />
    <SayHello name="Hope" />
    <SayHello greeting="Howdy, " name="Ed" />
    <Hello />
  </React.StrictMode>
);
