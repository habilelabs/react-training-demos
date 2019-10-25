import React,{Component} from 'react';

class LifeCycelEvents extends Component {
    constructor(props) {
        super(props);
        console.log('Hi, I am constructor');
        this.state = { 
            counter: 0
         }
    }

    componentDidMount(){
        console.log('Component Mounted',);
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Component Updated',prevProps, prevState)
    }

    static getDerivedStateFromProps(props, state){
        console.log('Get Derived State From Props',props, state);
        return null;
    }

    handleIncreament= ()=>{
        this.setState(
            {
                counter: this.state.counter + 1
            }
        )
    }

    handleDecrement= ()=>{
        this.setState(
            {
                counter: this.state.counter - 1
            }
        )
    }

    render() { 
        console.log('Render called here');
        return (  
            <div>
                <h2>Life Cycle Event Demo</h2>
                <p> Counter: {this.state.counter} </p>
                <button onClick={this.handleIncreament}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        );
    }
}
 
export default LifeCycelEvents;