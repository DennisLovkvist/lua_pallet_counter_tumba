import React, { Component } from 'react';
import PalletCountingListItem from './PalletCountingListItem'
import PropTypes from 'prop-types';
import './components.css';

class PalletCountingList extends Component
{
    render() {

        var dry = new Array(4);
        var cold = new Array(4);
        var frozen = new Array(4);
        var global = new Array(4);
        var i = 0;
        
        if(this.props.visible_departments[0])
        {
            for(i = 0;i < dry.length;i++)
            {
                dry[i] = <PalletCountingListItem department={1} pallet_type={i+1} count={this.props.counts[i]} counting_control_id={this.props.counting_control_id} Add={this.props.Add} Subtract={this.props.Subtract} Modify={this.props.Modify}/>
            }
        }
        if(this.props.visible_departments[1])
        {
            for(i = 0;i < cold.length;i++)
            {
                cold[i] = <PalletCountingListItem department={2} pallet_type={i+1} count={this.props.counts[4+i]} counting_control_id={this.props.counting_control_id} Add={this.props.Add} Subtract={this.props.Subtract} Modify={this.props.Modify}/>
            }
        }
        if(this.props.visible_departments[2])
        {
            for(i = 0;i < frozen.length;i++)
            {
                frozen[i] = <PalletCountingListItem department={3} pallet_type={i+1} count={this.props.counts[8+i]} counting_control_id={this.props.counting_control_id} Add={this.props.Add} Subtract={this.props.Subtract} Modify={this.props.Modify}/>
            }
        }
        if(this.props.visible_departments[3])
        {
            for(var i = 0;i < global.length;i++)
            {
                //Department id range from 1 to 5. Id 4 is reserved for special which is unused. Remove?
                global[i] = <PalletCountingListItem department={5} pallet_type={i+4+1} count={this.props.counts[12+i]} counting_control_id={this.props.counting_control_id} Add={this.props.Add} Subtract={this.props.Subtract} Modify={this.props.Modify}/>
            }
        }

        return(
        <div>                 
            {dry.map((entry) => entry)}
            {cold.map((entry) => entry)}
            {frozen.map((entry) => entry)}
            {global.map((entry) => entry)}           
        </div>
        )
    }

}

PalletCountingList.propTypes = {

    counting_control_id: PropTypes.number.isRequired,
    counts: PropTypes.array.isRequired,
    visible_departments: PropTypes.array.isRequired
}

export default PalletCountingList;
