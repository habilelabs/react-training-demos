import React from 'react';
import ProductItem from "../components/ProductItem";
import getProdu from "./getProductList";

function ProductTable(props) {
    const productList = getProdu(props);
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {
                    productList.map((product)=>{
                        return <ProductItem product={product} key={product.name}/>
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;
