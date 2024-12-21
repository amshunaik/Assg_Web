import React, { useState } from 'react';

const Counter = ({ initialCount = 0 }) => {
    const [count, setCount] = useState(initialCount);

    const Inc = () => {
        setCount((prev) => prev + 1);
    };
    const Dec = () => {
        setCount((prev) => prev - 1);
    };
    const SignChange = () => {
        setCount((prev) => prev * -1);
    };
    const Double = () => {
        setCount((prev) => prev * 2);
    };

    return (
        <div>
            <h3 data-testid="count">Count: {count}</h3>
            <div>
                <button onClick={Inc}>Increment</button>
                <button onClick={Dec}>Decrement</button>
                <button onClick={SignChange}>Change sign</button>
                <button onClick={Double}>Double the number</button>
            </div>
        </div>
    );
};

export default Counter;
