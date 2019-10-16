import React from 'react';
import ErrorBoundary from "./ErrorBoundary";

function SplitPane(props) {
    return (
            <div className="SplitPane">
                <div className="SplitPane-left">
                    <ErrorBoundary>
                        {props.left}
                    </ErrorBoundary>
                </div>
                <div className="SplitPane-right">
                    <ErrorBoundary>
                        {props.right}
                    </ErrorBoundary>
                </div>
            </div>
    );
}

export  default SplitPane;