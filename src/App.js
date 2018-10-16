import React, { Component } from 'react';
import styled from 'styled-components';

import PlanetaryStatusComponent from './components/PlanetaryStatusComponent';
import PieChartComponent from './components/PieChartComponent';

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
                <div>
                    <PlanetaryStatusComponent
                        name='Earth'
                        planetUrl='/planets/earth.png'
                        population={4827436300}
                        loyalty={50}
                        fear={5}
                        subjagation={95}
                        targetLoyalty={60}
                        targetFear={0}
                        targetSubjagation={75}
                    />

                    <PieChartComponent
                        data={[5, 12, 8, 3, 10]}
                        labels={['Production', 'Argriculture', 'Trade', 'Services', 'Tourism']}
                        radius={150}
                        hole={50}
                        colours={['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']}
                        percent={true}
                        strokeWidth={1}
                        stroke='transparent'
                    />
                </div>
            </StyledApp>
        );
    }
}

export default App;
