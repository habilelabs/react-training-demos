import React,{Component} from 'react';


class EventHandling extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: ''
        }
    }

    handleChangeEvent = (event) => {
        this.setState({ name: event.target.value});
    }

    render() { 
        return (  
            <div>
                <h2>Event Handling Demo</h2><br/>
                <label>Enter you name:</label><br/>
                <input type="text" onChange={this.handleChangeEvent} /> <br/>
                <button onClick={()=>{alert(this.state.name)}} >Submit</button>
            </div>
        );
    }
}
 
export default EventHandling;