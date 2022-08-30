import { useState } from 'react';

function Counter() {
    const countState = useState(0); // Enter your default state value.

    // Use this to display count; DO NOT CHANGE IT!
    const count = countState[0]; // Current value of the state.

    // Use this to UPDATE the count value.
    const setCount = countState[1]; // A function used for updating the state value.

    const buttonClick = () => {
        setCount((previousCountValue) => {
            return previousCountValue + 1;
        });
    };

    return (
        <button onClick={buttonClick}>
            Clicked {count} Times
        </button>
    );
}

export default Counter;

// Don't use variables if a value in the output will change over time...
// function Counter() {
//     let count = 0;

//     return (
//         <button onClick={() => {count++;console.log(count);}}>
//             Clicked {count} Times
//         </button>
//     );
// }

// export default Counter;
