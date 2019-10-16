import React, {useState, useEffect} from 'react';
import ProductItem from "../components/ProductItem";
export default function (props) {
    const [productList, setProductList] = useState([]);
    const [windowSize, setWindowSize] = useState(window.outerHeight);
    useEffect(()=>{
        fetch("http://my-json-server.typicode.com/habilelabs/fake-products/products")
            .then(res => res.json())
            .then((products)=>{
                setProductList(products);
            });
    });
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setWindowSize(window.outerHeight);
        });
        return ()=>{
            window.removeEventListener('resize', ()=>{
            });
        }
    });
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
            <p>Window Size : {windowSize}</p>
        </div>
    );
};


/*
function useWindowSize() {
    const [windowSize, setWindowSize] = useState(window.outerHeight);

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setWindowSize(window.outerHeight);
        });
        return ()=>{
            window.removeEventListener('resize', ()=>{
            });
        }
    });
    return windowSize;
}*/
