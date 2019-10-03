import React from 'react';
import Search from '../Search';
import Separator, { SeparatorAlignment } from '../Separator';
import { Sidetittel } from 'nav-frontend-typografi';
import './TopBar.less';

const TopBar = () => {
    return (
        <header className="TopBar">
            <Sidetittel>NAV Sykepenger</Sidetittel>
            <Separator alignment={SeparatorAlignment.Vertical} />
            <Search
                onSearch={value => {
                    console.log(value);
                }}
            />
        </header>
    );
};

export default TopBar;
