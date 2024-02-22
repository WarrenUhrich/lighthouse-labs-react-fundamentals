import React, { useState } from 'react';

const Counter = (props) => {
    // const countState = useState(0);          // Can set initial state
    // const countCurrentState = countState[0]; // Current value stored in state
    // const setCountState = countState[1];     // Function used to update state

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prevCount) => { return prevCount + 1; });
        // prevValue=3  === newValue=4
        console.log('count:', count);
    };
    
    return(
        <>
            <h2>{props.heading ? props.heading : 'Counter Component'}</h2>
            <button onClick={handleClick}>
                This button has been clicked {count} times!
                <br />
                {count === 0 && 'Please click to get started.'}
                {count > 10 && count <= 50 && 'Wow, you\'ve clicked this a lot!'}
                {count > 50 && 'Please stop clicking!'}
            </button>
        </>
    );
};

export default Counter;
