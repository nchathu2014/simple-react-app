import 'raf/polyfill';
import React from 'react';

const HelloWorld = ({title}) => {
    return (
        <div className='hello-world'>
            <h1>{title}</h1>
            <p>Welcome to ReactJS Seed</p>
        </div>
    )
};
export default HelloWorld;