import React, { useContext } from 'react';
import TextWrapper from "./Text.style";
import { ThemeContext } from "../theme-context";

function Text(props) {

    //context variables
    const { fontSize, fontFamily } = useContext(ThemeContext);

    // Adjust rotation based on text's position
    const transformValue = props.transform
        ? `rotate(180, ${props.dx}, ${props.dy - 3})`
        : ``;

    // Adjust dx for rotated elements
    const transformDx = transformValue ? props.dx - 41 : props.dx;

    return (
        <TextWrapper className={"quadrant"}
            fontSize={fontSize}
            fontFamily={fontFamily}
            dx={transformDx}
            dy={props.dy}
            transform={transformValue}
        >
            {props.name}
        </TextWrapper>
    )
}

export default Text;
