import React from 'react';
import { Element, Undertekst } from 'nav-frontend-typografi';
import './PersonBar.less';

const PersonBar = () => {
    return (
        <div className="PersonBar">
            <Element>Mia Cathrine Svendsen</Element>
            <Undertekst>121084 34566</Undertekst>
            <Undertekst>987 65 432</Undertekst>
            <div className="divider" />
        </div>
    );
};

export default PersonBar;
