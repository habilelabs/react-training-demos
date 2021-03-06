import React, {Component} from 'react';
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { isError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { isError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.isError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;