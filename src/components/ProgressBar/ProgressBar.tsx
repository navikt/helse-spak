import React from 'react';
import { Undertekst } from 'nav-frontend-typografi';
import { AnimatePresence, motion } from 'framer-motion';
import './ProgressBar.less';

interface ProgressBarProps {
    current: number;
    total: number;
}

const barAnimation = (current: number, total: number) => ({
    initial: {
        width: '0%'
    },
    animate: {
        width: `${(current / total) * 100}%`
    },
    exit: {
        width: '0%'
    },
    transition: {
        type: 'tween',
        duration: 0.2,
        ease: 'easeInOut'
    }
});

const ProgressBar = ({ current, total }: ProgressBarProps) => {
    return (
        <div className="ProgressBar__wrapper">
            <Undertekst className="ProgressBar__counter">
                {current}/{total}
            </Undertekst>
            <div className="ProgressBar">
                <AnimatePresence>
                    {current > 0 && (
                        <motion.figure
                            className="ProgressBar__bar"
                            {...barAnimation(current, total)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProgressBar;
