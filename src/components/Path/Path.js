import React from 'react';
import {arc as d3arc } from 'd3-shape';
import PropTypes from "prop-types";

function Path(props) {
    const fill = "#FFFFFF"; // Setting the fill color to always be white
    const stroke = "#000000"; // Setting the stroke color to black
    const strokeWidth = 1; // Adjust the stroke width as needed
    const uniquePathId = props.quadIndex + "-" + props.ringIndex;

    const archFunction = () => {
        return d3arc()
            .outerRadius(() => {
                return props.outerRadius * props.ringWidth;
            })
            .innerRadius(() => {
                return props.innerRadius * props.ringWidth;
            })
            .startAngle(() => {
                return Math.PI / 2;
            })
            .endAngle(() => {
                return props.quad_angle + Math.PI / 2;
            });
    };

    return (
        <g>
            <path id={uniquePathId} className={"quadrant"}
                  d={archFunction()()}
                  fill={fill}
                  stroke={stroke} // Adding black border
                  strokeWidth={strokeWidth} // Defining the border thickness
            >
            </path>
        </g>
    )
}

Path.propTypes = {
    quadIndex: PropTypes.number.isRequired,
    ringIndex: PropTypes.number.isRequired,
    ringWidth: PropTypes.number.isRequired,
    ringsLength: PropTypes.number.isRequired,
    quad_angle: PropTypes.number.isRequired,
    outerRadius: PropTypes.number.isRequired,
    innerRadius: PropTypes.number.isRequired,
    title: PropTypes.string
};

export default Path;
