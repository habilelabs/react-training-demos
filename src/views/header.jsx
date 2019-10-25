import React from 'react'
import {Navbar} from 'react-bootstrap';

function Header(props){
    return (
        <React.Fragment>
           <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand >React JS Training</Navbar.Brand>
            </Navbar>
        </React.Fragment>
    );
}

export  default  Header;