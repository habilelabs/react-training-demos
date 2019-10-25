import React from 'react';
import ErrorBoundary from "./ErrorBoundary";
import Dialog from "../hight-order-component/Dialog";

function WelcomeDialog() {
    return (  
        <Dialog title="Welcome" description="ISRO Mars spacecraft!"/>
    );
}

export  default WelcomeDialog;