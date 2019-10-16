import React, {Component} from 'react';
import ProductItem from "./ProductItem";
import {connect} from "react-redux";
import {getProductList} from "../actions/getProductList";
import stockFilterValue from "../reducers/stockFilterValue";

class ProductTable extends Component {
    componentDidMount() {
        this.props.getProductList();
    }
    render() {
        const productList = this.props.productList;
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productList.map((product)=>{
                                return <ProductItem product={product} key={product.name}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    // ... computed data from state and optionally ownProps
    productList: filterProductList(state.productList, state.stockFilterValue)
});

const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    getProductList: () => dispatch(getProductList())
});

function filterProductList(productList, stocked){
    console.log('filterProductList called-------');
    return stocked? productList.filter((product)=> product.stocked) : productList;
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);