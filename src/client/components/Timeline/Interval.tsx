import React from 'react';
import { HorizontallyPositioned, Interval } from './types';

type PositionedInterval = Interval & HorizontallyPositioned;

interface Props {
    interval: PositionedInterval;
    isActive: boolean;
    onClick: (interval: Interval) => void;
}

const Interval = ({ interval, isActive, onClick }: Props) => {
    return (
        <div
            className={`Timeline__interval ${isActive ? 'active' : ''}`}
            style={{
                left: `${interval.style.left}%`,
                width: `${interval.style.width}%`
            }}
            onClick={() => onClick(interval as Interval)}
        />
    );
};

export default Interval;
