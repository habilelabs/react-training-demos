import {useEffect, useState} from "react";

function useProductList(props){
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
        if(true){
            fetch("http://my-json-server.typicode.com/habilelabs/fake-products/products")
                .then(res => res.json())
                .then((products)=>{
                    setProductList(products);
                });
        }
    });
    return productList;
}

export default useProductList;