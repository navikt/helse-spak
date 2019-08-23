import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TaskStatus } from '../../../context/types';
import { Normaltekst } from 'nav-frontend-typografi';
import './MenuLink.less';
import { Key } from '../../../hooks/useKeyboard';

interface MenuLinkProps {
    label: string;
    value?: string;
    status?: TaskStatus;
    path?: string;
}

const sanitizePath = (path?: string) =>
    path &&
    path
        .split(' ')
        .join('-')
        .replace('.', '')
        .toLowerCase();

const MenuLink = ({ label, value, status, path }: MenuLinkProps) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const [isActive, setIsActive] = useState(false);

    const classNames = `MenuLink ${status}`;

    const onLinkClick = () => {
        setIsActive(!isActive);
        linkRef.current && linkRef.current.click();
    };

    const onLinkKeyDown = (event: React.KeyboardEvent) => {
        if (event.keyCode === Key.Enter || event.keyCode === Key.Space) {
            onLinkClick();
        }
    };

    useEffect(() => {
        if (linkRef.current) {
            linkRef.current.tabIndex = -1;
        }
    }, [linkRef.current]);

    return (
        <li
            key={label}
            role="menuitem"
            className={classNames}
            onClick={onLinkClick}
            onKeyDown={onLinkKeyDown}
            tabIndex={0}
        >
            <NavLink
                to={`/${sanitizePath(path)}/${sanitizePath(label)}`}
                activeClassName="active"
                innerRef={linkRef}
            >
                <Normaltekst>{label}</Normaltekst>
                <Normaltekst>{value}</Normaltekst>
            </NavLink>
        </li>
    );
};

export default MenuLink;
