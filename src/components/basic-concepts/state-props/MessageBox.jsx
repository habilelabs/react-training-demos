import React from 'react'

function MessageBox(props){
    return (
        <React.Fragment>
            <div style={{backgroundColor:props.Color, width: '150px', height: '150px', margin: '10px'}}>
                <h3>{props.Title}</h3>
                <p>{props.Message}</p>
            </div>
        </React.Fragment>
    );
}

export  default  MessageBox