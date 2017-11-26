import 'raf/polyfill';
import React,{Component} from 'react';

class DocumentTitle extends Component{

    constructor(props){
        super(props);
    }

    render(){
        <div>
            <h1>{this.props.title}</h1>
        </div>
    }

}

export default DocumentTitle;