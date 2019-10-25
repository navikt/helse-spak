import React from 'react';
import Icon, { IconType } from '../Icon';
import StatusIndicator from '../StatusIndicator';
import { NavLink } from 'react-router-dom';
import { TaskStatus } from '../../context/types';
import { Normaltekst } from 'nav-frontend-typografi';
import './MenuLink.less';

interface MenuLinkProps {
    label: string;
    path: string;
    status?: TaskStatus;
    icon?: IconType;
}

const MenuLink = ({ label, status, icon, path }: MenuLinkProps) => {
    return (
        <span className="MenuLink">
            {status === TaskStatus.Unsolved && (
                <StatusIndicator taskCount={1} />
            )}
            {status === TaskStatus.Solved && <StatusIndicator taskCount={0} />}
            <NavLink to={path} activeClassName="active">
                <Normaltekst className="MenuLink__label">{label}</Normaltekst>
                <span>{icon && <Icon type={icon} />}</span>
            </NavLink>
        </span>
    );
};

export default MenuLink;
