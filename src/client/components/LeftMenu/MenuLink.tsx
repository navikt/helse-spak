import React from 'react';
import StatusIndicator from '../StatusIndicator';
import { NavLink } from 'react-router-dom';
import { Normaltekst } from 'nav-frontend-typografi';
import { PeriodeStatus } from '../../context/types';
import './MenuLink.less';

interface MenuLinkProps {
    label: string;
    path: string;
    status?: PeriodeStatus;
}

const MenuLink = ({ label, status, path }: MenuLinkProps) => {
    return (
        <span className="MenuLink">
            {status === PeriodeStatus.Unsolved && (
                <StatusIndicator taskCount={1} />
            )}
            {status === PeriodeStatus.Solved && <StatusIndicator taskCount={0} />}
            <NavLink to={path} activeClassName="active">
                <Normaltekst className="MenuLink__label">{label}</Normaltekst>
            </NavLink>
        </span>
    );
};

export default MenuLink;
