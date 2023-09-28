import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SayHello from './components/SayHello';
import Counter from './components/BadCounter';
import AddToList from './components/AddToList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>React App</h1>
    <AddToList/>
    <Counter/>
    <SayHello name="Olawale" abc="123"/>
    <SayHello name="Luna"/>
    <SayHello name="India"/>
    <SayHello/>
  </React.StrictMode>
);
