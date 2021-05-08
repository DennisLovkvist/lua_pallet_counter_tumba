import React, { Component } from 'react';
import PalletCountingPage from './components/PalletCountingPage'
import './App.css';

class App extends Component {
  
   
    constructor(props) {
        super(props);        

        this.state = {}
    }

    componentDidMount(){

                
    }  

    render() {
        
            return (
                <div>
                        <PalletCountingPage/>
                </div>
            );
        
        
    }

}

export default App;
