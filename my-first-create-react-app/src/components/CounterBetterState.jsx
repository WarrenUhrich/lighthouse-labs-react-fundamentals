import { useState } from 'react';

const Counter = (props) => {
    const countStateArray = useState(0); // Pass in the default/starting value.
    console.log(countStateArray);
    const count = countStateArray[0]; // CURRENT VALUE
    const setCount = countStateArray[1]; // FUNCTION TO CHANGE THE VALUE

    // NEVER update state value directly...
    // ALWAYS use the state setter function...
    // ^ This function lets React know we might need to re-render

    const onClickEvent = () => {
        setCount(count + 1);
        console.log('Count updated:');
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
