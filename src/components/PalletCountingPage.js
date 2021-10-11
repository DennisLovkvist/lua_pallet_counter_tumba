import React, { Component} from 'react';
import Customer from './Customer'
import CountingPageHeader from './CountingPageHeader'
import CountingPageSubHeader from './CountingPageSubHeader'
import CountingPageToolbar from './CountingPageToolbar'
import './components.css';

class PalletCountingPage extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            scroll_x:0,
            customers_source: [],
            customers: [],
            visible_department_dry:true,
            visible_department_cold:true,
            visible_department_frozen:true,
            visible_department_global:true,
            visible_tumba_1:true,
            visible_tumba_2:true,
            visible_tumba_3:true,
        }
    }
    GetDate = () => {
    
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;

        return today;
    }
    FetchSource = (date_start,date_end,tumba) => {

        var url_date_start_string = (date_start.toString().split("-").join(""));
        var url_date_end_string = (date_end.toString().split("-").join(""));

        fetch('http://' + process.env.REACT_APP_WEB_SERVER_IP + ':8081/GetCompleteTumbaCountingByDate/' + url_date_start_string + "/" + url_date_end_string + "/" + tumba)
        .then(res => res.json())
        .then(json => {
          
          console.log(json);
          var customers_source = [];

          for(var i = 0; i < json.length;i++)
          {
              var object = {

                  counting_control_id:json[i].counting_control_id,
                  status_id:json[i].status_id,
                  created_date:json[i].created_date,
                  customer_id:json[i].customer_id,
                  customer_name:json[i].customer_name,
                  customer_number:json[i].customer_number,
                  customer_tumba:json[i].customer_tumba,
                  status_name:json[i].status_name,
                  done: [json[i].done_dry,json[i].done_cold,json[i].done_frozen,json[i].done_global],
                  counts:[
                      json[i].dry_pp,json[i].dry_sp,json[i].dry_hp,json[i].dry_sk,
                      json[i].cold_pp,json[i].cold_sp,json[i].cold_hp,json[i].cold_sk,
                      json[i].frozen_pp,json[i].frozen_sp,json[i].frozen_hp,json[i].frozen_sk,
                      json[i].gray,json[i].wood,json[i].blue,json[i].red
                  ]
              }

              customers_source.push(object);

            }
            this.setState(

                { customers_source: customers_source,
                    customers: customers_source },
            )
        });

    }



    componentDidMount() 
    {
       
        var today = this.GetDate();
        this.FetchSource(today,today,"111");
        window.addEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = () => {
      var scrollLeft = window.pageXOffset;
      if(scrollLeft != this.state.scroll_x)
      {
        this.setState({scroll_x: scrollLeft});
      }
    }

    GetCurrentDateString = () => {
    
        var today = new Date();    

        var y = today.getFullYear();
        var m = (today.getMonth() + 1);
        var d = today.getDate();

        var date = y + '-' + ((m < 10) ? "0":"") + m + '-' + ((d < 10) ? "0":"") + d;

        return ('"' + date.toString().split("-").join("") + '"');
    }

    CheckDepartment = (index, input_value) => {
      
        switch(index) 
        {
            case 0:
                this.setState({visible_department_dry:input_value});
              break;
            case 1:
                this.setState({visible_department_cold:input_value});
                break;
            case 2:
                this.setState({visible_department_frozen:input_value});
                break;
            case 3:
                this.setState({visible_department_global:input_value});
              break;
            default:
              // code block
          }

    }

    CheckTumba = (index, input_value) => {

        var vt1 = this.state.visible_tumba_1;
        var vt2 = this.state.visible_tumba_2;
        var vt3 = this.state.visible_tumba_3;

        switch(index)
        {
            case 0:
                vt1 = input_value;
                break;
            case 1:
                vt2 = input_value;
                break;
            case 2:
                vt3 = input_value;
                break;
            default:
                break;
        }
        

        this.setState({visible_tumba_1:vt1});
        this.setState({visible_tumba_2:vt2});
        this.setState({visible_tumba_3:vt3});
       

        var hash = vt1 + "" + vt2 + "" +vt3;
        hash = hash.replace("true","1");
	hash = hash.replace("true","1");
	hash = hash.replace("true","1");
	hash = hash.replace("false",0);
	hash = hash.replace("false",0);
	hash = hash.replace("false",0);
        var today = this.GetDate();
        this.FetchSource(today,today,hash);

    }
    render()
    {        

        var department_flags = 
        [
            this.state.visible_department_dry,
            this.state.visible_department_cold,
            this.state.visible_department_frozen,
            this.state.visible_department_global
        ];
        

        document.documentElement.style.setProperty('--scroll-x', (-this.state.scroll_x + "px"));

        console.log(this.state.scroll_x);

        return (
            
            <div>
                
                <div className={"space_cookies"}></div>
                {this.state.customers.map((customer) => (
                    <div className={"pallet-counter-tumba"}>  
                        <Customer key={customer.counting_control_id} customer={customer} visible_departments={department_flags} Add={this.Add} Subtract={this.Subtract} Modify={this.Modify}/>
                    </div>    
                ))}


                <div className={"pallet-counter-toolbar"}> <CountingPageToolbar CheckTumba={this.CheckTumba} CheckDepartment={this.CheckDepartment}/></div>

                <div className={"pallet-counter-header"}> <CountingPageHeader visible_departments={department_flags}/></div>
                <div className={"pallet-counter-sub_header"}> <CountingPageSubHeader visible_departments={department_flags}/></div>
                
            
            </div>
            
            );

    }

}

export default PalletCountingPage;
