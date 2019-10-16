import React, {Component} from 'react';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 0
        };
    }

    incrementCounter = () =>{
        this.setState({
            counter : this.state.counter+1
        });
    }

    decrementCounter = () =>{
        this.setState({
            counter : this.state.counter - 1
        });
    }

    render() {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.incrementCounter}> Count Up</button>
                <button onClick={this.decrementCounter}> Count Down</button>
            </div>
        );
    }
}

export default Counter;