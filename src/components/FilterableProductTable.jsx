import React, {Component} from 'react';
import ProductTable from "./ProductTable";
import ProductFilter from "./ProductFilter";

class FilterableProductTable extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductFilter/>
                <ProductTable/>
            </React.Fragment>
        );
    }
}

export default FilterableProductTable;