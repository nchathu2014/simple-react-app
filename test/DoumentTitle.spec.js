import React from 'react';
import expect from 'expect';
import DocumentTitle from './../src/components/DocumentTitle';

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