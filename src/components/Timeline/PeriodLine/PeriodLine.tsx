import React from 'react';
import { Key } from '../../../hooks/useKeyboard';
import { PeriodStatus } from '../types';
import './PeriodLine.less';

interface PeriodLineProps {
    label: string;
    status: PeriodStatus;
    xPosition: number;
    width: number;
    onClick?: () => void;
}

const PeriodLine = ({
    label,
    status,
    xPosition,
    width,
    onClick = () => {}
}: PeriodLineProps) => {
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.keyCode === Key.Enter || e.keyCode === Key.Space) {
            onClick();
        }
    };

    return (
        <div
            role="button"
            aria-label={label}
            className={`Period ${status}`}
            style={{
                left: xPosition,
                width: `${width}px`
            }}
            tabIndex={0}
            onClick={onClick}
            onKeyDown={handleKeyPress}
        />
    );
};

export default PeriodLine;
