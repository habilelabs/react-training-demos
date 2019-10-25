import React from 'react'

function Footer(props){
    return (
        <footer style={footerStyle}>
            <p>Habilelabs Pvt Ltd</p>
            
        </footer>
    );
}

const footerStyle = {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        borderTop: '1px solid'
}

export  default  Footer