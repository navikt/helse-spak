import React from 'react';
import classNames from 'classnames';

export interface CommonIconProps {
    width?: number;
    height?: number;
    fill?: string;
    fontColor?: string;
    fontSize?: number;
}

interface IconProps extends CommonIconProps {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
}

const Icon = ({
    children,
    className,
    width = 20,
    height = 20,
    fill = '#000',
    ...rest
}: IconProps) => (
    <svg
        className={classNames('Icon', className)}
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        {...rest}
    >
        {children}
    </svg>
);

export default Icon;
