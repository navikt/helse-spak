import React, { useRef, useState } from 'react';
import Separator from '../../Separator';
import { Element, Normaltekst, Undertekst, Undertittel } from 'nav-frontend-typografi';
import { NedChevron, OppChevron } from 'nav-frontend-chevron';
import { useClickOutside } from '../../../hooks';
import './UserMenu.less';

interface UserMenuProps {
    userName: string;
    location: string;
    role: string;
    id: string;
}

const UserMenu = ({ userName, location, role, id }: UserMenuProps) => {
    const [active, setActive] = useState(true);
    const popupRef = useRef<HTMLDivElement>(null);
    useClickOutside(popupRef, active, () => setActive(false));

    return (
        <div className="UserMenu">
            <div
                role="menu"
                className="UserMenu__button"
                onClick={() => setActive(!active)}
            >
                <div className="UserMenu__left">
                    <div className="UserMenu__top">
                        <Element>{userName}</Element>
                        <Element>{id}</Element>
                    </div>
                    <div className="UserMenu__bottom">
                        <Element>
                            {location}, {role}
                        </Element>
                    </div>
                </div>
                <div className="UserMenu__right">
                    <div className="UserMenu__chevron">
                        {active ? <OppChevron /> : <NedChevron />}
                    </div>
                </div>
            </div>
            {active && (
                <div className="UserMenu__popup" ref={popupRef}>
                    <Undertittel>{userName}</Undertittel>
                    <Undertekst>{id}</Undertekst>
                    <Normaltekst>{role}</Normaltekst>
                    <Separator />
                    <a href="">
                        <Normaltekst>Mine innstillinger</Normaltekst>
                    </a>
                    <a href="">
                        <Normaltekst>Hjelp</Normaltekst>
                    </a>
                    <Separator />
                    <a href="">
                        <Normaltekst>Logg ut</Normaltekst>
                    </a>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
