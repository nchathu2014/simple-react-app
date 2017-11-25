import React from 'react';
import expect from 'expect';
import HelloWorld from '../src/components/HelloWorld';
import {shallow, mount} from 'enzyme';

const wrapper = shallow(<HelloWorld/>);


describe('HelloWorldComponent', () => {
    it('renders h1', () => {
        expect(wrapper.find('h1').text()).toEqual('ReactJS Seed');
    });
    it('renders p', () => {
        expect(wrapper.find('p').text()).toEqual('Welcome to ReactJS Seed');
    });

    it('input box', () => {
        const input = wrapper.find('input').html();
        expect(input).toEqual('<input type="text" placeholder="Enter your name"/>');
    });

});