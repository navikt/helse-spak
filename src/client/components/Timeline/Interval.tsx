import React from 'react';
import { HorizontallyPositioned, Interval } from './types';
import { Key } from '../../hooks/useKeyboard';

type PositionedInterval = Interval & HorizontallyPositioned;

interface Props {
    interval: PositionedInterval;
    isActive: boolean;
    onClick: (interval: Interval) => void;
}

const Interval = ({ interval, isActive, onClick }: Props) => {
    const onSelectInterval = () => {
        onClick(interval as Interval);
    };

    return (
        <div
            className={`Timeline__interval ${isActive ? 'active' : ''}`}
            style={{
                left: `${interval.style.left}%`,
                width: `${interval.style.width}%`
            }}
            onClick={onSelectInterval}
            onKeyDown={e => e.keyCode === Key.Enter && onSelectInterval()}
            tabIndex={0}
        >
            <div className={`Timeline__interval--${isActive ? 'active' : 'inactive'}`} />
        </div>
    );
};

export default Interval;
