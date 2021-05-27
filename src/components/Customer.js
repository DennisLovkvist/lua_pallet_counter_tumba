import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PalletCountingList from './PalletCountingList'
import './components.css';

class Customer extends Component
{
    render() {

        return(
        <div>
            <div className={"dol-gul-dur"}>
                <h3>{this.props.customer.customer_number}<p>{this.props.customer.customer_name}</p></h3>
                
            </div>            
                <PalletCountingList key={0} counts={this.props.customer.counts} counting_control_id={this.props.customer.counting_control_id} visible_departments={this.props.visible_departments} Add={this.props.Add} Subtract={this.props.Subtract} Modify={this.props.Modify}/>   
            </div>
        )
    }

}

Customer.propTypes = {

    customer: PropTypes.object.isRequired,
    visible_departments: PropTypes.array.isRequired
}

export default Customer;
