import React, {Component} from 'react';

export default function Hoc(WrappedComponent){
    return class extends React.Component {
        componentDidMount() {
            console.log('Current props: ', this.props);
        }

        render() {
            console.log("Log props------");
            // Wraps the input component in a container, without mutating it. Good!
            return <WrappedComponent {...this.props}  />;
        }
    }
}