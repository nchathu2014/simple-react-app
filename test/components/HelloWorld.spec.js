import React from 'react';
import expect from 'expect';
import HelloWorld from './../../src/components/HelloWorld';

//Testing basic component rendering
test('render HelloWorld component', () => {
    const wrapper = shallow(<HelloWorld/>);
    expect(wrapper).toMatchSnapshot();
});