import React from 'react';

const Counter = (props) => {
    let count = 0;

    const handleClick = () => {
        count = count + 1;
        console.log('count:', count);
    };
    
    return(
        <>
            <h2>{props.heading ? props.heading : 'Counter Component'}</h2>
            <button onClick={handleClick}>
                This button has been clicked {count} times!
            </button>
        </>
    );
};

export default Counter;
