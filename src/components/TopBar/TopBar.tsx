import React from 'react';
import { Sidetittel } from 'nav-frontend-typografi';
import './TopBar.less';

const TopBar = () => {
    return (
        <header className="TopBar">
            <Sidetittel>NAV Sykepenger</Sidetittel>
        </header>
    );
};

export default TopBar;