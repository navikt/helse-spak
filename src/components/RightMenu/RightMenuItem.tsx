import React, { useState } from 'react';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { motion } from 'framer-motion';
import './RightMenuItem.less';
import { ItemType } from './RightMenu';
import { AcceptedIcon, DocumentIcon, PersonIcon } from './icons';

interface RightMenuProps {
    id: string;
    date: string;
    type: string;
    label: string;
    onRemove: (id: string) => void;
    body?: string;
}

const transition = {
    duration: 0.2
};

const itemAnimation = {
    initial: {
        opacity: 0,
        y: '-100%'
    },
    whileHover: {
        x: -10
    },
    exit: {
        x: 25,
        opacity: 0
    },
    transition
};

const RightMenuItem = ({ type, label, date, body }: RightMenuProps) => {
    const [hasFocus, setHasFocus] = useState(false);

    const strokeColor = '#3e3832';
    const icon =
        type === ItemType.Accepted ? (
            <AcceptedIcon strokeColor={strokeColor} />
        ) : type === ItemType.Document ? (
            <DocumentIcon strokeColor={strokeColor} />
        ) : (
            <PersonIcon strokeColor={strokeColor} />
        );

    return (
        <motion.li
            positionTransition={transition}
            className={`RightMenuItem ${type}`}
            tabIndex={0}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
            animate={{
                opacity: 1,
                y: 0,
                x: hasFocus ? -10 : 0
            }}
            {...itemAnimation}
        >
            <div className="RightMenuItem__content">
                {icon}
                <div className="content">
                    <Undertekst>{date}</Undertekst>
                    <Element>{label}</Element>
                    {body && <Normaltekst>{body}</Normaltekst>}
                </div>
            </div>
        </motion.li>
    );
};

export default RightMenuItem;
