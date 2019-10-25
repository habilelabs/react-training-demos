import React from 'react';
import FancyBorder from "./FancyBorder";
import HOC from "./HightOrderComponent";

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h3 className="Dialog-title">
                {props.title}
            </h3>
            <p className="Dialog-message">
                {props.description}
            </p>

        </FancyBorder>
    );
}

export  default HOC(Dialog);