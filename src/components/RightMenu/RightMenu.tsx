import React, { useEffect, useState } from 'react';
import uuid from 'uuid/v4';
import moment from 'moment';
import RightMenuItem from './RightMenuItem';
import RightMenuButton, { RightMenuButtonIcon } from './RightMenuButton';
import { AnimatePresence } from 'framer-motion';
import './RightMenu.less';

export enum ItemType {
    Accepted = 'accepted',
    Document = 'document',
    Note = 'note'
}

const mockItems = [
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
        type: ItemType.Note,
        body:
            'Mottatt telefon med korrigerende opplysninger på inntektsmelding. Feil uttfylt på ferie.'
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
].map(item => ({ ...item, id: uuid() }));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addWindowProperty = (prop: string, val: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    window[prop] = val;
};

const RightMenu = () => {
    const [items, setItems] = useState(mockItems);

    useEffect(() => {
        addWindowProperty('addMockItem', (label: string, type: ItemType) => {
            setItems([
                {
                    date: moment().format('YYYY-MM-DD'),
                    label,
                    type,
                    id: uuid()
                },
                ...items
            ]);
        });

        addWindowProperty('removeMockItem', (i: number = items.length) => {
            setItems([...items.slice(0, i - 1), ...items.slice(i)]);
        });
    }, [items]);

    const removeItem = (id: string) => {
        setItems(items => items.filter(item => item.id !== id));
    };

    return (
        <div className="RightMenu">
            <div className="RightMenu__top">
                <RightMenuButton icon={RightMenuButtonIcon.History} />
                <RightMenuButton icon={RightMenuButtonIcon.Dialogue} />
                <RightMenuButton icon={RightMenuButtonIcon.Document} />
            </div>
            <ul className="RightMenu__list">
                <AnimatePresence initial={false}>
                    {items.map(item => (
                        <RightMenuItem
                            key={item.id}
                            onRemove={removeItem}
                            {...item}
                        />
                    ))}
                </AnimatePresence>
            </ul>
        </div>
    );
};

export default RightMenu;
