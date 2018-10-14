import React from 'react';
import { string, number } from 'prop-types';
import styled from 'styled-components';

PlanetaryStatusComponent.propTypes = {
    name: string,
    population: number
};

const StyledContainer = styled.div`
    display: block;
    border: 1px solid white;
    border-radius: 8px;
    margin: 4px;
    padding: 4px;
    overflow: hidden;
`;

const StyledPlanetImage = styled.img`
    display: inline-block;
    width: 64px;
    height: 64px;
`;

const StyledName = styled.span`
    display: inline-block;
    vertical-align: top;
    /* background-color: green; */
    margin: 4px;
`;

const StyledPopulation = styled.span`
    display: inline-block;
    vertical-align: top;
    /* background-color: red; */
    margin: 4px;
    font-size: 75%;
`;

const StyledBarContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    background-color: #ddd;
    height: 16px;
    margin: 4px;
`;

const StyledBar = styled.div`
    background-color: ${({ color }) => color };
    width: ${({ value }) => value }%;
    padding-right: 4px;
    text-align: right;
    font-size: 40%;
    color: black;
`;

function formatPopulation(population) {
    if (population >= 1000000000) {
        return `${(population / 1000000000).toFixed(2)} billion`;
    } else if (population >= 1000000) {
        return `${(population / 1000000).toFixed(2)} million`;
    } else if (population >= 1000) {
        return `${(population / 1000).toFixed(2)} thousand`;
    } else {
        return population.toString();
    }
}

export default function PlanetaryStatusComponent({
    name,
    population,
    planetUrl,
}) {
    return (
        <StyledContainer>
            <StyledPlanetImage src={planetUrl} alt='planet' />
            <StyledName>{name}</StyledName>
            <StyledPopulation>(Pop. {formatPopulation(population)})</StyledPopulation>
            <StyledBarContainer>
                <StyledBar value={50} color='red'>{50}%</StyledBar>
            </StyledBarContainer>
            <StyledBarContainer>
                <StyledBar value={25} color='green'>{25}%</StyledBar>
            </StyledBarContainer>
            <StyledBarContainer>
                <StyledBar value={100} color='blue'>{100}%</StyledBar>
            </StyledBarContainer>
        </StyledContainer>
    )
}
