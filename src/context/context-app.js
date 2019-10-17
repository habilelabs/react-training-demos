import React from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button-consumer';

class ContextApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark,
            }));
        };
    }

    render() {
        // The ThemedButton button inside the ThemeProvider
        // uses the theme from state while the one outside uses
        // the default dark theme
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <ThemedButton onClick={this.toggleTheme}>
                        Change Theme
                    </ThemedButton>
                </ThemeContext.Provider>
                <p>
                    <ThemedButton>
                        Test Button
                    </ThemedButton>
                </p>
            </div>
        );
    }
}

export default ContextApp;