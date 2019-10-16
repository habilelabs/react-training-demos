import { combineReducers } from 'redux';
import counter from './counter';
import something from './something';
import stockFilterValue from './stockFilterValue';
import productList from "./productList";

export default combineReducers({
    counter: counter,
    something,
    stockFilterValue,
    productList
});
