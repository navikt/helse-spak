import React from 'react';
import { Element, Undertekst } from 'nav-frontend-typografi';
import './RightMenu.less';

export enum ItemType {
    Accepted = 'accepted',
    Document = 'document',
    Note = 'note'
}

const items = [
    {
        date: '2019-01-04',
        label: 'Utbetaling utført',
        type: ItemType.Accepted
    },
    {
        date: '2019-01-04',
        label: 'Svar på søknad - Ja',
        type: ItemType.Accepted
    },
    {
        date: '2019-01-04',
        label: 'Søknad om sykepenger mottatt',
        type: ItemType.Document
    },
    {
        date: '2019-01-04',
        label: 'Korrigering',
        type: ItemType.Note
    },
    {
        date: '2019-01-04',
        label: 'Notat',
        type: ItemType.Note
    },
    {
        date: '2019-01-04',
        label: 'Inntekstmelding mottatt',
        type: ItemType.Document
    },
    {
        date: '2019-01-04',
        label: 'Svar på søknad - Ja',
        type: ItemType.Document
    }
];

const RightMenu = () => {
    return (
        <div className="RightMenu">
            <div className="RightMenu__top">
                <button></button>
                <button></button>
                <button></button>
            </div>
            <ul className="RightMenu__list">
                {items.map((item, i) => (
                    <li
                        key={`${item}-${i}`}
                        className={`RightMenu__item ${item.type}`}
                    >
                        <Undertekst>{item.date}</Undertekst>
                        <Element>{item.label}</Element>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RightMenu;
