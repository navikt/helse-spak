import React, { useMemo, useState } from 'react';
import MenuLink from './MenuLink';
import StatusIndicator from '../StatusIndicator';
import { NedChevron, OppChevron } from 'nav-frontend-chevron';
import { Undertittel } from 'nav-frontend-typografi';
import { TaskStatus } from '../../context/types';
import { AnimatePresence, motion } from 'framer-motion';
import './ExpandingMenuButton.less';

export interface ExpandingMenuButtonData {
    label: string;
    value?: string;
    status?: TaskStatus;
}

interface ExpandingMenuButtonProps {
    label: string;
    data?: ExpandingMenuButtonData[];
    expanded?: boolean;
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

const ExpandingMenuButton = ({
    label,
    data,
    expanded = false
}: ExpandingMenuButtonProps) => {
    const [isOpen, setIsOpen] = useState(expanded);

    const className = `ExpandingMenuButton ${
        isOpen ? 'ExpandingMenuButton--open' : 'ExpandingMenuButton--closed'
    }`;

    const unsolvedTasks = useMemo(
        () => data && data.filter(item => item.status === TaskStatus.Unsolved),
        [data]
    );

    const solvedTasks = useMemo(
        () => data && data.filter(item => item.status === TaskStatus.Solved),
        [data]
    );

    const allTasksResolved =
        solvedTasks &&
        unsolvedTasks &&
        solvedTasks.length > 0 &&
        unsolvedTasks.length === 0;

    return (
        <>
            <button
                role="menu"
                className={className}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                {!isOpen && unsolvedTasks && unsolvedTasks.length > 0 && (
                    <StatusIndicator taskCount={unsolvedTasks.length} />
                )}
                {!isOpen && allTasksResolved && (
                    <StatusIndicator taskCount={0} />
                )}
                <Undertittel>{label}</Undertittel>
                {isOpen ? <OppChevron /> : <NedChevron />}
            </button>
            <AnimatePresence initial={false}>
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
