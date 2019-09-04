import React from 'react';
import { Undertekst } from 'nav-frontend-typografi';
import { AnimatePresence, motion } from 'framer-motion';
import './Progresjonsbar.less';

interface ProgresjonsbarProps {
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

const Progresjonsbar = ({ current, total }: ProgresjonsbarProps) => {
    return (
        <div className="Progresjonsbar__wrapper">
            <Undertekst className="Progresjonsbar__counter">
                {current}/{total}
            </Undertekst>
            <div className="Progresjonsbar">
                <AnimatePresence>
                    {current > 0 && (
                        <motion.figure
                            className="Progresjonsbar__bar"
                            {...barAnimation(current, total)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Progresjonsbar;
