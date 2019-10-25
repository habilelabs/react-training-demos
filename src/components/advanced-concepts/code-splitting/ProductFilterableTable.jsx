import React,{Component} from 'react';
import ProductTable from './ProductTable';
import ProductFilters from './ProductFilters';

class ProductFilterableTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [
                {
                  "category": "Sporting Goods",
                  "price": "$49.99",
                  "stocked": true,
                  "name": "Football"
                },
                {
                  "category": "Electronics",
                  "price": "$49.99",
                  "stocked": false,
                  "name": "Iphone 11"
                },
                {
                  "category": "Sporting Goods",
                  "price": "$9.99",
                  "stocked": true,
                  "name": "Baseball"
                },
                {
                  "category": "Sporting Goods",
                  "price": "$29.99",
                  "stocked": false,
                  "name": "Basketball"
                },
                {
                  "category": "Electronics",
                  "price": "$99.99",
                  "stocked": true,
                  "name": "iPod Touch"
                },
                {
                  "category": "Electronics",
                  "price": "$399.99",
                  "stocked": false,
                  "name": "iPhone 5"
                },
                {
                  "category": "Electronics",
                  "price": "$199.99",
                  "stocked": true,
                  "name": "Nexus 7"
                }
              ],
              searchQuery: '',
              stocked: false
         }
    }

    handleUpdateEvent = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }
    render() { 
        return ( 
            <React.Fragment>
                <ProductFilters SearchQuery={this.state.searchQuery} Stocked={this.state.stocked} changeEventHandler={this.handleUpdateEvent} />
                <ProductTable TableData={this.state.data} SearchQuery={this.state.searchQuery} Stocked={this.state.stocked} />
            </React.Fragment>
         );
    }
}
 
export default ProductFilterableTable;