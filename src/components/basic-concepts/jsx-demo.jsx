import React from 'react'

function JSXDemo(props){
    let x = 100, y= 20;
    return (
        <React.Fragment>
            <h2>JSX Demo</h2>
            <p>X +  Y =  { x+y}</p>
            <p>X - Y = {x-y}</p> 
        </React.Fragment>
    );
}



export  default  JSXDemo