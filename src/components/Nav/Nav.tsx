import React, { useContext } from 'react';
import ExpandingMenuButton from './ExpandingMenuButton';
import { CaseContext } from '../../context/CaseContext';
import './Nav.less';

const Nav = () => {
    const {
        inngangsvilkår,
        sykdomsvilkår,
        oppfølging,
        sykepengegrunnlag,
        sykepengeperiode,
        utbetaling
    } = useContext(CaseContext);

    return (
        <nav className="Nav" role="menu" aria-orientation="vertical">
            <ExpandingMenuButton label="Sykdomsvilkår" data={sykdomsvilkår} />
            <ExpandingMenuButton label="Inngangsvilkår" data={inngangsvilkår} />
            <ExpandingMenuButton label="Oppfølging" data={oppfølging} />
            <ExpandingMenuButton
                label="Sykepengegrunnlag"
                data={sykepengegrunnlag}
            />
            <ExpandingMenuButton label="Sykepengeperiode" data={sykepengeperiode} />
            <ExpandingMenuButton label="Utbetaling" data={utbetaling} />
            <ExpandingMenuButton label="Oppsummering" />
        </nav>
    );
};

export default Nav;
