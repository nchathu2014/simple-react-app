import React from 'react';
import  DocumentTitle from './DocumentTitle';

const HelloWorld = ({title}) => {
    return (
        <div className='hello-world'>
            <h1>{title}</h1>
            <p>Welcome to ReactJS Seed</p>
            <DocumentTitle name="Nuwan" title="Title"/>
        </div>
    )
};
export default HelloWorld;