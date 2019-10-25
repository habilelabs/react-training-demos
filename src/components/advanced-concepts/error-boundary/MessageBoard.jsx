import React from 'react'
import SplitPane from './SplitPane';
import WelcomeDialog from './WelcomeDialog';
import GoodbyeDialog from './GoodbyeDialog';

function MesssageBoard(props){
    return (
        <React.Fragment>
            <SplitPane left={<WelcomeDialog/>} right={<GoodbyeDialog />} />
        </React.Fragment>
    );
}

export  default  MesssageBoard