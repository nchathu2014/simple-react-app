import React from 'react';
import expect from 'expect';
import DocumentTitle from './../src/components/DocumentTitle';
import {shallow,mount} from 'enzyme';

const wrapper = shallow(
    <DocumentTitle title="hello" name="nuwan"/>
);

test('render DoumentTitle',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('render a document title',()=>{
    expect(wrapper.instance().props.title).toEqual('hello');
    expect(wrapper.instance().props.name).toEqual('nuwan');
});

test('Simulate onClick',()=>{
    const count=0;
    const mockedEvent = { target: {} }
    const wrapper = mount(
        <DocumentTitle title="hello" name="nuwan"/>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.find('button').simulate('click',mockedEvent);
});