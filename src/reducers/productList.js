function productList(state = [], action) {
    switch (action.type) {
        case 'GET_PRODUCT_LIST_SUCCESS':
            return action.payload.productList;
        default:
            return state;
    }
}
export default productList;