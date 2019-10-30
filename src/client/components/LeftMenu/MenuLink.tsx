import React from 'react';
import Icon, { IconType } from '../Icon';
import StatusIndicator from '../StatusIndicator';
import { NavLink } from 'react-router-dom';
import { PeriodeStatus } from '../../context/types';
import { Normaltekst } from 'nav-frontend-typografi';
import './MenuLink.less';

interface MenuLinkProps {
    label: string;
    path: string;
    status?: PeriodeStatus;
    icon?: IconType;
}

const MenuLink = ({ label, status, icon, path }: MenuLinkProps) => {
    return (
        <span className="MenuLink">
            {status === PeriodeStatus.Unsolved && (
                <StatusIndicator taskCount={1} />
            )}
            {status === PeriodeStatus.Solved && <StatusIndicator taskCount={0} />}
            <NavLink to={path} activeClassName="active">
                <Normaltekst className="MenuLink__label">{label}</Normaltekst>
                <span>{icon && <Icon type={icon} />}</span>
            </NavLink>
        </span>
    );
};

export default MenuLink;
