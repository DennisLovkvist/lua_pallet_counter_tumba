import React, { Component } from 'react';
import TumbaCheckbox from './TumbaCheckbox';
import DepartmentCheckbox from './DepartmentCheckbox';
import PropTypes from 'prop-types';
import './components.css';

class CountingPageToolbar extends Component
{
    render() {

        return(
            <div>                
                    <TumbaCheckbox label={"Tumba 1"} index={0} CheckTumba={this.props.CheckTumba}/>
                    <TumbaCheckbox label={"Tumba 2"} index={1} CheckTumba={this.props.CheckTumba}/>
                    <TumbaCheckbox label={"Tumba 3"} index={2} CheckTumba={this.props.CheckTumba}/>

                    <DepartmentCheckbox label={"Kolonial"} index={0} CheckDepartment={this.props.CheckDepartment}/>
                    <DepartmentCheckbox label={"Kylt"} index={1} CheckDepartment={this.props.CheckDepartment}/>
                    <DepartmentCheckbox label={"Fryst"} index={2} CheckDepartment={this.props.CheckDepartment}/>
                    <DepartmentCheckbox label={"Global"} index={3} CheckDepartment={this.props.CheckDepartment}/>               
        </div>
        )
    }

}

export default CountingPageToolbar;
