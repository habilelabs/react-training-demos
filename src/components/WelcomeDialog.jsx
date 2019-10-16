import React from 'react';
import FancyBorder from "./FancyBorder";
import ErrorBoundary from "./ErrorBoundary";
import Dialog from "./Dialog";

function WelcomeDialog() {
    throw  "Error";
    return (
        <Dialog title="Welcome" description="Thank you for visiting our spacecraft!"/>
    );
}

export  default WelcomeDialog;