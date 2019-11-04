import React from 'react';
import Icon, { CommonIconProps } from '../Icon';

const CheckIcon = ({ fill, ...rest }: CommonIconProps) => {
    return (
        <Icon {...rest}>
            <g transform="translate(2, 2)" stroke={fill}>
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </g>
        </Icon>
    );
};

export default CheckIcon;
