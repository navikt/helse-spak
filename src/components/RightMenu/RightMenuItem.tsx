import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Element, Undertekst } from 'nav-frontend-typografi';
import './RightMenuItem.less';

interface RightMenuProps {
    id: string;
    date: string;
    type: string;
    label: string;
    onRemove: (id: string) => void;
    body?: string;
}

const RightMenuItem = ({ type, label, date, body }: RightMenuProps) => {
    const [active, setActive] = useState(false);
    const [visited, setVisited] = useState(false);

    const className = classNames(
        'RightMenuItem',
        type,
        active && 'active',
        visited && 'visited'
    );

    const onClick = () => {
        setActive(true);
        setVisited(true);
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13) {
            onClick();
        }
    };

    return (
        <motion.li
            className={className}
            tabIndex={0}
            onClick={onClick}
            onKeyDown={onKeyDown}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
        >
            <div className="RightMenuItem__content">
                <div className="content">
                    <Element>{label}</Element>
                    <Undertekst>{date}</Undertekst>
                    {body && <Undertekst>{body}</Undertekst>}
                </div>
            </div>
        </motion.li>
    );
};

export default RightMenuItem;
