import React,{Component} from 'react';
import MessageBox from './MessageBox';

class StatePropDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            messages: [
                {
                    Title: 'React JS',
                    Description: 'I am a Javascript Library',
                    Color: '#2980B9'
                },
                {
                    Title: 'Angular JS',
                    Description: 'I am a Javascript Framework',
                    Color: '#E74C3C'
                }
            ]
         }
    }
    render() { 
        return ( 
            <>
                <h2>State & Props Demo</h2>
                { 
                    this.state.messages.map(msg =>{
                       return <MessageBox Title={msg.Title} Message={msg.Description} Color={msg.Color} ></MessageBox>
                    })
                }
            </>
         );
    }
}
 
export default StatePropDemo;