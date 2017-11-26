import React from 'react';
import expect from 'expect';

//Testing basic component rendering
test('render HelloWorld component', () => {
    const wrapper = shallow(
        <div className='hello-world'>
            <h1>ReactJS Seed</h1>
            <p>Welcome to ReactJS Seed</p>
        </div>
    );
    expect(wrapper).toMatchSnapshot();
});

