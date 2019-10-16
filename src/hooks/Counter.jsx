/**
 * Getting started with hooks.
 */
import React, {useState, useEffect} from 'react';
const Counter = (props) => {
    let [counter, setCounter] = useState(0);
    let [windowSize, setWindowSize] = useState(window.outerHeight);
    useEffect(()=>{
        //api call
    });
    useEffect(()=>{
        console.log('Adding event listener-------');
        window.addEventListener("resize", ()=>{
            setWindowSize(window.outerHeight);
        })
        return ()=>{
            console.log('doing cleaning-------');
            window.removeEventListener("resize", ()=>{
            });
        }
    }, []);
    return (
        <div>
            Counter: {counter}
            <div>
                <button onClick={()=>setCounter(counter + 1)}> Count Up</button>
                <button onClick={()=>setCounter(counter - 1)}> Count Down</button>
            </div>
            <p>{windowSize}</p>
            <p>{props.count}</p>
        </div>
    );
};

export default Counter;