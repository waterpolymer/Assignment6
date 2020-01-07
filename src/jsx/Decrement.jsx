import React, {Component} from 'react';
import Proptype from 'prop-types';
import './../css/Decrement.css'

class Decrement extends Component{
    constructor(props){
        super(props);
        this.state = {number: props.number};

        this.DecrementNumber = this.DecrementNumber.bind(this);
    }

    

    DecrementNumber(){
        if(this.state.number === 0){
            alert("Counter cannot be less than 0");
        }else{
            this.setState({ number: this.state.number -1});
        }
    }

    render(){
        return (<div> 
            <span> Counter: {this.state.number}</span>
            
            <button className="button" onClick={this.DecrementNumber}>Decrement Counter</button> 
        </div>)
    }
}

Decrement.propsTypes = {
    number: Proptype.number
}

export default Decrement;