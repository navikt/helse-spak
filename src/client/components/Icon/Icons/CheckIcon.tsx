import React from 'react';
import { CommonIconProps } from '../Icon';

const CheckIcon = ({ fill }: CommonIconProps) => {
    return (
        <g transform="translate(2, 2)" stroke={fill} >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </g>
    );
};

export default CheckIcon;
