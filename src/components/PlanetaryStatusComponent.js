import React from 'react';
import { string, number } from 'prop-types';
import styled from 'styled-components';

PlanetaryStatusComponent.propTypes = {
    name: string,
    population: number
};

const stats = [
    {
        property: 'loyalty',
        targetProperty: 'targetLoyalty',
        label: 'L',
        colour: '#0000ffc0',
        targetColour: '#0000ff80'
    },
    {
        property: 'fear',
        targetProperty: 'targetFear',
        label: 'F',
        colour: '#ff0000c0',
        targetColour: '#ff000080'
    },
    {
        property: 'subjagation',
        targetProperty: 'targetSubjagation',
        label: 'S',
        colour: '#00ff00c0',
        targetColour: '#00ff0080'
    }
];

const StyledContainer = styled.div`
    display: inline-block;
    border: 1px solid white;
    border-radius: 8px;
    margin: 4px;
    padding: 4px;
    /* overflow: hidden; */
    font-size: 1.0em;
    vertical-align: top;
    white-space: nowrap;
`;

const StyledPlanetImage = styled.img`
    display: inline-block;
    width: 128px;
    height: 128px;
    margin: 8px;
    /* float: left; */
`;

const StyledDetailsContainer = styled.div`
    display: inline-block;
    vertical-align: top;
`;

const StyledName = styled.div`
    display: inline-block;
    font-size: 30px;
`;

const StyledPopulation = styled.div`
    font-size: 0.75rem;
`;

const StyledType = styled.div`
    /* background-color: green; */
    font-size: 1.0rem;
`;

const StyledBarsContainer = styled.table`
    font-size: 0.75rem;
`;

const StyledBarLabel = styled.td`
    width: 1%;
`;

const StyledBarContainer = styled.td`
    position: relative;
`;

const StyledBar = styled.div`
    background-color: ${({ color }) => color };
    position: absolute;
    top: 1px;
    bottom: 0;
    left: 0;
    right: ${({ value }) => 100 - value }%;
`;

const StyledBarValue = styled.td`
    width: 1%;
`;

function formatPopulation(population) {
    if (population >= 1000000000 / 2) {
        return `${(population / 1000000000).toFixed(2)} billion`;
    } else if (population >= 1000000 / 2) {
        return `${(population / 1000000).toFixed(2)} million`;
    } else if (population >= 1000 / 2) {
        return `${(population / 1000).toFixed(2)} thousand`;
    } else {
        return population.toString();
    }
}

export default function PlanetaryStatusComponent(props) {
    const {
        name,
        planetUrl,
        population
    } = props;

    return (
        <StyledContainer>
            <StyledPlanetImage src={planetUrl} alt='planet' />
            <StyledDetailsContainer>
                <StyledName>{name}</StyledName>
                <StyledPopulation>Pop. {formatPopulation(population)}</StyledPopulation>
                <StyledType>Mixed Economy</StyledType>
                <StyledBarsContainer>
                    <tbody>
                        {
                            stats.map(({ property, targetProperty, label, colour, targetColour }) =>
                                <tr key={property}>
                                    <StyledBarLabel>{label}:</StyledBarLabel>
                                    <StyledBarContainer>
                                        <StyledBar value={props[property]} color={colour} />
                                        <StyledBar value={props[targetProperty]} color={targetColour} />
                                    </StyledBarContainer>
                                    <StyledBarValue>{props[property]}%</StyledBarValue>
                                </tr>
                            )
                        }
                    </tbody>
                </StyledBarsContainer>
            </StyledDetailsContainer>
        </StyledContainer>
    )
}
