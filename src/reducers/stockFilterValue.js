function stockFilterValue(state = false, action) {
    switch (action.type) {
        case 'UPDATE_STOCK_VALUE':
            return action.value;
        default:
            return state
    }
}
export default stockFilterValue;