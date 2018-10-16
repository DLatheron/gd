import React from 'react';
import {arrayOf, number, string, bool} from 'prop-types';
import styled, {keyframes} from 'styled-components';

import SliceComponent from './SliceComponent';

PieComponent.propTypes = {
    colours: arrayOf(string),
    labels: arrayOf(string),
    hole: number,
    radius: number,
    data: arrayOf(number),
    percent: bool,
};

const scale = keyframes`
    from {transform: scale(.5);}
    to {transform: scale(1);}
`;

const StyledSvg = styled.svg`
    display: inline-block;
    vertical-align: middle;
    transform-origin: 50% 50%;
    animation: ${scale} .6s;
    margin: 10px;

    font-family: Helvetica, Arial, sans-serif;
    font-weight: bolder;
    font-size: 12px;
`;

export default function PieComponent(props) {
    const { colours, hole, radius } = props;
    const coloursLength = colours.length;
    const diameter = radius * 2;
    const sum = props.data.reduce((carry, current) => {return carry + current}, 0);
    let startAngle = 0;

    return (
        <StyledSvg
            width={diameter}
            height={diameter}
            viewBox={`-2 -2 ${diameter + 4} ${diameter + 4}`}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
        >
            {
                props.data.map((slice, sliceIndex) => {
                    let angle, nextAngle, percent;

                    nextAngle = startAngle;
                    angle = (slice / sum) * 360;
                    percent = (slice / sum) * 100;
                    startAngle += angle;

                    return <SliceComponent
                        key={sliceIndex}
                        value={slice}
                        percent={props.percent}
                        percentValue={percent.toFixed(1)}
                        startAngle={nextAngle}
                        angle={angle}
                        radius={radius}
                        hole={radius - hole}
                        label={props.labels[sliceIndex]}
                        trueHole={hole}
                        showLabel={props.labels.length > 0}
                        fill={colours[sliceIndex % coloursLength]}
                        stroke={props.stroke}
                        strokeWidth={props.strokeWidth}
                    />
               })
           }
        </StyledSvg>
    );
}
