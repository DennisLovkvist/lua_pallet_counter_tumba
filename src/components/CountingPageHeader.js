import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './components.css';

class CountingPageHeader extends Component
{
    render() {

        var titles = new Array(4);

        if(this.props.visible_departments[0])
        {
            titles[0] = <div className={"pallet-counter-header-title-dry"}><div><h2>Kolonial</h2></div></div>
        }
        if(this.props.visible_departments[1])
        {
            titles[1] = <div className={"pallet-counter-header-title-cold"}><div><h2>Kylt</h2></div></div>
        }
        if(this.props.visible_departments[2])
        {
            titles[2] = <div className={"pallet-counter-header-title-frozen"}><div><h2>Fryst</h2></div></div>
        }
        if(this.props.visible_departments[3])
        {
            titles[3] = <div className={"pallet-counter-header-title-global"}><div><h2>Global</h2></div></div>
        }


        return(
            <div>
                <div className={"pallet-counter-header-title-sidebar"}>
                    <div><h2>Avdelning</h2></div>
                </div>
                {titles[0]}
                {titles[1]}
                {titles[2]}
                {titles[3]}
            </div>
        )
    }

}

CountingPageHeader.propTypes = {
    
    visible_departments: PropTypes.array.isRequired
}

export default CountingPageHeader;
