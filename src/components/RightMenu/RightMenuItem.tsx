import React from 'react';
import { Element, Undertekst } from 'nav-frontend-typografi';
import { motion } from 'framer-motion';

interface RightMenuProps {
    id: string;
    type: string;
    label: string;
    date: string;
    onRemove: (id: string) => void;
}

const itemAnimation = {
    initial: {
        opacity: 0,
        y: '-100%'
    },
    animate: {
        opacity: 1,
        y: 0
    },
    whileHover: {
        scale: 1.05
    },
    exit: {
        x: 25,
        opacity: 0
    },
    transition: {
        duration: 0.1
    }
};

const RightMenuItem = ({ id, type, label, date, onRemove }: RightMenuProps) => {
    return (
        <motion.li
            positionTransition
            className={`RightMenu__item ${type}`}
            {...itemAnimation}
        >
            <Undertekst>{date}</Undertekst>
            <Element>{label}</Element>
        </motion.li>
    );
};

export default RightMenuItem;
