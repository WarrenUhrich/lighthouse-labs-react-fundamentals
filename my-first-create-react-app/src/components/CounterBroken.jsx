import { useState } from 'react';

const Counter = (props) => {
    let count = 0;

    const onClickEvent = () => {
        count = count + 1;
        console.log('Count updated:', count);
    };

    return (
        <section>
            <h2>{props.title ? props.title : 'Counter'}</h2>
            <button onClick={onClickEvent}>
                This button has been clicked {count} times.
            </button>
        </section>
    );
};

export default Counter;
