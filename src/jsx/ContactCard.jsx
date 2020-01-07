import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './../css/ContactCard.css'

class ContactCard extends Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.work_number = props.work_number;
        this.email = props.email;
        this.mobile_number = props.mobile_number;
    }

    render(){
        return (<div className="card"> 
            
            <p>{this.props.name}</p>
            <p className="info">{this.props.work_number}</p>
            <p className="info">{this.props.email}</p>
            <p className="info">{this.props.mobile_number}</p>
        </div>)
    }
};

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    work_number: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    mobile_number: PropTypes.number
}

export default ContactCard; 