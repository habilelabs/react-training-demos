import React from 'react';
import {ThemeContext} from './theme-context';

function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {({background}) => (
                <button
                    {...props}
                    style={{backgroundColor: background}}
                />
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemedButton;