import React from 'react';
import { connect } from 'react-redux';
import {updateStockFilter} from '../../actions/updateStockFilter';
import {updateSearchFilter} from  '../../actions/updateSearchFilter';

class ProductFilter extends React.Component {

    searchFilterHandler = (evt) =>{
        this.props.updateSearchFilter(evt.target.value);
    }
    stockFilterHandler = (evt)=>{
        this.props.updateStockFilter(evt.target.checked);
    }

    render(){
        return(
            <div style={{position: 'relative',marginLeft: '20%',marginBottom: '50px'  ,width: '500px'}}><br/><br/>
                <input type="text" placeholder="search"  onChange={this.searchFilterHandler} /> <br/>
                <input type="checkbox"  onClick={this.stockFilterHandler} /> show only stock products
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateStockFilter: stocked => dispatch(updateStockFilter(stocked)),
    updateSearchFilter : searchQuery  => dispatch(updateSearchFilter(searchQuery))

  })
  
  export default connect(
    null,
    mapDispatchToProps
  )(ProductFilter)
