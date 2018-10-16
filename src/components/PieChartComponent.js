import React from 'react';
import { string, number, bool, arrayOf } from 'prop-types';
import styled from 'styled-components';

import PieComponent from './PieComponent';

const StyledContainer = styled.div`
    display: inline-block;
    border: 1px solid white;
    border-radius: 8px;
    margin: 4px;
    padding: 4px;
    font-size: 1.0em;
    vertical-align: top;
    text-align: center;
`;

export default class PieChartComponent extends React.Component {
    static propTypes = {
        name: string,
        data: arrayOf(number).isRequired,
        radius: number,
        hole: number,
        colours: arrayOf(string),
        labels: arrayOf(string),
        percent: bool,
        strokeWidth: number,
        stroke: string
    }

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <StyledContainer>
                <PieComponent
                    {...this.props}
                />
            </StyledContainer>
        );
    }
}
