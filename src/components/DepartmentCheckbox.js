 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './components.css';

class DepartmentCheckbox extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            label: props.label
        };
      }

    myChangeHandler = (event) => {


        this.props.CheckDepartment(this.props.index,event.target.checked);

    }

    render()
    {
            return (
                    <div className="department-checkbox">    
                            
                    <h3>{this.props.label}<input type="checkbox" defaultChecked={true}  id="myCheck" onChange={this.myChangeHandler}></input></h3>
                        
                    </div>
            );      

        
    }

}

DepartmentCheckbox.propTypes = {

    label: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}


export default DepartmentCheckbox;
