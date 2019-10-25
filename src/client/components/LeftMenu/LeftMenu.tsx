import React from 'react';
import './LeftMenu.less';
import MenuLink from './MenuLink';

const LeftMenu = () => {
    return (
        <div className="LeftMenu">
            <MenuLink label="Sykmeldingsperiode" path="/sykmeldingsperiode" />
            <MenuLink label="Sykdomsvilkår" path="/sykdomsvilkår" />
            <MenuLink label="Inngangsvilkår" path="/inngangsvilkår" />
            <MenuLink label="Inntektskilder" path="/inntektskilder" />
            <MenuLink label="Sykepengegrunnlag" path="/Sykepengegrunnlag" />
            <MenuLink label="Fordeling" path="/Fordeling" />
            <MenuLink label="Utbetalingsoversikt" path="/utbetalingsoversikt" />
            <MenuLink label="Oppsummering" path="/oppsummering" />
        </div>
    );
};

export default LeftMenu;
