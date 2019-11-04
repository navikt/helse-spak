import React from 'react';
import Icon, { CommonIconProps } from '../Icon';
import './EditIcon.less';

const EditIcon = ({ width = 24, height = 24, ...rest }: CommonIconProps) => {
    return (
        <Icon className="EditIcon" width={width} height={height} {...rest}>
            <g>
                <circle r={width * 0.5} cx="50%" cy="50%" />
            </g>
            <g transform="scale(0.6 0.6) translate(7.5 7.5)">
                <path d="M0.44,23.561c0.149,0.15,0.378,0.192,0.577,0.094l5.334-2.667l-3.338-3.338l-2.667,5.335 C0.25,23.176,0.288,23.409,0.44,23.561z" />
                <path d="M21.915,5.622l1.061-1.061c0.975-0.975,0.975-2.561,0-3.535c-0.472-0.471-1.1-0.732-1.768-0.732s-1.296,0.261-1.768,0.732 l-1.061,1.061L21.915,5.622z" />
                <rect
                    x="2.48"
                    y="9.086"
                    transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 29.3857 11)"
                    width="20"
                    height="5"
                />
            </g>
        </Icon>
    );
};

export default EditIcon;
