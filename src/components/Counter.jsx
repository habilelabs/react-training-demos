import React, {Component} from 'react';
import {connect} from "react-redux";
import ButtonGroup from "./ButtonGroup";

class Counter extends Component {
    render() {
        return (
            <div>
                Counter: {this.props.counter}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // ... computed data from state and optionally ownProps
    counter : state.counter
});

export default connect(
    mapStateToProps,
    null
)(Counter);