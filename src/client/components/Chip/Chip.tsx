import React from 'react';
import classNames from 'classnames';
import { CheckIcon } from '../Icon';
import { Normaltekst } from 'nav-frontend-typografi';
import './Chip.less';

interface ChipProps {
    label: string;
    done?: boolean;
    active?: boolean;
    onClick?: () => void;
    className?: string;
}

const Chip = ({ label, done, active, onClick, className }: ChipProps) => {
    const chipClassName = classNames(
        'Chip',
        className,
        active && 'active',
        done && 'done'
    );

    const onActivation = () => {
        onClick && onClick();
    };

    return (
        <div
            role="button"
            className={chipClassName}
            onClick={onActivation}
            onKeyDown={(e: React.KeyboardEvent) => {
                if (e.keyCode === 13) {
                    onActivation();
                }
            }}
            tabIndex={0}
        >
            <Normaltekst>
                {done && <CheckIcon width={16} height={16} />}
                {label}
            </Normaltekst>
        </div>
    );
};

export default Chip;
