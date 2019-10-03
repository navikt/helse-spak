import React, { useState } from 'react';
import Icon, { IconType } from '../Icon';
import { Normaltekst } from 'nav-frontend-typografi';
import './Chip.less';

interface ChipProps {
    label: string;
    done?: boolean;
    active?: boolean;
    onClick?: () => void;
}

const Chip = ({ label, done, active, onClick }: ChipProps) => {
    const [isActive, setActive] = useState(active);

    const className =
        'Chip' + (isActive ? ' active' : '') + (done ? ' done' : '');

    return (
        <div
            className={className}
            onClick={() => {
                setActive(!isActive);
                onClick && onClick();
            }}
            tabIndex={0}
        >
            <Normaltekst>
                {done && <Icon type={IconType.Check} size={16} />}
                {label}
            </Normaltekst>
        </div>
    );
};

export default Chip;
