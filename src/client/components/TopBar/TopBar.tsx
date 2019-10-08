import React from 'react';
import Search from '../Search';
import UserMenu from './UserMenu';
import Separator, { SeparatorAlignment } from '../Separator';
import { Sidetittel } from 'nav-frontend-typografi';
import './TopBar.less';
import ExternalLinksMenu from './ExternalLinksMenu';

const TopBar = () => {
    return (
        <header className="TopBar">
            <Sidetittel>NAV Sykepenger</Sidetittel>
            <Separator alignment={SeparatorAlignment.Vertical} />
            <div className="Search__wrapper">
                <Search
                    onSearch={value => {
                        console.log(value);
                    }}
                />
            </div>
            <ExternalLinksMenu />
            <Separator alignment={SeparatorAlignment.Vertical} />
            <UserMenu
                userName="Hans Hansen"
                location="NAV Sagene"
                role="Veileder"
                id="X121212"
            />
        </header>
    );
};

export default TopBar;
