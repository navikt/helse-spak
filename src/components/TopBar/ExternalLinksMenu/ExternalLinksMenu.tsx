import React from 'react';
import PopupMenu from '../../PopupMenu';
import './ExternalLinksMenu.less';
import Separator from '../../Separator';
import { Normaltekst } from 'nav-frontend-typografi';

const buttonContent = (
    <div className="ExternalLinksMenu__button">
        <div>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);

const popupContent = (
    <div className="ExternalLinksMenu__popup">
        <a href="">
            <Normaltekst>Rettskildene</Normaltekst>
        </a>
        <a href="">
            <Normaltekst>Rutinebeskrivelser</Normaltekst>
        </a>
        <Separator />
        <a href="">
            <Normaltekst>Modia</Normaltekst>
        </a>
        <a href="">
            <Normaltekst>Pesys</Normaltekst>
        </a>
        <a href="">
            <Normaltekst>Gosys</Normaltekst>
        </a>
        <a href="">
            <Normaltekst>Arena</Normaltekst>
        </a>
        <a href="">
            <Normaltekst>Foreldrepenger</Normaltekst>
        </a>
    </div>
);

const ExternalLinksMenu = () => {
    return (
        <PopupMenu
            buttonContent={buttonContent}
            popupContent={popupContent}
            className="ExternalLinksMenu"
        />
    );
};

export default ExternalLinksMenu;
