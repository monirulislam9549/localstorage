import React from 'react';
import { multiply } from '../utilities/calculate';

const Shoes = () => {
    const third = 11;
    const fourth = 10;
    const result = multiply(third, fourth)
    return (
        <div>
            <h1>This is shoes</h1>
            <p>{result}</p>
        </div>
    );
};

export default Shoes;