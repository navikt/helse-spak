import React from 'react';
import ExpandingMenuButton from './ExpandingMenuButton';
import { TaskStatus } from './types';
import { ExpandingMenuButtonData } from './ExpandingMenuButton/ExpandingMenuButton';
import './Nav.less';

const sykepengegrunnlag: ExpandingMenuButtonData[] = [
    { label: 'Månedsinntekt', value: '17 000,00', status: TaskStatus.Solved },
    { label: 'Omregnet til årsinntekt', value: '204 000,00' },
    { label: 'Sammenligningsgr.lag', value: '155 691,00' },
    { label: 'Fastsatt inntekt', value: '-', status: TaskStatus.Unsolved },
    { label: 'Sykepengegrunnlag', value: '-' },
    { label: 'Dagsats', value: '-' }
];

const Nav = () => {
    return (
        <nav className="Nav">
            <ExpandingMenuButton label="Sykdomsvilkår" />
            <ExpandingMenuButton label="Inngangsvilkår" />
            <ExpandingMenuButton
                label="Sykepengegrunnlag"
                data={sykepengegrunnlag}
            />
            <ExpandingMenuButton label="Sykepengeperiode" />
            <ExpandingMenuButton label="Utbetaling" />
            <ExpandingMenuButton label="Oppsummering" />
        </nav>
    );
};

export default Nav;
