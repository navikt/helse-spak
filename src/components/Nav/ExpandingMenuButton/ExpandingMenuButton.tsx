import React, { useMemo, useState } from 'react';
import MenuLink from './MenuLink';
import { NedChevron, OppChevron } from 'nav-frontend-chevron';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { TaskStatus } from '../../../context/types';
import './ExpandingMenuButton.less';
import { motion, AnimatePresence } from 'framer-motion';

export interface ExpandingMenuButtonData {
    label: string;
    value?: string;
    status?: TaskStatus;
}

interface ExpandingMenuButtonProps {
    label: string;
    data?: ExpandingMenuButtonData[];
}

const expandingAnimation = {
    initial: { height: 0 },
    animate: { height: 'unset' },
    exit: { height: 0 },
    transition: {
        type: 'tween',
        duration: 0.2
    }
};

const ExpandingMenuButton = ({ label, data }: ExpandingMenuButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const className = `ExpandingMenuButton ${
        isOpen ? 'ExpandingMenuButton--open' : 'ExpandingMenuButton--closed'
    }`;

    const unsolvedTasks = useMemo(
        () => data && data.filter(item => item.status === TaskStatus.Unsolved),
        [data]
    );

    return (
        <>
            <button
                role="menu"
                className={className}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                {isOpen ? <OppChevron /> : <NedChevron />}
                <Undertittel>{label}</Undertittel>
                {unsolvedTasks && unsolvedTasks.length > 0 && (
                    <Normaltekst className="ExpandingMenuButton__counter">
                        {unsolvedTasks.length}
                    </Normaltekst>
                )}
            </button>
            <AnimatePresence initial={true}>
                {isOpen && data && (
                    <motion.ul
                        className="ExpandingMenuButton__content"
                        {...expandingAnimation}
                    >
                        {data.map(item => (
                            <MenuLink
                                key={item.label}
                                {...item}
                                path={label.toLowerCase()}
                            />
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </>
    );
};

export default ExpandingMenuButton;
