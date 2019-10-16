import React, {Component} from 'react';
import FancyBorder from "./FancyBorder";
import {connect} from "react-redux";
import {updateStockFilterValue} from "../actions/updateStockFilterValue";

class ProductFilter extends Component {
    updateStockFilterClick = (event)=>{
        this.props.updateStockFilterValue(event.target.checked);
    }
    render() {
        return (
            <FancyBorder color="blue">
                <input type="checkbox" name="isAvailable"
                       defaultChecked={this.props.stocked}
                       onChange={this.updateStockFilterClick}/>
                Show only products in stock
            </FancyBorder>
        );
    }
}

const mapStateToProps = state => ({
    // ... computed data from state and optionally ownProps
    stocked : state.stockFilterValue
});

const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    updateStockFilterValue: (value) => dispatch(updateStockFilterValue(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter);