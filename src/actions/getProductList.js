export const getProductList = () =>{
    return function (dispatch){
        dispatch({
            type: 'GET_PRODUCT_LIST_LOADING',
            payload: {
                productList : [],
                loading : true
            }
        });
        fetch("http://my-json-server.typicode.com/habilelabs/fake-products/products")
            .then(res => res.json())
            .then((products)=>{
                dispatch({
                    type: 'GET_PRODUCT_LIST_SUCCESS',
                    payload: {
                        loading : false,
                        productList : products
                    }
                });
            })
            .catch((e)=>{
                dispatch({
                    type: 'GET_PRODUCT_LIST_ERROR',
                    payload: {
                        loading : false,
                        error: e
                    }
                });
            })
    };
}