import React, {Component} from 'react';
import {updateCounter} from "../actions/updateCounter";
import {connect} from "react-redux";

class ButtonGroup extends Component {
    incrementCounter = () =>{
        this.props.updateCounter(true);
    }
    decrementCounter = () =>{
        this.props.updateCounter(false);
    }
    render() {
        return (
            <div>
                    <button onClick={this.incrementCounter}> Count Up</button>
                    <button onClick={this.decrementCounter}> Count Down</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    updateCounter: (isIncrement) => dispatch(updateCounter(isIncrement))
});

export default connect(
    null,
    mapDispatchToProps
)(ButtonGroup);