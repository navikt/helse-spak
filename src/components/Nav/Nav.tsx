import React, { useContext, useMemo } from 'react';
import uuid from 'uuid';
import ExpandingMenuButton from '../ExpandingMenuButton';
import { RouterProps, withRouter } from 'react-router';
import { CaseContext } from '../../context/CaseContext';
import { CaseField, TaskStatus } from '../../context/types';
import './Nav.less';

interface Item {
    label: string;
    data?: CaseField[];
    expanded?: boolean;
}

const Nav = ({ history }: RouterProps) => {
    const {
        inngangsvilkår,
        sykdomsvilkår,
        oppfølging,
        sykepengegrunnlag,
        sykepengeperiode,
        utbetaling
    } = useContext(CaseContext);

    const shouldExpand = (data: CaseField[], label: string) => {
        const unsolved = data.filter(
            t =>
                t.status === TaskStatus.Unsolved ||
                t.status === TaskStatus.Solved
        );
        return (
            unsolved && history.location.pathname.includes(label.toLowerCase())
        );
    };

    const items = useMemo(
        () => [
            {
                label: 'Sykdomsvilkår',
                data: sykdomsvilkår,
                expanded: shouldExpand(sykdomsvilkår, 'sykdomsvilkår')
            },
            {
                label: 'Inngangsvilkår',
                data: inngangsvilkår,
                expanded: shouldExpand(inngangsvilkår, 'inngangsvilkår')
            },
            {
                label: 'Oppfølging',
                data: oppfølging,
                expanded: shouldExpand(oppfølging, 'oppfølging')
            },
            {
                label: 'Sykepengegrunnlag',
                data: sykepengegrunnlag,
                expanded: shouldExpand(sykepengegrunnlag, 'sykepengegrunnlag')
            },
            {
                label: 'Sykepengeperiode',
                data: sykepengeperiode,
                expanded: shouldExpand(sykepengeperiode, 'sykepengeperiode')
            },
            {
                label: 'Utbetaling',
                data: utbetaling,
                expanded: shouldExpand(utbetaling, 'utbetaling')
            },
            { label: 'Oppsummering' }
        ],
        [history.location.pathname]
    );

    return (
        <nav className="Nav" role="menu" aria-orientation="vertical">
            {items.map((item: Item) => (
                <ExpandingMenuButton key={uuid()} {...item} />
            ))}
        </nav>
    );
};

export default withRouter(Nav);
