/**
 * Getting started with hooks.
 */
import React, {useState, useEffect} from 'react';
const CounterWithEffect = (props) => {
    let [counter, setCounter] = useState(0);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Current count is ${counter}`;
        return ()=>{
            console.log('it will be called on cleanup');
        }
    });
    return (
        <div>
            Counter: {counter}
            <div>
                <button onClick={()=>setCounter(counter + 1)}> Count Up</button>
                <button onClick={()=>setCounter(counter - 1)}> Count Down</button>
            </div>
        </div>
    );
};

export default CounterWithEffect;