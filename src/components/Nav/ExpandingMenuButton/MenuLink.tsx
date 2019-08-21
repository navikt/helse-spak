import React, { useState } from 'react';
import { TaskStatus } from '../types';
import { NavLink } from 'react-router-dom';
import { Normaltekst } from 'nav-frontend-typografi';
import './MenuLink.less';

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
    const [isActive, setIsActive] = useState(false);

    const classNames = `MenuLink ${status}`;

    return (
        <li
            key={label}
            role="button"
            className={classNames}
            onClick={() => setIsActive(!isActive)}
        >
            <NavLink
                to={`/${sanitizePath(path)}/${sanitizePath(label)}`}
                activeClassName="active"
            >
                <Normaltekst>{label}</Normaltekst>
                <Normaltekst>{value}</Normaltekst>
            </NavLink>
        </li>
    );
};

export default MenuLink;
