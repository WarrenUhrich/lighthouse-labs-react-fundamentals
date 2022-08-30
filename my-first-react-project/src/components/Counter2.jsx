import { useState } from 'react';

function Counter2() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(prev => prev + 1)}>
            Clicked {count} Times
        </button>
    );
}

export default Counter2;
