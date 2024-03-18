import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import Hello from './components/Hello';
import SayHello from './components/SayHello';
import LightAndDark from './components/LightAndDark';

const names = ['Victoria', 'Eric', 'Jake', 'Rylan', 'Daniel', 'Evangelo', 'Erin'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main>
    <LightAndDark isDark={true} />
    <LightAndDark isDark={false} />

    {SayHello({name: 'Evangelo', school: 'Lighthouse Labs'})}
    <SayHello name="Rylan" school="Lighthouse Labs" />

    {names.map((name, index) => <SayHello key={index} name={name} school="Lighthouse Labs" />)}

  </main>
);
