import React from 'react';
import Icon, { CommonIconProps } from '../Icon';

const AARegisteretIcon = ({
    width = 18,
    height = 20,
    fontColor = '#fff',
    fontSize = 12,
    fill = '#59514b',
    ...rest
}: CommonIconProps) => {
    const xTransform = height / 2 - width / 2;
    return (
        <Icon {...rest}>
            <g stroke="none" fill="none" fillRule="evenodd">
                <g transform={`translate(${xTransform}, 4.000000)`}>
                    <rect
                        fill={fill}
                        x="0"
                        y="1"
                        width={width}
                        height="14"
                        rx="2"
                    />
                    <text fontSize={fontSize} fill={fontColor}>
                        <tspan x="4" y="12.5">
                            AI
                        </tspan>
                    </text>
                </g>
            </g>
        </Icon>
    );
};

export default AARegisteretIcon;
