import React from 'react';
import { Key } from '../../../hooks/useKeyboard';
import { motion } from 'framer-motion';
import { PeriodStatus } from '../types';
import './PeriodLine.less';

interface PeriodLineProps {
    label: string;
    status: PeriodStatus;
    xPosition: number;
    width: number;
    onClick?: () => void;
}

const periodLineAnimation = (left: number, width: number) => ({
    animate: {
        left,
        width: `${width}px`
    },
    transition: {
        type: 'spring',
        damping: 15
    },
    initial: false
});

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
        <motion.div
            role="button"
            aria-label={label}
            className={`Period ${status}`}
            tabIndex={0}
            onClick={onClick}
            onKeyDown={handleKeyPress}
            {...periodLineAnimation(xPosition, width)}
        />
    );
};

export default PeriodLine;
