import React from 'react'
import ReactDOM,{render} from 'react-dom'
import HelloWorld from './components/HelloWorld'

render(
    <HelloWorld greet="I am ReactJS"/>,
    document.getElementById('app')
);