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
    width: 128px;
    height: 128px;
    margin: 8px;
    float: left;
`;

const StyledName = styled.span`
    display: inline-block;
`;

const StyledPopulation = styled.span`
    display: inline-block;
    font-size: 75%;
`;

const StyledType = styled.div`
    /* background-color: green; */
    font-size: 75%;
`;

const StyledBarsContainer = styled.table`
    font-size: 50%;
`;

const StyledBarLabel = styled.td`
    width: 1%;
`;

const StyledBar = styled.td`
    width: 100%;
`;

const StyledBarValue = styled.td`
    width: 1%;
`;

// const StyledBarContainer = styled.div`
//     box-sizing: border-box;
//     /* width: 100%; */
//     background-color: #ddd;
//     height: 16px;
//     margin: 4px;
// `;

const StyledBar = styled.div`
    background-color: ${({ color }) => color };
    width: ${({ value }) => value }%;
    padding-right: 4px;
    text-align: right;
    font-size: 40%;
    color: black;
`;

const StyledLeftColumn = styled.td`
    width: 1%;
`;

const StyledRightColumn = styled.td`
    width: 99%;
`;

const StyledTopRow = styled.tr`
    vertical-align: top;
    background-color: red;
`;

const StyledMiddleRow = styled.tr`
    vertical-align: middle;
    background-color: green;
`;

const StyledBottomRow = styled.tr`
    vertical-align: bottom;
    background-color: blue;
`;

const StyledPlanetColumn = styled.td`
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
        // <StyledContainer>
        //     <StyledTopRow>
        //         <StyledLeftColumn rowspan='3'>
        //             <StyledPlanetImage src={planetUrl} alt='planet' />
        //         </StyledLeftColumn>
        //         <StyledRightColumn>
        //             <StyledName>{name}</StyledName>
        //             <StyledPopulation>(pop. {formatPopulation(population)})</StyledPopulation>
        //         </StyledRightColumn>
        //     </StyledTopRow>
        //     <StyledMiddleRow>
        //         <StyledLeftColumn />
        //         <StyledRightColumn>Stuff</StyledRightColumn>
        //     </StyledMiddleRow>
        //     <StyledBottomRow>
        //         <StyledLeftColumn />
        //         <StyledRightColumn>
        //             <StyledBarContainer>
        //                 <StyledBar value={50} color='red'>{50}%</StyledBar>
        //             </StyledBarContainer>
        //             <StyledBarContainer>
        //                 <StyledBar value={25} color='green'>{25}%</StyledBar>
        //             </StyledBarContainer>
        //             <StyledBarContainer>
        //                 <StyledBar value={100} color='blue'>{100}%</StyledBar>
        //             </StyledBarContainer>
        //         </StyledRightColumn>
        //     </StyledBottomRow>
        // </StyledContainer>

        <StyledContainer>
            <StyledPlanetImage src={planetUrl} alt='planet' />
            <StyledName>{name}</StyledName>
            <StyledPopulation>(Pop. {formatPopulation(population)})</StyledPopulation>
            <StyledType>Mixed</StyledType>
            <StyledBarsContainer>
                <tr>
                    <StyledBarLabel>L:</StyledBarLabel>
                    <StyledBar></StyledBar>
                    <td style={{width:'1%'}}>50%</td>
                </tr>
                <tr>
                    <td>F:</td>
                    <td></td>
                    <td>50%</td>
                </tr>
                <tr>
                    <td>S:</td>
                    <td></td>
                    <td>50%</td>
                </tr>
            </StyledBarsContainer>
            {/* <StyledBarsContainer>
                <StyledBarContainer>
                    <StyledBar value={50} color='red'>{50}%</StyledBar>
                </StyledBarContainer>
                <StyledBarContainer>
                    <StyledBar value={25} color='green'>{25}%</StyledBar>
                </StyledBarContainer>
                <StyledBarContainer>
                    <StyledBar value={100} color='blue'>{100}%</StyledBar>
                </StyledBarContainer>
            </StyledBarsContainer> */}
        </StyledContainer>
    )
}
