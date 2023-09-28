import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    // const countState = useState(0); // Default starting value goes in parenthesis.
    // const count = countState[0]; // The CURRENT state value.
    // const setCount = countState[1]; // Function for UPDATING state.
    // console.log(countState);

    const handleClick = () => {
        console.log('clicked!');
        setCount(count + 1);
        console.log('count', count);
    };

    return (
        <section>
            <h2>Counter</h2>
            <button onClick={handleClick}>
                This Button has been clicked {count} times!
            </button>
        </section>
    );
};

export default Counter;
