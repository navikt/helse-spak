import React from 'react';
import { CommonIconProps, iconPadding } from '../Icon';

const InntektsmeldingIcon = ({
    fontFamily,
    size = 20,
    fontColor = '#fff',
    fontSize = 12,
    fill = '#59514b'
}: CommonIconProps) => {
    const width = 18;
    const xTransform = size / 2 - width / 2 + iconPadding / 2;
    return (
        <g stroke="none" fill="none" fillRule="evenodd">
            <g transform={`translate(${xTransform}, 4.000000)`}>
                <rect fill={fill} x="0" y="1" width={width} height="14" rx="2" />
                <text
                    fontFamily={fontFamily}
                    fontSize={fontSize}
                    fill={fontColor}
                >
                    <tspan x="3" y="12.5">
                        IM
                    </tspan>
                </text>
            </g>
        </g>
    );
};

export default InntektsmeldingIcon;
