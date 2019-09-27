import React from 'react';
import Clipboard from '../Clipboard';
import { Element, Undertekst } from 'nav-frontend-typografi';
import './PersonBar.less';

const PersonBar = () => {
    return (
        <div className="PersonBar">
            <Element>Mia Cathrine Svendsen</Element>
            <span>/</span>
            <Clipboard>
                <Undertekst>121084 34566</Undertekst>
            </Clipboard>
            <span>/</span>
            <Undertekst>Telefon: 987 65 432</Undertekst>
            <div className="divider" />
        </div>
    );
};

export default PersonBar;
