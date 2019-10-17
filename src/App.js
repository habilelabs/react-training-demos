import React, {Component} from 'react';
import './App.css';
import Header from "./Header";

import Counter from "./hooks/Counter";
import ProductTable from "./simple/ProductTable";
import FilterableProductTable from "./components/FilterableProductTable";
import FancyBorder from "./components/FancyBorder";
import WelcomeDialog from "./components/WelcomeDialog";
import GoodbyeDialog from "./components/GoodbyeDialog";
import SplitPane from "./components/SplitPane";
import ContextApp from "./context/context-app";
import CounterWithReducer from "./hooks/CounterWithReducer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date : new Date().toString(),
            count: 0,
            showFooter: true
        };
        setInterval(this.updateDate.bind(this), 1000);
        //this.buttonClick = this.buttonClick.bind(this);
        console.log('I am constructor');
    }

    updateDate(){
      this.setState({
          count : this.state.count + 1
      });
    }
    buttonClick = ()=>{
        this.state.count++;
        this.setState({
            count : this.state.count +1
        });
    }
    btnClick = ()=>{
        this.setState({
            showFooter : !this.state.showFooter
        });
    }

    render() {
        return (
            <div className="App">
                <ContextApp/>
                <CounterWithReducer/>
            </div>
        );
    }
}

export default App;
