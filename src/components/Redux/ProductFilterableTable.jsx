import React from 'react';
import { connect } from 'react-redux';
import ProductFilter from './ProductFilter';
import ProductTable from './ProductTable';
import {getProductList} from "../../actions/getProductList";


class App extends React.Component {

  componentDidMount(){
    this.props.getProductList();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
           <ProductFilter  />
           <ProductTable  productData={this.props.productList} />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productList: state.productList
})

const mapDispatchToProps = dispatch => ({
  getProductList : () => dispatch(getProductList())

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

