import React, { useMemo, useState } from 'react';
import MenuLink from './MenuLink';
import { NedChevron, OppChevron } from 'nav-frontend-chevron';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { TaskStatus } from '../types';
import './ExpandingMenuButton.less';

export interface ExpandingMenuButtonData {
    label: string;
    value?: string;
    status?: TaskStatus;
}

interface ExpandingMenuButtonProps {
    label: string;
    data?: ExpandingMenuButtonData[];
}

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
            {isOpen && data && (
                <ul className="ExpandingMenuButton__content">
                    {data.map(item => (
                        <MenuLink
                            key={item.label}
                            {...item}
                            path={label.toLowerCase()}
                        />
                    ))}
                </ul>
            )}
        </>
    );
};

export default ExpandingMenuButton;
