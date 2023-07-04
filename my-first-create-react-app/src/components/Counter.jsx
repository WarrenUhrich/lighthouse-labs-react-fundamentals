import { useState } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0); // Pass in the default/starting value.

    return (
        <section>
            <h2>{props.title ? props.title : 'Counter'}</h2>
            <button onClick={() => setCount(count + 1)}>
                This button has been clicked {count} times.
            </button>
        </section>
    );
};

export default Counter;
