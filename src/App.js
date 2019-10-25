import React, {Component} from 'react';
import './App.css';
import Header from './views/header';
import Footer from './views/footer';
import Home from  './views/home'

import Counter from "./hooks/Counter";
import ContextApp from "./context/context-app";
import CounterWithReducer from "./hooks/CounterWithReducer";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Home/>
                <Footer />
            </div>
        );
    }
}

export default App;
