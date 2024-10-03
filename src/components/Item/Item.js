import React, { useState, useContext, useRef } from 'react';
import { ItemWrapper } from "./Item.style";
import { ThemeContext } from "../theme-context";
import PropTypes from "prop-types";

const QUADRANT_TO_POINT_COLOR_MAP = {
    270: "#6b9e78",
    0: "#e16a7c",
    90: "#cc850a",
    180: "#47a1ad",
}

const CircleWithNumber = ({ number, radius, color, textColor }) => {
    const diameter = radius * 2;
    const center = radius; // Center position for the circle

    return (
        <svg width={diameter} height={diameter}>
            <circle
                cx={center}
                cy={center}
                r={radius}
                fill={color} // Circle color
            />
            <text
                x={center}
                y={center + 3}
                alignmentBaseline="middle"
                textAnchor="middle"
                fill={textColor} // Text color
                fontSize={10} // Adjust font size relative to the circle
            >
                {number}
            </text>
        </svg>
    );
};

function Item(props) {
    //create ref
    let ref = useRef(null);

    //context variables
    const { itemFontSize, fontFamily } = useContext(ThemeContext);

    //state variables
    const [isHovered, setIsHovered] = useState(false);

    const onMouseToggle = () => {
        setIsHovered(!isHovered);
    };

    return (
        <ItemWrapper
            className="blip"
            id={'blip-' + props.data.id}
            transform={" rotate(" + props.rotateDegrees + ") translate(" + (props.data.x) + "," + (props.data.y) + ")"}
            onMouseEnter={onMouseToggle}
            onMouseLeave={onMouseToggle}
            ref={ref}
            style={{
                opacity: isHovered ? '1.0' : '0.7',
                fontWeight: isHovered ? "Bold" : "Normal"
            }}
        >
            <CircleWithNumber number={props.data.label} radius={10} color={QUADRANT_TO_POINT_COLOR_MAP[Math.abs(props.rotateDegrees)]} textColor="white" />
            {isHovered &&
                <text
                    className={"name"}
                    dx={"7px"}
                    dy={"7px"}
                    fontSize={itemFontSize}
                    fontFamily={fontFamily}
                >
                    {props.data.name}
                </text>
            }
        </ItemWrapper>
    )
}

Item.propTypes = {
    rotateDegrees: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired
};

export default Item;
