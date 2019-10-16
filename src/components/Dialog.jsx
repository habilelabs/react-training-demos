import React from 'react';
import FancyBorder from "./FancyBorder";
import logProps from "./logProps";

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.description}
            </p>
        </FancyBorder>
    );
}

export  default logProps(Dialog);