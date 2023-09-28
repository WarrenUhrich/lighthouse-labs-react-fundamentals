import React from 'react';

const Counter = () => {
    let count = 0;

    const handleClick = () => {
        console.log('clicked!');
        count++; // count = count + 1;
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
