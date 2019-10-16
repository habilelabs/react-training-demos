import React, {Component} from 'react';
import FancyBorder from "./components/FancyBorder";

class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {
            windowSize : window.outerWidth
        }
    }
    componentWillUnmount() {
        console.log("componentWillUnmount of footer");
        window.removeEventListener("resize", ()=>{

        });
    }
    componentDidMount() {
        window.addEventListener("resize", ()=>{
            this.setState({
                windowSize : window.outerWidth
            })
        });
    }

    render() {
        return (
            <FancyBorder color="red">
                App footer Size= {this.state.windowSize}
            </FancyBorder>
        );
    }
}

export default Footer;