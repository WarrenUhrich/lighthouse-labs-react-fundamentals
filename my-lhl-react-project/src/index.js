import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import SayHello from './components/SayHello';
import Counter from './components/Counter';
import List from './components/List';

const root = ReactDOM.createRoot(document.getElementById('my-react-app'));
root.render(
  <>
    <List />
    {/* <Counter heading="Counter #1" /> */}
    {/* {SayHello({name: 'Eric'})}
    {SayHello({name: 'Libin'})}
    {SayHello({name: 'Abdi'})}
    <SayHello name="Cedric" /> */}
  </>
);
