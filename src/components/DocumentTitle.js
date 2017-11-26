import React,{Component} from 'react';

class DocumentTitle extends Component{

    constructor(props){
        super(props);
        this.state={
          count:0
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(){
        this.setState({
            count:++(this.state.count)
        })
    }

    render(){

        let {count} = this.state;

        return(
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.handleOnClick}>Click Me</button>
                <h4>{count}</h4>
            </div>
        );
    }

}

export default DocumentTitle;