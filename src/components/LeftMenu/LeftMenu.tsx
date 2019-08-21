import React from 'react';
import Nav from "../Nav/Nav";
import CaseMenu from "../CaseMenu/CaseMenu";
import './LeftMenu.less';

const LeftMenu = () => {
    return (
        <div className="LeftMenu">
            <CaseMenu />
            <Nav />
        </div>
    );
};

export default LeftMenu;
