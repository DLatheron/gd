import React, { Component } from 'react';
import styled from 'styled-components';

import PlanetaryStatusComponent from './components/PlanetaryStatusComponent';

const StyledApp = styled.div`
    background-color: black;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    color: white;
`;

class App extends Component {
    render() {
        return (
            <StyledApp className="App">
                <header className="App-header">
                    <PlanetaryStatusComponent
                        name='Earth'
                        population={4827436300}
                        planetUrl='/planets/earth-spin.gif'
                    />
                </header>
            </StyledApp>
        );
    }
}

export default App;
