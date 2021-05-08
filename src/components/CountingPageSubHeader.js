import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './components.css';

class CountingPageSubHeader extends Component
{
    render() {

        var titles = new Array(4);


        //lol is an appripriate variable name. Web development is a complete joke.
        //Long live C99
        var lol = <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

        if(this.props.visible_departments[0])
        {
            titles[0] = <div className={"pallet-counter-sub_header-title-dry"}><h2>Pallpatser{lol}Pall{lol}Halvpall{lol}Skrymme</h2></div>
        }
        if(this.props.visible_departments[1])
        {
            titles[1] = <div className={"pallet-counter-header-title-cold"}><div><h2>Pallpatser{lol}Pall{lol}Halvpall{lol}Skrymme</h2></div></div>
        }
        if(this.props.visible_departments[2])
        {
            titles[2] = <div className={"pallet-counter-header-title-frozen"}><div><h2>Pallpatser{lol}Pall{lol}Halvpall{lol}Skrymme</h2></div></div>
        }
        if(this.props.visible_departments[3])
        {
            titles[3] = <div className={"pallet-counter-header-title-global"}><div><h2>Pallpatser{lol}Pall{lol}Halvpall{lol}Skrymme</h2></div></div>
        }


        return(
            <div>
                <div className={"pallet-counter-header-title-sidebar"}>
                    <div><h2>Palltyp</h2></div>
                </div>
                {titles[0]}
                {titles[1]}
                {titles[2]}
                {titles[3]}
            </div>
        )
    }

}

CountingPageSubHeader.propTypes = {
    
    visible_departments: PropTypes.array.isRequired
}

export default CountingPageSubHeader;
