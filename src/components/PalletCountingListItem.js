import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './components.css';

class PalletCountingListItem extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            
          index: props.index,
          count: props.count
        };
      }

   UpdateCount = (counting_control_id, department, pallet_type, value) => {
 
    const request_options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
          {
              counting_control_id: counting_control_id,
              department: department,
              pallet_type: pallet_type,
              value: value,
          })
      };
console.log(request_options);

      fetch('http://' + process.env.REACT_APP_WEB_SERVER_IP + ':8081/UpdateCountingValue', request_options).then(response => {
              
          if(response.status === 200)
          {
            console.log(value);
            this.setState({count: value});
          }
      });
        
  }


    ChangeTB = (event) => {


      var raw = event.target.value.toString();
      this.setState({count:raw})

      var count = parseFloat(event.target.value);

      count = Math.round(count / 0.5) * 0.5;

      if(!isNaN(count))
      {  
          if(typeof count == 'number')
          {                           
              this.UpdateCount(this.props.counting_control_id,this.props.department,this.props.pallet_type, parseFloat(count));
          }
      }
   
            
    }
    Subtract = () =>
    {
        if(this.state.count > 0)
        {
                var count = this.state.count -1;
                this.setState({count:count});
                this.UpdateCount(this.props.counting_control_id,this.props.department,this.props.pallet_type,count);
        }
    }
    Add = () =>
    {
          var count = this.state.count +1;
          this.setState({count:count});
          this.UpdateCount(this.props.counting_control_id,this.props.department,this.props.pallet_type,count);
    }
    render()
    {
        
        var class_name = "count-list-item-dry-even";

        switch(this.props.department) 
        {
            case 1:
                class_name = "count-list-item-dry-even";
              break;
            case 2:
                class_name = "count-list-item-cold-even";
              break;
              case 3:
                class_name = "count-list-item-frozen-even";
              break;
              //Special reserved for id 4. Unused atm.
              case 5:
                class_name = "count-list-item-global-even";
              break;
            default:
              
          }
          var input_type = "tel";
          if(this.props.pallet_type === 1)
          {
              input_type = "number";
          }
        

        //For alternating colors
            return (

                <div className={class_name}>               
                    <button onClick={this.Add}>+</button>      
                    <input type={input_type} value={this.state.count} onChange={this.ChangeTB}/>    
                    <button onClick={this.Subtract}>-</button>
                    
                 </div>   
            );
        

        
    }

}

PalletCountingListItem.propTypes = {

    counting_control_id: PropTypes.number.isRequired,
    pallet_type: PropTypes.number.isRequired,
    department: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
}


export default PalletCountingListItem;
