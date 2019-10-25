import React,{Component} from 'react';

class ProductFilters extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div style={{position: 'relative',marginLeft: '20%',marginBottom: '50px'  ,width: '500px'}}><br/><br/>
                <input type="text" name="searchQuery" value={this.props.SearchQuery} onChange={this.props.changeEventHandler} placeholder='Search.....' /><br/>
                <input type="checkbox" name="stocked" value={this.props.Stocked} onChange={this.props.changeEventHandler}  /> show only stock products
            </div>
         );
    }
}
 
export default ProductFilters;