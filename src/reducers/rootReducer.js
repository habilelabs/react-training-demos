import { combineReducers } from 'redux';
import counter from './counter';
import stockFilterValue from './updateStockFilterValue';
import searchFilterValue from './updateSearchFilterValue';
import productList from "./productList";

export default combineReducers({
    counter: counter,
    stockFilterValue,
    searchFilterValue,
    productList
});
